import { z } from "zod";
import { todoInput } from "~/server/types";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.todo.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });

    console.log(
      "todos from prisma",
      todos.map(({ id, text, done }) => ({ id, text, done }))
    );

    return [
      {
        id: "Teste",
        text: "Algo aqui",
        done: false,
      },

      {
        id: "Teste2",
        text: "Algo aqui2",
        done: true,
      },
    ];
  }),

  create: protectedProcedure
    .input(todoInput)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.todo.create({
        data: {
          text: input,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

    delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.todo.delete({
        where: {
          id: input,
        },
      });
    }),

    toggle: protectedProcedure
    .input(z.object({
        id: z.string(),
        done: z.boolean()
    }))
    .mutation(async ({ ctx, input: {id, done} }) => {
      return ctx.prisma.todo.update({
        where: {
          id,
        },
        data: {
            done,
        }
      });
    }),
});

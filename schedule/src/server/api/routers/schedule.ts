import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";


export const scheduleRouter = createTRPCRouter({
  //tarefas de agenda (criar compromissos, deletar etc..)

  getAllCommits: publicProcedure.query(async ({ ctx }) => {
    try {
      const allCommits = await ctx.prisma.commitment.findMany();
      return { allCommits }
      
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        cause: error,
        message: "Não foi possível trazer todos os Agendamentos!"
      });
    }
  }),
  

  createCommitment: publicProcedure
    .input(
      z.object({
        title: z.string(),
        desc: z.string()
      })
    ).mutation(async ({ input, ctx }) => {
      try {
        const createCommitment = await ctx.prisma.commitment.create({
          data: {
            desc: input.desc,
            title: input.title
          },
        });
        return { createCommitment };

      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
          message: "Não foi possível agendar o compromisso"
        });
      }
    }),

  updateCommitment: publicProcedure
    .input(
      z.object({
        desc: z.string(),
        title: z.string(),
        commitId: z.string()
      })
    ).mutation(async ({ input, ctx }) => {
      try {
        const updateCommitment = await ctx.prisma.commitment.update({
          where: {
            id: input.commitId,
          },
          data: {
            desc: input.desc,
            title: input.title
          }
        });

        return { updateCommitment };

      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
          message: "Não foi possível atualizar o compromisso!"
        });
      }
    }),

  deleteCommitment: publicProcedure
    .input(
      z.object({
        commitId: z.string()
      })
    ).mutation(async ({ ctx, input }) => {
      try {
        const deleteCommitment = await ctx.prisma.commitment.delete({
          where: {
            id: input.commitId
          },
        });
        return { deleteCommitment };

      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
          message: "Não foi possível deletar o compromisso!"
        });
      }
    }),
});
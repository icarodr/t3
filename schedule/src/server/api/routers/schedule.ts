import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";


export const scheduleRouter = createTRPCRouter({
  //tarefas de agenda (criar compromissos, deletar etc..)
  createCommitment: publicProcedure
    .input(
      z.object({
        desc: z.string(),
        date: z.date()
      })
    ).mutation(async ({ input, ctx }) => {
      try {
        const createCommitment = await ctx.prisma.commitment.create({
          data: {
            desc: input.desc,
            date: input.date
          },
        });
        return createCommitment;

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
        date: z.date(),
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
            date: input.date,
          }
        });

        return updateCommitment;

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
        return deleteCommitment;

      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
          message: "Não foi possível deletar o compromisso!"
        });
      }
    }),
})
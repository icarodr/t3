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
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
          message: "Não foi possível criar o compromisso"
        });
      }
    }),
})

import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const KanbanRouter = router({
    create: publicProcedure
        .input(
            z.object({
                KbInfo: z.string().min(0).max(500),
                KbPerson: z.string().min(0).max(255),
                KbStatus: z.string().min(4).max(10)

            })).mutation(async ({ ctx, input }) => {
                const kanban = await ctx.prisma.cardKanban.create({
                    data: {
                        info: input.KbInfo,
                        person: input.KbPerson,
                        status: input.KbStatus
                    }
                });
            }),

    getOne: publicProcedure.query(async function ({ ctx, input }) {
        const kanban = await ctx.prisma.cardKanban.findMany();
        return kanban;
    })
});
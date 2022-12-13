import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const productRouter = router({
    create: publicProcedure
    .input(
        z.object({
           prodName: z.string().min(3).max(50),
           prodBrand: z.string().min(3).max(50),
           prodDesc: z.string().min(3).max(500),
           prodPrice: z.number()
        })
    )
    .mutation(async ({ ctx,input }) =>{
        const products = await ctx.prisma.product.create({
            data: {
                name: input.prodName,
                price: input.prodPrice,
            },
        });
        return products;
    }),
    getAll: publicProcedure.query(async ({ ctx }) => {
        const products = await ctx.prisma.product.findMany();
        return products[0];
    }),
    getOne: publicProcedure.query(async ({ ctx }) => {
        const products = await ctx.prisma.product.findMany();
        return products[0];
    })
});
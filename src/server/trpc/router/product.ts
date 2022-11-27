import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

//Padrão para construir
export const productRouter = router({
    //create
    create: publicProcedure
    .input(
        z.object({
            prodName: z.string(),
            prodPrice: z.string(),
        })
    )
    //padrão para alterar
    //.mutation recebe uma função assíncrona com (ctx e input)
    .mutation(async ({ ctx, input }) => {
        const products = await ctx.prisma.product.create({
            data: {
                name: input.prodName,
                price: input.prodPrice,
            },
        });
        return products;
    }),

    getAll: publicProcedure.query(async ({ctx}) =>{
        const products = await ctx.prisma.product.findMany();
        return products
    }),
    one: publicProcedure.query(async ({ ctx }) =>{
        const products = await ctx.prisma.product.findMany();
        return products[0];
    }),
})
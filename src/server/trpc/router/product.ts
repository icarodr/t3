import { z } from 'zod'; //biblioteca de declaração e validação de esquema
import { router, publicProcedure } from '../trpc';

//função para criar o router da tabela no prisma (e fazer as ações com os dados)
export const productRouter = router({
    //primeira procedure(publicProcedure) => para realizar as ações
    create: publicProcedure
    .input(
        //identificar quais campos serão inseridos na tabela do banco de dados e os tipos
        z.object({
           prodName: z.string().min(3).max(50),
           prodBrand: z.string().min(3).max(50),
           prodDesc: z.string().min(3).max(500),
           prodPrice: z.number()
        })
    )
    //basicamente serve pra criar ou alterar os campos existentes
    .mutation(async ({ ctx,input }) =>{
        const products = await ctx.prisma.product.create({
            data: {
                name: input.prodName,
                brand: input.prodBrand,
                desc: input.prodDesc,
                price: input.prodPrice
            }
        });
    }),
    
    //as duas procedures abaixo são responsáveis pelas ações que você pode fazer nos campos
    getAll: publicProcedure.query(async ({ ctx }) => {
        const products = await ctx.prisma.product.findMany();
        return products;
    }),
    
    getOne: publicProcedure.query(async ({ ctx }) => {
        const products = await ctx.prisma.product.findMany();
        return products[0];
    }),

    deleteOne: publicProcedure
        .input(z.object({
            prodId: z.string()
        }))
        .mutation(async ({ctx, input}) =>{
            const products = await ctx.prisma.product.delete({
                where: {
                    id: input.prodId
                    
                }
            })
            return products;
        }),

    // search: publicProcedure
    // .mutation(
    //     z.object({
    //         prodId: z.string()
    //     }))

    searchOne: publicProcedure.input(
        z.object({
            prodId: z.string()
        }))
        .mutation(async({ctx, input}) => {
            
        })
});
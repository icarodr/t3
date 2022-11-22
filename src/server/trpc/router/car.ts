import { z } from "zod";
import { router, publicProcedure } from "../trpc";

//No caso da lista(JSON)

/*
type Car = {
    name: string;
    brand: string;
    price: number;

};
const cars: Car[] = [
    {
        name: "Ford Ka";
        brand: "Ford"
        price: 50000
    },
    {
        name: "Corolla";
        brand: "Toyota"
        price: 100000
    },
];
*/

export const carRouter = router({
    create: publicProcedure
    .input(
        z.object({
            carName: z.string().min(5).max(20),
            carBrand: z.string().min(5).max(20),
            carPrice: z.number()
        })
    )
    .mutation(async ({ ctx, input }) => {
        const cars = await ctx.prisma.car.create({
            data: {
                name: input.carName,
                brand: input.carBrand,
                price: input.carPrice
            },
        });
        return cars;
    }),
    getAll: publicProcedure.query(async ({ ctx }) => {
        const cars = await ctx.prisma.car.findMany();
        return cars[0]
    }),
    one: publicProcedure.query(async ({ ctx }) => {
        const cars = await ctx.prisma.car.findMany();
        return cars[0];
    }),
    //DELETE
    delete1: publicProcedure
        .input(z.object({
            carId: z.string()
        }))
        .mutation(async ({ ctx, input  }) => {
            const car = await ctx.prisma.car.delete({
                where: {
                    id: input.carId
                }
            })

            return car
        }),
});
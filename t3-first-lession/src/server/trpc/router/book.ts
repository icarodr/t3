import { z } from "zod";
import { router, publicProcedure } from "../trpc";

//No caso da lista(JSON)

// type Book = {
//   name: string;
//   author: string;
// };

// const books: Book[] = [
//   {
//     name: "Capitões da Areia",
//     author: "Jorge Amado",
//   },
//   {
//     name: "1984",
//     author: "George Orwell",
//   },
// ];

export const bookRouter = router({
  create: publicProcedure
    .input(
      z.object({
        bookName: z.string(),
        bookAuthor: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const books = await ctx.prisma.book.create({
        data: {
          name: input.bookName,
          author: input.bookAuthor,
        },
      });

      return books;
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    const books = await ctx.prisma.book.findMany();
    return books;
  }),
  one: publicProcedure.query(async ({ ctx }) => {
    const books = await ctx.prisma.book.findMany();
    return books[0];
  }),
});


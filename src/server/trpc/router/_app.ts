import { router } from "../trpc";
import { authRouter } from "./auth";
import { bookRouter } from "./book";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  book: bookRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

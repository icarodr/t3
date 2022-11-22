import { router } from "../trpc";
import { authRouter } from "./auth";
import { bookRouter } from "./book";
import { carRouter } from "./car";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  book: bookRouter,
  car: carRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

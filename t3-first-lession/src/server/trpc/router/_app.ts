import { router } from "../trpc";
import { authRouter } from "./auth";
import { bookRouter } from "./book";
import { carRouter } from "./car";
import { exampleRouter } from "./example";
import { productRouter } from "./product";
import { KanbanRouter } from "./kanban";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  book: bookRouter,
  car: carRouter,
  product: productRouter,
  kanban: KanbanRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

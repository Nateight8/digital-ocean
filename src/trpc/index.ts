import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { authRouter } from "./auth-route";

export const appRouter = router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;

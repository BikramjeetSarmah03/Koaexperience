import { Hono } from "hono";

export const appRouter = new Hono().basePath("/api/v1").get("/health", (c) => {
  return c.json({
    success: true,
    message: "OK",
  });
});

export type AppRouter = typeof appRouter;

import { hc } from "hono/client";

import env from "@/config/env";

import type { AppRouter } from "../../../api/src/routers";

export const apiClient = hc<AppRouter>(env.VITE_SERVER_URL, {
  fetch: ((input, init) => {
    return fetch(input, {
      ...init,
      credentials: "include", // Required for sending cookies cross-origin
    });
  }) satisfies typeof fetch,
}).api.v1;

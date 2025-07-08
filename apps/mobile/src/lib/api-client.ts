import { hc } from "hono/client";

import env from "@/config/env";

import type { AppRouter } from "../../api/src/routers";

export const apiClient = hc<AppRouter>(env.EXPO_PUBLIC_SERVER_URL).api.v1;

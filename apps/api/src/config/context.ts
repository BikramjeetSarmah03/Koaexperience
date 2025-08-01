import type { Env } from "hono";

import type { auth } from "@/lib/auth";

export interface Context extends Env {
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}

import "dotenv/config";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { auth } from "./lib/auth";
import { appRouter } from "./routers";
import type { Context } from "./config/context";

const app = new Hono<Context>();

app.use(logger());

const allowedOrigins = process.env.CORS_ORIGIN?.split(",") || [];

app.use(
	"/*",
	cors({
		origin: (origin) => {
			if (!origin) return null;
			if (allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
				return origin;
			}
			return null;
		},
		allowMethods: ["GET", "POST", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	}),
	async (c, next) => {
		const session = await auth.api.getSession({ headers: c.req.raw.headers });

		if (!session) {
			c.set("user", null);
			c.set("session", null);
			return next();
		}

		c.set("user", session.user);
		c.set("session", session.session);
		return next();
	},
);

app.route("/", appRouter);
app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
	return c.text("OK");
});

export default app;

import "dotenv/config";
import { auth } from "./lib/auth";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

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
);

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
	return c.text("OK");
});

export default app;

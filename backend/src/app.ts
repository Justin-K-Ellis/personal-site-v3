import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { cors } from "hono/cors";
import router from "./router.js";
import healthCheck from "./lib/healthCheck.js";

const app = new Hono();

app.route("/health", healthCheck);
app.use("/api/*", cors());
app.route("/api", router);
app.use("/*", serveStatic({ root: "../frontend/dist" }));

export default app;

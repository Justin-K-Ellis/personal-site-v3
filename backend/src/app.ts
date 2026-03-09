import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import router from "./router.js";

const app = new Hono();

app.use("/*", serveStatic({ root: "../frontend/dist" }));
app.route("/api", router);

export default app;

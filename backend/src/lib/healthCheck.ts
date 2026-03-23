import { Hono } from "hono";

const healthCheck = new Hono();

healthCheck.get("/", (c) => {
  return c.json({ ok: true });
});

export default healthCheck;

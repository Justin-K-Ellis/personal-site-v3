import "dotenv/config";
import { serve } from "@hono/node-server";
import app from "./app.js";
import { getPort } from "../app.config.js";

serve(
  {
    fetch: app.fetch,
    port: getPort(),
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);

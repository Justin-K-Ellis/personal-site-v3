import { Hono } from "hono";

import testController from "./controllers/test.controller.js";

const router = new Hono();

router.route("/test", testController);

export default router;

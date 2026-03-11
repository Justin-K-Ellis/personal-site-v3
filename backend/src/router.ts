import { Hono } from "hono";
import makeTestController from "./controllers/test.controller.js";
import { TestService } from "./services/test.service.js";

const router = new Hono();
const testController = makeTestController(new TestService());

router.route("/test", testController);

export default router;

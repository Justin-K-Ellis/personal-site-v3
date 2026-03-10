import { Hono } from "hono";
import { TestService } from "../services/test.service.js";

const testController = new Hono();
const testService = new TestService();

testController.get("/", (c) => {
  return c.json({
    ok: true,
    message: "all good",
  });
});

testController.get("/cat", (c) => {
  const cats = testService.all();
  return c.json(cats);
});

testController.get("/cat/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  if (isNaN(id)) {
    c.status(400);
    return c.json({ message: "bad request" });
  }
  try {
    const cat = testService.getById(id);
    if (!cat) {
      c.status(404);
      return c.json({ message: "cat does not exist" });
    }
    return c.json(cat);
  } catch (error) {
    console.error(error);
    c.status(500);
    console.error(error);
    return c.json({ message: "Internal server error." });
  }
});

export default testController;

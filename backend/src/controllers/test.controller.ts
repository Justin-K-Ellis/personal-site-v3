import { Hono } from "hono";
import { TestService } from "../services/test.service.js";
import { NewCatSchema } from "../../../shared/types/schema.js";

function makeTestController(testService: TestService) {
  const controller = new Hono();

  // == Read ==
  controller.get("/", (c) => {
    return c.json({
      ok: true,
      message: "all good",
    });
  });

  controller.get("/cat", (c) => {
    const cats = testService.all();
    return c.json(cats);
  });

  controller.get("/cat/:id", async (c) => {
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
      c.status(500);
      console.error(error);
      return c.json({ message: "Internal server error." });
    }
  });

  // == Create ==
  controller.post("/cat", async (c) => {
    const body = await c.req.json();
    try {
      const result = NewCatSchema.safeParse(body);
      if (!result.success) {
        c.status(400);
        return c.json({ message: "Bad request." });
      }
      const newCat = testService.create(result.data);
      if (newCat) {
        c.status(201);
        return c.json(newCat);
      } else {
        c.status(409);
        return c.json({ message: "Cat already exists." });
      }
    } catch (error) {
      c.status(500);
      return c.json({
        message: "Internal server error.",
      });
    }
  });

  return controller;
}

export default makeTestController;

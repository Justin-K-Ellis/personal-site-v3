import { describe, it, expect } from "vitest";
import app from "../app.js";

describe("the health check endpoint", () => {
  it("should return status 200 from GET request", async () => {
    const url = "/health";
    const response = await app.request(url);
    expect(response.status).toBe(200);
  });
});

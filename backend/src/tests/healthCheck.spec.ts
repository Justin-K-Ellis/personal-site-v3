import { describe, it, expect } from "vitest";
import app from "../app.js";

describe("the health check endpoint", () => {
  const URL = "/health";
  it("should return status 200 from GET request", async () => {
    const response = await app.request(URL);
    expect(response.status).toBe(200);
  });

  it("should return the correct response body", async () => {
    const response = await app.request(URL);
    const body = await response.json();
    expect(body).toEqual({ ok: true });
  });
});

import { describe, it, expect } from "vitest";
import app from "../app.js";

describe("the test route", () => {
  const url = "/api/test/cat";
  describe("GET /api/test/cat", () => {
    it("should have status 200", async () => {
      const res = await app.request(url);
      expect(res.status).toBe(200);
    });

    it("should send a list of cats", async () => {
      const cats = [
        { id: 1, name: "Mouchan" },
        { id: 2, name: "Cake" },
      ];
      const res = await app.request(url);
      const data = await res.json();
      expect(data).toEqual(cats);
    });
  });

  describe("GET /api/test/cat/:id", () => {
    it("should have status 200 when cat exists", async () => {
      const res = await app.request(`${url}/1`);
      expect(res.status).toBe(200);
    });

    it("should return the correct cat", async () => {
      const mou = { id: 1, name: "Mouchan" };
      const res = await app.request(`${url}/1`);
      const data = await res.json();
      expect(data).toEqual(mou);
    });

    it("should have status 404 when cat does not exist", async () => {
      const res = await app.request(`${url}/100`);
      expect(res.status).toBe(404);
    });

    it("should have status 400 when given bad parameter", async () => {
      const res = await app.request(`${url}/one`);
      expect(res.status).toBe(400);
    });
  });

  describe("POST /api/test/cat", () => {
    it("should return status 201 on success", async () => {
      const data = { name: "Fluffy" };
      const res = await app.request(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({ "Content-type": "application/json" }),
      });
      expect(res.status).toBe(201);
    });

    it("should return 400 if data is malformed", async () => {
      const data = { catName: "Fluffy" };
      const res = await app.request(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({ "Content-type": "application/json" }),
      });
      expect(res.status).toBe(400);
    });

    it("should return status 409 if cat already exists", async () => {
      const data = { name: "Fluffy" };

      const _res1 = await app.request(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({ "Content-type": "application/json" }),
      });

      const res2 = await app.request(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({ "Content-type": "application/json" }),
      });

      expect(res2.status).toBe(409);
    });
  });
});

import path from "node:path";
import { describe, expect, it } from "vitest";

import onError from "./on-error.js";

describe("onError", () => {
  it("should use NODE_ENV from context if defined", async () => {
    const { Context } = await import(path.join(process.cwd(), "node_modules/hono/dist/context.js"));
    const req = new Request("http://localhost/");
    const context = new Context(req);
    context.env = {
      NODE_ENV: "production",
    };
    const response = await onError(
      new Error("Test error"),
      context,
    );
    expect(response.status).toBe(500);
    const json = await response.json();
    expect(json).toEqual({
      message: "Test error",
      stack: undefined,
    });
  });

  it("should use NODE_ENV from process.env otherwise", async () => {
    const { Context } = await import(path.join(process.cwd(), "node_modules/hono/dist/context.js"));
    const req = new Request("http://localhost/");
    const context = new Context(req);
    process.env.NODE_ENV = "production";
    const response = await onError(
      new Error("Test error"),
      context,
    );
    expect(response.status).toBe(500);
    const json = await response.json();
    expect(json).toEqual({
      message: "Test error",
      stack: undefined,
    });
  });
});

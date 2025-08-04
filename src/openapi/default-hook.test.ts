import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { describe, expect, it } from "vitest";

import * as HttpStatusCodes from "../http-status-codes.js";
import defaultHook from "./default-hook.js";

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

describe("default-hook", () => {
  it("returns 422 and error body for failed validation", async () => {
    const app = new OpenAPIHono({ defaultHook });
    app.openapi(
      createRoute({
        method: "post",
        path: "/users",
        request: {
          body: {
            content: {
              "application/json": {
                schema: UserSchema,
              },
            },
            description: "Create user",
          },
        },
        responses: {
          [HttpStatusCodes.UNPROCESSABLE_ENTITY]: {
            content: {
              "application/json": {
                schema: z.object({
                  success: z.boolean(),
                  error: z.object({
                    name: z.string(),
                    issues: z.array(z.any()),
                  }),
                }),
              },
            },
            description: "Validation error",
          },
        },
      }),
      // @ts-expect-error will not reach here
      (c) => {
        // Should not reach here if validation fails
        return c.json({ ok: true });
      },
    );

    const res = await app.request("/users", {
      method: "POST",
      body: JSON.stringify({ name: 123, age: "not-a-number" }),
      headers: { "content-type": "application/json" },
    });
    expect(res.status).toBe(HttpStatusCodes.UNPROCESSABLE_ENTITY);
    const json = await res.json() as any;
    expect(json.success).toBe(false);
    expect(json.error).toBeDefined();
    expect(json.error.name).toBe("ZodError");
    expect(Array.isArray(json.error.issues)).toBe(true);
    expect(json.error.issues.length).toBeGreaterThan(0);
  });

  it("does not trigger hook for valid input", async () => {
    const app = new OpenAPIHono({ defaultHook });
    app.openapi(
      createRoute({
        method: "post",
        path: "/users",
        request: {
          body: {
            content: {
              "application/json": {
                schema: UserSchema,
              },
            },
            description: "Create user",
          },
        },
        responses: {
          [HttpStatusCodes.OK]: {
            content: {
              "application/json": {
                schema: UserSchema,
              },
            },
            description: "User created",
          },
        },
      }),
      (c) => {
        const user = c.req.valid("json");
        return c.json(user, HttpStatusCodes.OK);
      },
    );

    const res = await app.request("/users", {
      method: "POST",
      body: JSON.stringify({ name: "Alice", age: 30 }),
      headers: { "content-type": "application/json" },
    });
    expect(res.status).toBe(HttpStatusCodes.OK);
    const json = await res.json() as any;
    expect(json.name).toBe("Alice");
    expect(json.age).toBe(30);
  });
});

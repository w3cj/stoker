import { z } from "@hono/zod-openapi";
import { describe, expect, it } from "vitest";
import jsonContentOneOf from "./json-content-one-of.js";
describe("jsonContentOneOf", () => {
  it("accepts a single schema", () => {
    const result = jsonContentOneOf([
      z.object({ message: z.string() })
    ], "Test 1");
    const oneOf = result.content["application/json"].schema.oneOf;
    expect(oneOf.length).toBe(1);
    const definition = oneOf[0];
    expect(definition.type).toBe("object");
    expect(definition.properties.message).toBeDefined();
  });
  it("accepts multiple schemas", () => {
    const result = jsonContentOneOf([
      z.object({ message: z.string() }),
      z.object({
        message: z.string(),
        error: z.array(
          z.object({ code: z.string() })
        )
      })
    ], "Test 2");
    const oneOf = result.content["application/json"].schema.oneOf;
    expect(oneOf.length).toBe(2);
    const definition1 = oneOf[0];
    expect(definition1.type).toBe("object");
    expect(definition1.properties.message).toBeDefined();
    const definition2 = oneOf[1];
    expect(definition2.type).toBe("object");
    expect(definition2.properties.error).toBeDefined();
  });
});

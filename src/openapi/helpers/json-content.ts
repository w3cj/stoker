import type { z } from "@hono/zod-openapi";

export default function jsonContent<
  T extends
  | z.AnyZodObject
  | z.ZodArray<z.AnyZodObject>,
>(schema: T, description: string) {
  return {
    content: {
      "application/json": {
        schema,
      },
    },
    description,
  };
}

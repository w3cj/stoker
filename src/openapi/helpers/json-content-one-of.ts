import type { z } from "@hono/zod-openapi";

import oneOf from "./one-of";

export default function jsonContentOneOf<
  T extends
  | z.AnyZodObject
  | z.ZodArray<z.AnyZodObject>,
>(schemas: T[], description: string) {
  return {
    content: {
      "application/json": {
        schema: {
          oneOf: oneOf(schemas),
        },
      },
    },
    description,
  };
}

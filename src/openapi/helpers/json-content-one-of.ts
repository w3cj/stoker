import type { ZodSchema } from "./types";

import oneOf from "./one-of";

export default function jsonContentOneOf<
  T extends ZodSchema,
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

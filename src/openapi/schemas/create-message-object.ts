import { z } from "@hono/zod-openapi";

export default function createMessageObjectSchema(exampleMessage: string = "Hello World") {
  return z.object({
    message: z.string(),
  }).openapi({
    example: {
      message: exampleMessage,
    },
  });
}

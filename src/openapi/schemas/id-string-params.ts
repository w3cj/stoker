import { z } from "@hono/zod-openapi";

const IdStringParamsSchema = z.object({
  id: z.string().openapi({
    param: {
      name: "id",
      in: "path",
    },
    required: ["id"],
    example: "my-cool-article",
  }),
});

export default IdStringParamsSchema;

import { z } from "@hono/zod-openapi";

const IdParamsSchema = z.object({
  id: z.coerce.number().openapi({
    param: {
      name: "id",
      in: "path",
    },
    required: ["id"],
    example: 42,
  }),
});

export default IdParamsSchema;

import { z } from "@hono/zod-openapi";

const IdUUIDParamsSchema = z.object({
  id: z.string().uuid().openapi({
    param: {
      name: "id",
      in: "path",
      required: true,
    },
    required: ["id"],
    example: "4651e634-a530-4484-9b09-9616a28f35e3",
  }),
});

export default IdUUIDParamsSchema;

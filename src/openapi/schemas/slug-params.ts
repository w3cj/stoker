import { z } from "@hono/zod-openapi";

// Regular expression to validate slug format: alphanumeric, underscores, and dashes
const slugReg = /^[\w-]+$/;
const SLUG_ERROR_MESSAGE = "Your id can only contain letters, numbers, dashes, and underscores";

const SlugParamsSchema = z.object({
  id: z.string()
    .regex(slugReg, SLUG_ERROR_MESSAGE)
    .openapi({
      param: {
        name: "id",
        in: "path",
      },
      required: ["id"],
      example: "my-cool-article",
    }),
});

export default SlugParamsSchema;

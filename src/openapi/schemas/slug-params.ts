import { z } from "@hono/zod-openapi";

// Regular expression to validate slug format: alphanumeric, underscores, and dashes
const slugReg = /^[\w-]+$/;
const SLUG_ERROR_MESSAGE = "Slug can only contain letters, numbers, dashes, and underscores";

const SlugParamsSchema = z.object({
  slug: z.string()
    .regex(slugReg, SLUG_ERROR_MESSAGE)
    .openapi({
      param: {
        name: "slug",
        in: "path",
      },
      required: ["slug"],
      example: "my-cool-article",
    }),
});

export default SlugParamsSchema;

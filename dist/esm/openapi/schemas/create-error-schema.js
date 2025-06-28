import { z } from "@hono/zod-openapi";
const createErrorSchema = (schema) => {
  const { error } = schema.safeParse(
    schema._def.typeName instanceof z.ZodArray ? [] : {}
  );
  return z.object({
    success: z.boolean().openapi({
      example: false
    }),
    error: z.object({
      issues: z.array(
        z.object({
          code: z.string(),
          path: z.array(
            z.union([z.string(), z.number()])
          ),
          message: z.string().optional()
        })
      ),
      name: z.string()
    }).openapi({
      example: error
    })
  });
};
export default createErrorSchema;

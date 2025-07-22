import type { z } from "@hono/zod-openapi";

export type ZodSchema = z.ZodUnion | z.ZodObject | z.ZodArray<z.ZodObject>;

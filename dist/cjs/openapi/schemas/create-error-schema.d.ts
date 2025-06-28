import type { ZodSchema } from "../helpers/types.ts";
declare const createErrorSchema: <T extends ZodSchema>(schema: T) => any;
export = createErrorSchema;

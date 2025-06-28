import type { ZodSchema } from "./types.ts";
declare const oneOf: <T extends ZodSchema>(schemas: T[]) => (import("openapi3-ts/oas30").SchemaObject | import("openapi3-ts/oas30").ReferenceObject)[];
export = oneOf;

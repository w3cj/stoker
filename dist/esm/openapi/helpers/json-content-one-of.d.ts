import type { ZodSchema } from "./types.ts";
declare const jsonContentOneOf: <T extends ZodSchema>(schemas: T[], description: string) => {
    content: {
        "application/json": {
            schema: {
                oneOf: (import("openapi3-ts/oas30").SchemaObject | import("openapi3-ts/oas30").ReferenceObject)[];
            };
        };
    };
    description: string;
};
export default jsonContentOneOf;

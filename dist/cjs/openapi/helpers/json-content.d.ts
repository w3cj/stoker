import type { ZodSchema } from "./types.ts";
declare const jsonContent: <T extends ZodSchema>(schema: T, description: string) => {
    content: {
        "application/json": {
            schema: T;
        };
    };
    description: string;
};
export = jsonContent;

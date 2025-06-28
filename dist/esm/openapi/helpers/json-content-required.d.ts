import type { ZodSchema } from "./types.ts";
declare const jsonContentRequired: <T extends ZodSchema>(schema: T, description: string) => {
    required: boolean;
    content: {
        "application/json": {
            schema: T;
        };
    };
    description: string;
};
export default jsonContentRequired;

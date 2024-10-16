import type { ZodSchema } from "./types";

import jsonContent from "./json-content";

const jsonContentRequired = <
  T extends ZodSchema,
>(schema: T,
  description: string,
) => {
  return {
    ...jsonContent(schema, description),
    required: true,
  };
};

export default jsonContentRequired;

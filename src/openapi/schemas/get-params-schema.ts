import { z } from "@hono/zod-openapi";

type Validator = "uuid" | "nanoid" | "cuid" | "cuid2" | "ulid";

export interface ParamsSchema {
  name?: string;
  validator?: Validator | undefined;
}

const examples: Record<Validator, string> = {
  uuid: "4651e634-a530-4484-9b09-9616a28f35e3",
  nanoid: "V1StGXR8_Z5jdHi6B-myT",
  cuid: "cjld2cjxh0000qzrmn831i7rn",
  cuid2: "tz4a98xxat96iws9zmbrgj3a",
  ulid: "01ARZ3NDEKTSV4RRFFQ69G5FAV",
};

const getParamsSchema = ({
  name = "id",
  validator = "uuid",
}: ParamsSchema) => {
  return z.object({
    [name]: z.string()[validator]().openapi({
      param: {
        name,
        in: "path",
        required: true,
      },
      required: [name],
      example: examples[validator],
    }),
  });
};

export default getParamsSchema;

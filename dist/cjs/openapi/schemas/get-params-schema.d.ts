type Validator = "uuid" | "nanoid" | "cuid" | "cuid2" | "ulid";
export interface ParamsSchema {
    name?: string;
    validator?: Validator | undefined;
}
declare const getParamsSchema: ({ name, validator, }: ParamsSchema) => any;
export = getParamsSchema;

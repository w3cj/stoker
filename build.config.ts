import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index",
    "src/http-status-codes",
    "src/http-status-phrases",
    "src/middlewares/index",
    "src/middlewares/not-found",
    "src/middlewares/on-error",
    "src/middlewares/serve-emoji-favicon",
    "src/openapi/index",
    "src/openapi/default-hook",
    "src/openapi/helpers/index",
    "src/openapi/helpers/json-content",
    "src/openapi/helpers/json-content-required",
    "src/openapi/schemas/index",
    "src/openapi/schemas/id-params",
    "src/openapi/schemas/create-message-object",
    "src/openapi/schemas/create-error-schema",
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});

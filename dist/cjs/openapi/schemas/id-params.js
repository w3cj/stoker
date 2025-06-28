"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zodOpenapi = require("@hono/zod-openapi");
const IdParamsSchema = _zodOpenapi.z.object({
  id: _zodOpenapi.z.coerce.number().openapi({
    param: {
      name: "id",
      in: "path",
      required: true
    },
    required: ["id"],
    example: 42
  })
});
module.exports = IdParamsSchema;
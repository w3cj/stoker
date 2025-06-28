"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zodOpenapi = require("@hono/zod-openapi");
const IdUUIDParamsSchema = _zodOpenapi.z.object({
  id: _zodOpenapi.z.string().uuid().openapi({
    param: {
      name: "id",
      in: "path",
      required: true
    },
    required: ["id"],
    example: "4651e634-a530-4484-9b09-9616a28f35e3"
  })
});
module.exports = IdUUIDParamsSchema;
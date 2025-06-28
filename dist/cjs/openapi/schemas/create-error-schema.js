"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zodOpenapi = require("@hono/zod-openapi");
const createErrorSchema = schema => {
  const {
    error
  } = schema.safeParse(schema._def.typeName instanceof _zodOpenapi.z.ZodArray ? [] : {});
  return _zodOpenapi.z.object({
    success: _zodOpenapi.z.boolean().openapi({
      example: false
    }),
    error: _zodOpenapi.z.object({
      issues: _zodOpenapi.z.array(_zodOpenapi.z.object({
        code: _zodOpenapi.z.string(),
        path: _zodOpenapi.z.array(_zodOpenapi.z.union([_zodOpenapi.z.string(), _zodOpenapi.z.number()])),
        message: _zodOpenapi.z.string().optional()
      })),
      name: _zodOpenapi.z.string()
    }).openapi({
      example: error
    })
  });
};
module.exports = createErrorSchema;
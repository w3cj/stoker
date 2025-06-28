"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zodOpenapi = require("@hono/zod-openapi");
const createMessageObjectSchema = (exampleMessage = "Hello World") => {
  return _zodOpenapi.z.object({
    message: _zodOpenapi.z.string()
  }).openapi({
    example: {
      message: exampleMessage
    }
  });
};
module.exports = createMessageObjectSchema;
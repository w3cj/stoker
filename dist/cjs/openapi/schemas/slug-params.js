"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zodOpenapi = require("@hono/zod-openapi");
const slugReg = /^[\w-]+$/;
const SLUG_ERROR_MESSAGE = "Slug can only contain letters, numbers, dashes, and underscores";
const SlugParamsSchema = _zodOpenapi.z.object({
  slug: _zodOpenapi.z.string().regex(slugReg, SLUG_ERROR_MESSAGE).openapi({
    param: {
      name: "slug",
      in: "path",
      required: true
    },
    required: ["slug"],
    example: "my-cool-article"
  })
});
module.exports = SlugParamsSchema;
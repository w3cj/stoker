"use strict";

var _zodOpenapi = require("@hono/zod-openapi");
var _vitest = require("vitest");
var _jsonContentOneOf = _interopRequireDefault(require("./json-content-one-of.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _vitest.describe)("jsonContentOneOf", () => {
  (0, _vitest.it)("accepts a single schema", () => {
    const result = (0, _jsonContentOneOf.default)([_zodOpenapi.z.object({
      message: _zodOpenapi.z.string()
    })], "Test 1");
    const oneOf = result.content["application/json"].schema.oneOf;
    (0, _vitest.expect)(oneOf.length).toBe(1);
    const definition = oneOf[0];
    (0, _vitest.expect)(definition.type).toBe("object");
    (0, _vitest.expect)(definition.properties.message).toBeDefined();
  });
  (0, _vitest.it)("accepts multiple schemas", () => {
    const result = (0, _jsonContentOneOf.default)([_zodOpenapi.z.object({
      message: _zodOpenapi.z.string()
    }), _zodOpenapi.z.object({
      message: _zodOpenapi.z.string(),
      error: _zodOpenapi.z.array(_zodOpenapi.z.object({
        code: _zodOpenapi.z.string()
      }))
    })], "Test 2");
    const oneOf = result.content["application/json"].schema.oneOf;
    (0, _vitest.expect)(oneOf.length).toBe(2);
    const definition1 = oneOf[0];
    (0, _vitest.expect)(definition1.type).toBe("object");
    (0, _vitest.expect)(definition1.properties.message).toBeDefined();
    const definition2 = oneOf[1];
    (0, _vitest.expect)(definition2.type).toBe("object");
    (0, _vitest.expect)(definition2.properties.error).toBeDefined();
  });
});
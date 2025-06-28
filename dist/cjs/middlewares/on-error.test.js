"use strict";

var _nodePath = _interopRequireDefault(require("node:path"));
var _vitest = require("vitest");
var _onError = _interopRequireDefault(require("./on-error.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _vitest.describe)("onError", () => {
  (0, _vitest.it)("should use NODE_ENV from context if defined", async () => {
    const {
      Context
    } = await Promise.resolve(`${_nodePath.default.join(process.cwd(), "node_modules/hono/dist/context.js")}`).then(s => require(s));
    const req = new Request("http://localhost/");
    const context = new Context(req);
    context.env = {
      NODE_ENV: "production"
    };
    const response = await (0, _onError.default)(new Error("Test error"), context);
    (0, _vitest.expect)(response.status).toBe(500);
    const json = await response.json();
    (0, _vitest.expect)(json).toEqual({
      message: "Test error",
      stack: void 0
    });
  });
  (0, _vitest.it)("should use NODE_ENV from process.env otherwise", async () => {
    const {
      Context
    } = await Promise.resolve(`${_nodePath.default.join(process.cwd(), "node_modules/hono/dist/context.js")}`).then(s => require(s));
    const req = new Request("http://localhost/");
    const context = new Context(req);
    process.env.NODE_ENV = "production";
    const response = await (0, _onError.default)(new Error("Test error"), context);
    (0, _vitest.expect)(response.status).toBe(500);
    const json = await response.json();
    (0, _vitest.expect)(json).toEqual({
      message: "Test error",
      stack: void 0
    });
  });
});
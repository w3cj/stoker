"use strict";

var _vitest = require("vitest");
var _slugParams = _interopRequireDefault(require("./slug-params.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _vitest.describe)("slug-params", () => {
  (0, _vitest.it)("allows letters", () => {
    const slug = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const {
      data,
      error
    } = _slugParams.default.safeParse({
      slug
    });
    (0, _vitest.expect)(data?.slug).toBe(slug);
    (0, _vitest.expect)(error).toBeUndefined();
  });
  (0, _vitest.it)("allows numbers", () => {
    const slug = "0123456789";
    const {
      data,
      error
    } = _slugParams.default.safeParse({
      slug
    });
    (0, _vitest.expect)(data?.slug).toBe(slug);
    (0, _vitest.expect)(error).toBeUndefined();
  });
  (0, _vitest.it)("allows numbers and letters", () => {
    const slug = "0123456789abcdeABCDE";
    const {
      data,
      error
    } = _slugParams.default.safeParse({
      slug
    });
    (0, _vitest.expect)(data?.slug).toBe(slug);
    (0, _vitest.expect)(error).toBeUndefined();
  });
  (0, _vitest.it)("allows dashes", () => {
    const slug = "test-slug-here";
    const {
      data,
      error
    } = _slugParams.default.safeParse({
      slug
    });
    (0, _vitest.expect)(data?.slug).toBe(slug);
    (0, _vitest.expect)(error).toBeUndefined();
  });
  (0, _vitest.it)("allows underscores", () => {
    const slug = "test_slug_here";
    const {
      data,
      error
    } = _slugParams.default.safeParse({
      slug
    });
    (0, _vitest.expect)(data?.slug).toBe(slug);
    (0, _vitest.expect)(error).toBeUndefined();
  });
  (0, _vitest.it)("does not allow special characters only", () => {
    const slug = "!@#$%^&*()+-=";
    const {
      error
    } = _slugParams.default.safeParse({
      slug
    });
    (0, _vitest.expect)(error).toBeDefined();
  });
  (0, _vitest.it)("does not allow special characters with allowed characters", () => {
    const slug = "abc-DEF_ABC-!@#$%^&*()+-=";
    const {
      error
    } = _slugParams.default.safeParse({
      slug
    });
    (0, _vitest.expect)(error).toBeDefined();
  });
});
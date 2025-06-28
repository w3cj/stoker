"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpStatusCodes = require("../http-status-codes.js");
const defaultHook = (result, c) => {
  if (!result.success) {
    return c.json({
      success: result.success,
      error: result.error
    }, _httpStatusCodes.UNPROCESSABLE_ENTITY);
  }
};
module.exports = defaultHook;
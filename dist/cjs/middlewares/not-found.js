"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpStatusCodes = require("../http-status-codes.js");
var _httpStatusPhrases = require("../http-status-phrases.js");
const notFound = c => {
  return c.json({
    message: `${_httpStatusPhrases.NOT_FOUND} - ${c.req.path}`
  }, _httpStatusCodes.NOT_FOUND);
};
module.exports = notFound;
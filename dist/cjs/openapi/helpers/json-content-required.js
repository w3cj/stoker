"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonContent = _interopRequireDefault(require("./json-content.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const jsonContentRequired = (schema, description) => {
  return {
    ...(0, _jsonContent.default)(schema, description),
    required: true
  };
};
module.exports = jsonContentRequired;
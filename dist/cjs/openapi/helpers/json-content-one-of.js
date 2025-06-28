"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _oneOf = _interopRequireDefault(require("./one-of.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const jsonContentOneOf = (schemas, description) => {
  return {
    content: {
      "application/json": {
        schema: {
          oneOf: (0, _oneOf.default)(schemas)
        }
      }
    },
    description
  };
};
module.exports = jsonContentOneOf;
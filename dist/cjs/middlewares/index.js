"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "notFound", {
  enumerable: true,
  get: function () {
    return _notFound.default;
  }
});
Object.defineProperty(exports, "onError", {
  enumerable: true,
  get: function () {
    return _onError.default;
  }
});
Object.defineProperty(exports, "serveEmojiFavicon", {
  enumerable: true,
  get: function () {
    return _serveEmojiFavicon.default;
  }
});
var _notFound = _interopRequireDefault(require("./not-found.js"));
var _onError = _interopRequireDefault(require("./on-error.js"));
var _serveEmojiFavicon = _interopRequireDefault(require("./serve-emoji-favicon.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
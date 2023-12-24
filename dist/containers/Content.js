"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Content(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Outlet, null);
}
var _default = exports["default"] = Content;
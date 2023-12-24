"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PageLoading() {
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    xs: 1,
    className: "text-center m-auto"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Spinner, {
    animation: "border",
    role: "status"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "visually-hidden"
  }, "Loading..."))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react["default"].createElement("h3", null, "Loading...")));
}
var _default = exports["default"] = PageLoading;
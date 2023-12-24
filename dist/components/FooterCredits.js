"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FooterCredits(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    className: "pt-2"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("small", null, props.demo ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-muted"
  }, " ", "Developed by ", " ") : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-muted"
  }, " ", "Based on ", " "), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://energy-charts.netlify.app",
    className: "text-reset text-decoration-none"
  }, "Energy Charts"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-muted"
  }, " ", " developed by ", " ")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://facilitate.energy",
    className: "text-reset text-decoration-none"
  }, "Facilitate Energy Ltd.")))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    className: "pb-2"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("small", null, props.demo ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://energy-charts.netlify.app",
    className: "text-reset text-decoration-none"
  }, "Energy Charts"), " ") : /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-muted"
  }, " ", "Energy Charts ", " "), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://github.com/facilitate-energy/energy-charts",
    className: "text-reset text-decoration-none"
  }, "source code"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-muted"
  }, " available under the "), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.apache.org/licenses/LICENSE-2.0",
    className: "text-reset text-decoration-none"
  }, "Apache-2.0 License.")))));
}
var _default = exports["default"] = FooterCredits;
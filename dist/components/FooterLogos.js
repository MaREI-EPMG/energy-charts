"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FooterLogos(props) {
  var logos = props.logos;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, logos && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    className: "justify-content-around pt-4 gx-0"
  }, logos.map(function (logo, idx) {
    return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
      xs: 6,
      sm: 3,
      className: "align-self-center",
      key: idx
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: logo.href
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: logo.src,
      alt: logo.alt,
      className: "img-fluid mx-auto d-block"
    })));
  })));
}
var _default = exports["default"] = FooterLogos;
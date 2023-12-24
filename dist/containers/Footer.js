"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _components = require("../components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Footer(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Container, {
    fluid: true,
    className: "footer bg-light mt-auto pr-0",
    as: "footer"
  }, /*#__PURE__*/_react["default"].createElement(_components.FooterLogos, props), /*#__PURE__*/_react["default"].createElement(_components.FooterCredits, props));
}
var _default = exports["default"] = Footer;
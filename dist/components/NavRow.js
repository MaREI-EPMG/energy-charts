"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function NavRow(props) {
  var navLinks = props.navLinks,
    variant = props.variant;
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, {
    as: "nav",
    variant: variant
  }, navLinks.map(function (navLink, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
      className: "nav-link text-nowrap",
      to: navLink.to,
      key: index
    }, navLink.text);
  })));
}
var _default = exports["default"] = NavRow;
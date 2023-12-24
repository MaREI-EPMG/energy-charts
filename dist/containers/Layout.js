"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _containers = require("../containers");
var _components = require("../components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Layout(props) {
  var alert = props.alert;
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Container, {
    fluid: "ms",
    className: "vh-100 d-flex flex-column"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    as: "header",
    className: "mb-3 mx-0"
  }, /*#__PURE__*/_react["default"].createElement(_containers.Header, {
    navLinks: props.headerNavLinks,
    navBrand: props.headerNavBrand
  }), alert && /*#__PURE__*/_react["default"].createElement(_components.Alert, alert)), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    className: "mx-0 flex-grow-1"
  }, /*#__PURE__*/_react["default"].createElement(_containers.Content, props)), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    as: "footer",
    className: "mt-3 mx-0"
  }, /*#__PURE__*/_react["default"].createElement(_containers.Footer, props)));
}
var _default = exports["default"] = Layout;
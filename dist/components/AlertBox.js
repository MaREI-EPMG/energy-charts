"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function AlertBox(props) {
  var heading = props.heading,
    text = props.text,
    variant = props.variant;
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Alert, {
    variant: variant
  }, heading && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Alert.Heading, null, " ", heading, " "), text && /*#__PURE__*/_react["default"].createElement("p", null, " ", text, " "));
}
var _default = exports["default"] = AlertBox;
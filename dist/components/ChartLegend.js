"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ChartLegend(props) {
  var seriesNames = props.seriesNames,
    seriesTitles = props.seriesTitles,
    colorScale = props.colorScale;
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    xs: "auto"
  }, seriesNames.map(function (seriesName, idx) {
    return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
      className: "chart-legend",
      key: idx
    }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
      xs: 2,
      className: "align-items-center"
    }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
      xs: "auto"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "colour",
      style: {
        backgroundColor: colorScale[idx],
        borderRadius: "50%",
        width: 12,
        height: 12,
        left: 0,
        top: 0
      }
    })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
      xs: "auto",
      className: "ps-0"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontFamily: "Gill Sans, Seravek, Trebuchet MS, sans-serif",
        fontSize: 14,
        letterSpacing: "normal"
      }
    }, " ", seriesTitles && seriesTitles[seriesName] || seriesName, " "))));
  }));
}
var _default = exports["default"] = ChartLegend;
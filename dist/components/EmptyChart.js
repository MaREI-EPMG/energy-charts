"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _victory = require("victory");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function EmptyChart(props) {
  var unit = props.unit,
    maxY = props.maxY,
    minY = props.minY,
    xGridMarks = props.xGridMarks,
    chartWidth = props.chartWidth;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_victory.VictoryChart, {
    width: chartWidth,
    domainPadding: {
      x: 20
    },
    domain: {
      y: [minY, maxY]
    }
  }, /*#__PURE__*/_react["default"].createElement(_victory.VictoryAxis, {
    tickFormat: function tickFormat(t) {
      return t.toString();
    },
    tickValues: xGridMarks
  }), /*#__PURE__*/_react["default"].createElement(_victory.VictoryAxis, {
    dependentAxis: true,
    label: unit,
    axisLabelComponent: /*#__PURE__*/_react["default"].createElement(_victory.VictoryLabel, {
      y: 35,
      x: 30,
      angle: 0
    })
  })));
}
var _default = exports["default"] = EmptyChart;
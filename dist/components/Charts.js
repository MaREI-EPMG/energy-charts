"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _components = require("../components");
var _downloadTableData = _interopRequireDefault(require("../utils/downloadTableData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // contains EPMG customisation
function Charts(props) {
  var cache = props.cache,
    charts = props.charts,
    chartsInfo = props.chartsInfo,
    chartsTitles = props.chartsTitles,
    seriesTitles = props.seriesTitles,
    chartWidth = props.chartWidth,
    _props$chartWidthScal = props.chartWidthScaling,
    chartWidthScaling = _props$chartWidthScal === void 0 ? 1 : _props$chartWidthScal,
    dataDownload = props.dataDownload,
    scenarioTitles = props.scenarioTitles;
  var when = Date();
  function sendTableData(e, chart) {
    var cacheChartURL = e.currentTarget.parentNode.parentNode.querySelector("[data-chart]").dataset["chart"];
    var chartData = cache.current[cacheChartURL];
    var chartName = chartsTitles && chartsTitles[chart] || chart;
    var unit = chartsInfo && chartsInfo[chart] && chartsInfo[chart]["unit"] ? chartsInfo[chart]["unit"] : "unit";
    (0, _downloadTableData["default"])(chartData, chartName, unit, scenarioTitles, when);
  }
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    xs: "auto",
    className: "charts py-2 justify-content-center justify-content-md-start"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      width: "100%"
    }
  }, dataDownload && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Download data for any chart by clicking on the", " ", /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Card.Link, null, /*#__PURE__*/_react["default"].createElement(_components.DownloadIcon, null)), " ", "in its top-right corner.")), charts.map(function (chart, idx) {
    return chartsInfo[chart] && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
      className: "p-2",
      key: idx
    }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Card, {
      style: {
        maxWidth: chartWidth
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Card.Header, null, chartsTitles && chartsTitles[chart] || chart, dataDownload && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Card.Link, {
      onClick: function onClick(e) {
        return sendTableData(e, chart);
      },
      className: "download-table",
      title: "click to download this chart's data table"
    }, /*#__PURE__*/_react["default"].createElement(_components.DownloadIcon, null))), /*#__PURE__*/_react["default"].createElement(_components.Chart, _extends({
      chartName: chart
    }, props, chartsInfo[chart], {
      chartWidth: chartWidth,
      widthScaling: chartWidthScaling
    })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Card.Footer, null, /*#__PURE__*/_react["default"].createElement(_components.ChartLegend, _extends({}, chartsInfo[chart], {
      seriesTitles: seriesTitles
    })))));
  }));
}
var _default = exports["default"] = Charts;
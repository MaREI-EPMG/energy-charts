"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _victory = require("victory");
var _useFetch5 = _interopRequireDefault(require("../hooks/useFetch"));
var _calculateDifference = _interopRequireDefault(require("../utils/calculateDifference"));
var _normaliseData = _interopRequireDefault(require("../utils/normaliseData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // contains EPMG customisation
function Chart(props) {
  var selectedScenarios = props.selectedScenarios,
    chartName = props.chartName,
    showDifference = props.showDifference,
    colorScale = props.colorScale,
    seriesNames = props.seriesNames,
    seriesTitles = props.seriesTitles,
    scenarioTitles = props.scenarioTitles,
    unit = props.unit,
    fixedDomain = props.fixedDomain,
    maxY = props.maxY,
    minY = props.minY,
    xGridMarks = props.xGridMarks,
    _props$xGridValues = props.xGridValues,
    xGridValues = _props$xGridValues === void 0 ? xGridMarks : _props$xGridValues,
    _props$basePath = props.basePath,
    basePath = _props$basePath === void 0 ? "" : _props$basePath,
    cache = props.cache,
    locale = props.locale,
    _props$xDomainPadding = props.xDomainPadding,
    xDomainPadding = _props$xDomainPadding === void 0 ? 20 : _props$xDomainPadding,
    _props$stackbarOffset = props.stackbarOffset,
    stackbarOffset = _props$stackbarOffset === void 0 ? 20 : _props$stackbarOffset,
    chartWidth = props.chartWidth,
    padding = props.padding,
    barWidth = props.barWidth,
    dataDownload = props.dataDownload,
    widthScaling = props.widthScaling;
  var barCount = selectedScenarios[1] ? showDifference ? 1 : 2 : 1;
  var numberStyle = {
    maximumSignificantDigits: 3
  };
  var yearStyle = {
    useGrouping: false
  };
  var yGridStyle = {
    maximumSignificantDigits: 3,
    notation: "compact"
  };
  var formattedNumber = function formattedNumber(number, locale, options) {
    return Intl.NumberFormat(locale, options).format(number);
  };
  var chartDomain = showDifference || !fixedDomain ? null : {
    y: [minY, maxY]
  };
  var urls = selectedScenarios.map(function (scenario) {
    return scenario && "".concat(basePath, "/data/").concat(scenario, "/").concat(chartName, ".json");
  });
  var _useFetch = (0, _useFetch5["default"])(urls[0], cache),
    _useFetch2 = _slicedToArray(_useFetch, 2),
    mainScenarioDataLoading = _useFetch2[0],
    mainScenarioData = _useFetch2[1];
  var _useFetch3 = (0, _useFetch5["default"])(urls[1], cache),
    _useFetch4 = _slicedToArray(_useFetch3, 2),
    compareScenarioDataLoading = _useFetch4[0],
    compareScenarioData = _useFetch4[1];
  if (!mainScenarioDataLoading) {
    mainScenarioData = (0, _normaliseData["default"])(mainScenarioData, selectedScenarios[0], seriesNames, xGridValues);
  }
  if (!compareScenarioDataLoading) {
    compareScenarioData = selectedScenarios[1] ? (0, _normaliseData["default"])(compareScenarioData, selectedScenarios[1], seriesNames, xGridValues) : null;
  }
  var chartData = !mainScenarioDataLoading && !compareScenarioDataLoading ? showDifference && selectedScenarios[1] ? [(0, _calculateDifference["default"])([mainScenarioData, compareScenarioData])] : [mainScenarioData, compareScenarioData] : [];
  var getTotal = function getTotal(data, period) {
    return data.reduce(function (total, currentSeries) {
      return total + currentSeries.seriesValues.find(function (values) {
        return values[0] === period;
      })[1];
    }, 0);
  };
  var chartDataURL =
  // used to identify which dataset is associated with each table, by the data downloader
  "/chartdata/" + encodeURIComponent(chartName) + "/" + encodeURIComponent(selectedScenarios[0]);
  if (selectedScenarios[1]) {
    chartDataURL += "/" + encodeURIComponent(selectedScenarios[1]);
    if (showDifference) {
      chartDataURL += "/diff";
    }
  }
  cache.current[chartDataURL] = chartData;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_victory.VictoryChart, {
    domainPadding: {
      x: Math.round(xDomainPadding * widthScaling)
    },
    domain: chartDomain,
    padding: padding,
    width: chartWidth,
    containerComponent: /*#__PURE__*/_react["default"].createElement(_victory.VictoryContainer, {
      "data-chart": dataDownload && chartDataURL,
      style: {
        touchAction: "auto"
      }
    })
  }, /*#__PURE__*/_react["default"].createElement(_victory.VictoryPortal, null, /*#__PURE__*/_react["default"].createElement(_victory.VictoryAxis, {
    tickFormat: function tickFormat(t) {
      return formattedNumber(t, locale, yearStyle);
    },
    tickValues: xGridMarks
  })), /*#__PURE__*/_react["default"].createElement(_victory.VictoryAxis, {
    tickFormat: function tickFormat(t) {
      return Math.abs(t) > 0.01 ? formattedNumber(t, locale, yGridStyle) : formattedNumber(t, locale, _objectSpread(_objectSpread({}, yGridStyle), {}, {
        notation: "scientific"
      }));
    },
    dependentAxis: true,
    label: unit,
    axisLabelComponent: /*#__PURE__*/_react["default"].createElement(_victory.VictoryLabel, {
      y: 35,
      x: 30,
      angle: 0
    })
  }), !mainScenarioDataLoading && !compareScenarioDataLoading && /*#__PURE__*/_react["default"].createElement(_victory.VictoryGroup, {
    offset: Math.round(stackbarOffset * widthScaling)
  }, chartData.map(function (scenario, idx) {
    return scenario && /*#__PURE__*/_react["default"].createElement(_victory.VictoryStack, {
      key: idx
    }, scenario.data.map(function (series, idx) {
      return /*#__PURE__*/_react["default"].createElement(_victory.VictoryBar, {
        key: idx,
        barWidth: Math.round(barWidth / barCount * widthScaling),
        data: series.seriesValues,
        labels: function labels(_ref) {
          var datum = _ref.datum;
          return "".concat(showDifference ? (scenarioTitles && scenarioTitles[scenario.name[0]] || scenario.name[0]) + " - " + (scenarioTitles && scenarioTitles[scenario.name[1]]) || scenario.name[1] : scenarioTitles && scenarioTitles[scenario.name] || scenario.name, "\n                        ").concat(formattedNumber(datum[0], locale, yearStyle), "\n                        ").concat(seriesTitles && seriesTitles[series.seriesName] || series.seriesName, ": ").concat(formattedNumber(datum[1], locale, numberStyle), " ").concat(unit, "\n                        Total: ").concat(formattedNumber(getTotal(scenario.data, datum[0]), locale, numberStyle), " ").concat(unit);
        },
        x: 0,
        y: 1,
        labelComponent: /*#__PURE__*/_react["default"].createElement(_victory.VictoryTooltip, null),
        style: {
          data: {
            fill: colorScale[seriesNames.indexOf(series.seriesName)]
          }
        }
      });
    }));
  }))));
}
var _default = exports["default"] = Chart;
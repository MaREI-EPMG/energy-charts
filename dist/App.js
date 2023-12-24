"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _useMediaQuery = _interopRequireDefault(require("./hooks/useMediaQuery"));
var _containers = require("./containers");
var _components = require("./components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // contains EPMG customisation
function App(_ref) {
  var config = _ref.config;
  var decodeSearchParams = function decodeSearchParams(searchParams) {
    return _toConsumableArray(searchParams.entries()).reduce(function (acc, _ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        val = _ref3[1];
      try {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, JSON.parse(val)));
      } catch (_unused) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, val));
      }
    }, {});
  };
  var _useSearchParams = (0, _reactRouterDom.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    encodedSearchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var searchParams = decodeSearchParams(encodedSearchParams);
  var dataDownload = config.dataDownload;
  var showSearchParams = config.showSearchParams;
  var scenarioGroups = config.scenarios.map(function (scenarioGroup) {
    return scenarioGroup.name;
  });
  var defaultScenarioGroup = config.defaultScenarioGroup ? scenarioGroups.includes(config.defaultScenarioGroup) ? config.defaultScenarioGroup : scenarioGroups[0] : scenarioGroups[0];
  var loadMainScenario = "scen1" in searchParams ? scenarioGroups.includes(searchParams.scen1) ? searchParams.scen1 : defaultScenarioGroup : defaultScenarioGroup;
  var loadCompareScenario = "scen2" in searchParams ? scenarioGroups.includes(searchParams.scen2) ? searchParams.scen2 : null : null;
  var loadShowDifference = "diff" in searchParams ? !!searchParams.diff === true && loadCompareScenario : false;
  var _useState = (0, _react.useState)(loadMainScenario),
    _useState2 = _slicedToArray(_useState, 2),
    mainScenario = _useState2[0],
    setMainScenario = _useState2[1];
  var _useState3 = (0, _react.useState)(loadCompareScenario),
    _useState4 = _slicedToArray(_useState3, 2),
    compareScenario = _useState4[0],
    setCompareScenario = _useState4[1];
  var _useState5 = (0, _react.useState)(loadShowDifference),
    _useState6 = _slicedToArray(_useState5, 2),
    showDifference = _useState6[0],
    setShowDifference = _useState6[1];
  var cache = (0, _react.useRef)({});
  var maxChartWidth = config.maxChartWidth ? config.maxChartWidth : 450;
  var applyMaxChartWidth = (0, _useMediaQuery["default"])("(min-width: ".concat(maxChartWidth, "px)"));
  var chartWidth = applyMaxChartWidth ? maxChartWidth : 450;
  var chartWidthScaling = chartWidth / maxChartWidth;
  var titles = {
    chartsTitles: config.titles.charts,
    scenarioTitles: config.titles.scenarios,
    seriesTitles: config.titles.series
  };
  (0, _react.useEffect)(function () {
    if (!compareScenario) {
      setShowDifference(false);
    }
    showSearchParams ? setSearchParams((0, _reactRouterDom.createSearchParams)({
      "scen1": mainScenario,
      "scen2": compareScenario,
      "diff": showDifference
    })) : setSearchParams();
  }, [mainScenario, compareScenario, showDifference, setSearchParams, showSearchParams]);
  return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_components.PageLoading, null)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_containers.Layout, config)
  }, config.landingPage ? /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    index: true,
    element: /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
      to: config.landingPage,
      replace: true
    })
  }) : /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    index: true,
    element: /*#__PURE__*/_react["default"].createElement(_components.Page, {
      cache: cache,
      basePath: config.basePath,
      name: "index"
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: ":pageId",
    element: /*#__PURE__*/_react["default"].createElement(_components.Page, {
      cache: cache,
      basePath: config.basePath
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: config.chartsPath,
    element: /*#__PURE__*/_react["default"].createElement(_components.ChartsPage, _extends({}, config, {
      selectedScenarios: [mainScenario, compareScenario],
      showDifference: showDifference,
      setMainScenario: setMainScenario,
      setCompareScenario: setCompareScenario,
      setShowDifference: setShowDifference
    }))
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    index: true,
    element: /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
      to: config.routes[0].path,
      replace: true
    })
  }), config.routes.map(function (route, idx) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      key: idx,
      path: route.path,
      element: route.charts && /*#__PURE__*/_react["default"].createElement(_components.Charts, _extends({
        selectedScenarios: [mainScenario, compareScenario],
        showDifference: showDifference,
        basePath: config.basePath,
        charts: route.charts,
        chartsInfo: config.chartsInfo,
        cache: cache,
        xDomainPadding: config.xDomainPadding,
        xGridValues: config.xGridValues,
        xGridMarks: config.xGridMarks,
        fixedDomain: config.fixedDomain,
        chartWidth: chartWidth,
        chartWidthScaling: chartWidthScaling,
        stackbarOffset: config.stackbarOffset,
        padding: config.chartPadding,
        barWidth: config.barWidth,
        dataDownload: dataDownload
      }, titles))
    }, route.routes && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      index: true,
      element: /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
        to: route.routes[0].path,
        replace: true
      })
    }), route.routes.map(function (route, idx) {
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        key: idx,
        path: route.path,
        element: route.charts && /*#__PURE__*/_react["default"].createElement(_components.Charts, _extends({
          selectedScenarios: [mainScenario, compareScenario],
          showDifference: showDifference,
          basePath: config.basePath,
          charts: route.charts,
          chartsInfo: config.chartsInfo,
          cache: cache,
          xDomainPadding: config.xDomainPadding,
          xGridValues: config.xGridValues,
          xGridMarks: config.xGridMarks,
          fixedDomain: config.fixedDomain,
          chartWidth: chartWidth,
          chartWidthScaling: chartWidthScaling,
          stackbarOffset: config.stackbarOffset,
          padding: config.chartPadding,
          barWidth: config.barWidth,
          dataDownload: dataDownload
        }, titles))
      });
    })));
  })))));
}
var _default = exports["default"] = App;
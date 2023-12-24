"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrap = require("react-bootstrap");
var _components = require("../components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ChartsPage(props) {
  var scenarioList = props.scenarios.map(function (scenario) {
    return scenario.name;
  });
  var menuProps = {
    scenarioList: scenarioList,
    scenarioTitles: props.titles.scenarios,
    selectedScenarios: props.selectedScenarios,
    showDifference: props.showDifference,
    setMainScenario: props.setMainScenario,
    setCompareScenario: props.setCompareScenario,
    setShowDifference: props.setShowDifference
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    as: "aside",
    md: "auto",
    className: "p-3 d-none d-md-block"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Container, {
    fluid: true,
    className: "sticky-top"
  }, /*#__PURE__*/_react["default"].createElement(_components.Menu, menuProps))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    as: "main"
  }, /*#__PURE__*/_react["default"].createElement(_components.MobileMenu, menuProps), props.contentNavs.map(function (nav, idx) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, {
      key: idx
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: nav.path,
      element: /*#__PURE__*/_react["default"].createElement(_components.NavRow, {
        navLinks: nav.links,
        variant: nav.variant
      })
    }));
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Outlet, null)));
}
var _default = exports["default"] = ChartsPage;
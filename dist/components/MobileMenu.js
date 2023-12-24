"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _components = require("../components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function MobileMenu(props) {
  var scenarioList = props.scenarioList,
    scenarioTitles = props.scenarioTitles;
  var menuButtons = [{
    placement: "start",
    title: "Scenarios",
    noneItem: false,
    onSelection: props.setMainScenario
  }, {
    placement: "end",
    title: "Compare with",
    noneItem: true,
    onSelection: props.setCompareScenario
  }];
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    className: "pb-2 d-md-none sticky-top"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, null, props.selectedScenarios.map(function (scenario, idx) {
    return /*#__PURE__*/_react["default"].createElement(_components.OffcanvasMenu, _extends({
      key: idx,
      name: scenario,
      items: scenarioList,
      itemTitles: scenarioTitles,
      selectedItem: scenario
    }, menuButtons[idx]));
  }), props.selectedScenarios[1] && /*#__PURE__*/_react["default"].createElement(_components.OffcanvasMenuDifference, {
    title: "Options",
    placement: "top",
    showDifference: props.showDifference,
    setShowDifference: props.setShowDifference
  }))));
}
var _default = exports["default"] = MobileMenu;
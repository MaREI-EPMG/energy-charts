"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _components = require("../components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Menu(props) {
  var scenarioList = props.scenarioList,
    selectedScenarios = props.selectedScenarios,
    scenarioTitles = props.scenarioTitles;
  var updateCompareScenario = function updateCompareScenario(e) {
    if (e.target.value !== "none") {
      props.setCompareScenario(e.target.value);
    } else {
      props.setCompareScenario(null);
    }
  };
  var updateShowDifference = function updateShowDifference(e) {
    props.setShowDifference(e.target.checked);
  };
  var Title = props.Tilte ? props.Title : "Scenarios";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "h4"
  }, " ", Title, " "), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ListGroup, {
    as: "ul",
    variant: "flush",
    className: "main-scenario-list"
  }, /*#__PURE__*/_react["default"].createElement(_components.List, {
    items: scenarioList,
    itemTitles: scenarioTitles,
    selectedItem: selectedScenarios[0],
    onSelection: props.setMainScenario
  })), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "menu-separator"
  }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FloatingLabel, {
    controlId: "compare-scenario-list",
    label: "Compare with"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Select, {
    onChange: updateCompareScenario,
    value: selectedScenarios[1] ? selectedScenarios[1] : "none"
  }, /*#__PURE__*/_react["default"].createElement(_components.OptionList, {
    items: scenarioList,
    itemTitles: scenarioTitles,
    noneItem: true
  }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Collapse, {
    "in": !!selectedScenarios[1]
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("hr", {
    className: "menu-separator"
  }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Switch, {
    disabled: !selectedScenarios[1],
    checked: props.showDifference,
    label: "Show difference",
    id: "scenario-difference-switch",
    onChange: updateShowDifference
  }))), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "menu-separator"
  })));
}
var _default = exports["default"] = Menu;
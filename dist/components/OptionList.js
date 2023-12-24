"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function OptionList(props) {
  var noneItem = props.noneItem,
    itemTitles = props.itemTitles;
  var items = noneItem ? ["none"].concat(props.items) : props.items;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, items.map(function (item, idx) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: idx,
      value: item
    }, itemTitles[item] || item);
  }));
}
var _default = exports["default"] = OptionList;
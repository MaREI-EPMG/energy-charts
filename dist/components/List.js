"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function List(props) {
  var noneItem = props.noneItem,
    onSelection = props.onSelection,
    itemTitles = props.itemTitles;
  var items = noneItem ? ["none"].concat(props.items) : props.items;
  var selectedItem = noneItem && !props.selectedItem ? "none" : props.selectedItem;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, items.map(function (item, idx) {
    return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ListGroup.Item, {
      key: idx,
      id: item,
      as: "li",
      active: selectedItem === item,
      onClick: function onClick() {
        onSelection(item);
      }
    }, itemTitles && itemTitles[item] || item);
  }));
}
var _default = exports["default"] = List;
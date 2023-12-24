"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrap = require("react-bootstrap");
var _reactMarkdown = _interopRequireDefault(require("react-markdown"));
var _remarkGfm = _interopRequireDefault(require("remark-gfm"));
var _rehypeRaw = _interopRequireDefault(require("rehype-raw"));
var _useFetch = _interopRequireDefault(require("../hooks/useFetch"));
var _components = require("../components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Page(props) {
  var _useParams = (0, _reactRouterDom.useParams)(),
    pageId = _useParams.pageId;
  var _props$basePath = props.basePath,
    basePath = _props$basePath === void 0 ? "" : _props$basePath,
    cache = props.cache,
    name = props.name;
  var page = name ? name : pageId;
  var _useFetchText = (0, _useFetch["default"])("".concat(basePath, "/pages/").concat(page, ".md"), cache),
    _useFetchText2 = _slicedToArray(_useFetchText, 2),
    contentIsLoading = _useFetchText2[0],
    content = _useFetchText2[1];
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    className: "page m-0 justify-content-center align-items-center h-100"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    sm: 10,
    md: 8,
    lg: 7,
    xl: 6,
    xxl: 5
  }, contentIsLoading ? /*#__PURE__*/_react["default"].createElement(_components.PageLoading, null) : content ? /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
    remarkPlugins: [_remarkGfm["default"]],
    children: content,
    rehypePlugins: [_rehypeRaw["default"]]
  }) : /*#__PURE__*/_react["default"].createElement(_components.NotFound, null)));
}
var _default = exports["default"] = Page;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _exportToCsv = require("export-to-csv");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // contains EPMG customisation
function downloadTableData(chartData, chartName, unit, scenarioTitles, when) {
  var dataToFormat = [];
  var columnHeaders = [];
  var chartDesc = "Downloaded from\n".concat(window.location.href, "\n");
  var scenarioHeaders = [];
  var needHeaders = true;
  var scenarioNames = {};
  var allScenarioNames = [];
  chartDesc += window.location.pathname.replaceAll("/", " > ") + "\nGenerated at ".concat(when, "\n\n");

  // take the chart data and turn it into a format suitable for formatting as CSV
  var _iterator = _createForOfIteratorHelper(chartData),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var scenario = _step.value;
      if (!scenario) {
        continue;
      }
      if (Array.isArray(scenario.name)) {
        scenarioNames = {};
        var i = 1;
        var _iterator2 = _createForOfIteratorHelper(scenario.name),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var name = _step2.value;
            var thisHeader = "scenario ".concat(i++);
            scenarioNames[thisHeader] = name;
            if (needHeaders) {
              allScenarioNames.push(name);
              scenarioHeaders.push(thisHeader);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (needHeaders) {
          needHeaders = false;
          chartDesc += "Table values are calculated as: Scenario 1 - Scenario 2\n";
        }
      } else {
        scenarioNames.scenario = scenario.name;
        if (needHeaders) {
          scenarioHeaders.push("scenario");
          needHeaders = false;
        }
        if (!allScenarioNames.includes(scenario.name)) {
          allScenarioNames.push(scenario.name);
        }
      }
      var _iterator3 = _createForOfIteratorHelper(scenario.data),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var series = _step3.value;
          var thisRow = Object.assign({}, scenarioNames);
          thisRow.series = series.seriesName;
          var _iterator4 = _createForOfIteratorHelper(series.seriesValues),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var seriesValues = _step4.value;
              var year = seriesValues[0];
              thisRow[year] = parseFloat(seriesValues[1].toPrecision(4));
              if (!columnHeaders.includes(year)) columnHeaders.push(year);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          dataToFormat.push(thisRow);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  columnHeaders.sort();
  columnHeaders.unshift("series");
  columnHeaders.unshift.apply(columnHeaders, scenarioHeaders);
  var filename = chartName // sanitise
  /* eslint-disable-next-line no-control-regex */.replace(/[\x00-\x1f\x80-\x9f/?<>\\:*| "]/g, "_").replace(/^\.+/, "").replace(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, "x");
  for (var _i = 0, _allScenarioNames = allScenarioNames; _i < _allScenarioNames.length; _i++) {
    var key = _allScenarioNames[_i];
    if (scenarioTitles[key]) {
      chartDesc += "".concat(key, ": ").concat(scenarioTitles[key], "\n");
    }
  }
  chartDesc += "\n".concat(chartName, " (").concat(unit, ")\n");
  var csvConfig = (0, _exportToCsv.mkConfig)({
    columnHeaders: columnHeaders,
    decimalSeparator: ".",
    fieldSeparator: ",",
    filename: filename,
    quoteCharacter: '"',
    quoteStrings: true,
    showColumnHeaders: true,
    showTitle: true,
    title: "".concat(chartDesc),
    useBom: true,
    useTextFile: false
  });
  var csv = (0, _exportToCsv.generateCsv)(csvConfig)(dataToFormat);
  (0, _exportToCsv.download)(csvConfig)(csv);
}
var _default = exports["default"] = downloadTableData;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function normaliseData(data, scenarioName, seriesNames, periods) {
  if (data === null && scenarioName) {
    return {
      name: scenarioName,
      data: seriesNames.map(function (seriesName) {
        return {
          seriesName: seriesName,
          seriesValues: periods.map(function (period) {
            return [period, 0];
          })
        };
      })
    };
  } else if (data !== null && scenarioName) {
    return {
      name: scenarioName,
      data: seriesNames.map(function (seriesName) {
        return {
          seriesName: seriesName,
          seriesValues: periods.map(function (period) {
            var series = data.data.find(function (series) {
              return series.seriesName === seriesName;
            });
            var periodValue;
            if (typeof series === "undefined") {
              periodValue = 0;
            } else {
              var seriesValue = series.seriesValues.find(function (seriesValue) {
                return seriesValue[0] === period;
              });
              if (typeof seriesValue === "undefined") {
                periodValue = 0;
              } else {
                periodValue = seriesValue[1];
              }
            }
            return [period, periodValue];
          })
        };
      })
    };
  } else {
    return data;
  }
}
var _default = exports["default"] = normaliseData;
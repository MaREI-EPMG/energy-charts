"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// contains EPMG customisation
function calculateDifference(data) {
  var diffValues = function diffValues(array1, array2) {
    var series = [];
    for (var j = 0; j < array1.length; j++) {
      // rounding, and zeroing negligible values, because javascript has trouble with floating-point arithmetic
      var valueDifference = parseFloat((array1[j][1] - array2[j][1]).toPrecision(3));
      if (Math.abs(valueDifference) < Math.abs(array1[j][1]) / 1e4 && Math.abs(valueDifference) < Math.abs(array2[j][1]) / 1e4) {
        valueDifference = 0;
      }
      series.push([array1[j][0], valueDifference]);
    }
    return series;
  };
  var difference = {
    name: [data[0].name, data[1].name],
    data: []
  };
  for (var i = 0; i < data[0].data.length; i++) {
    difference.data[i] = {
      seriesName: data[0].data[i].seriesName,
      seriesValues: diffValues(data[0].data[i].seriesValues, data[1].data[i].seriesValues)
    };
  }
  return difference;
}
var _default = exports["default"] = calculateDifference;
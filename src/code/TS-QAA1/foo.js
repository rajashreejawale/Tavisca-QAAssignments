"use strict";
exports.__esModule = true;
exports.sum = void 0;
exports.sum = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a.reduce(function (acc, val) { return acc + val; }, 0);
};

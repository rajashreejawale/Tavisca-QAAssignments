"use strict";
exports.__esModule = true;
var foo_1 = require("../../code/TS-QAA1/foo");
test('basic', function () {
    expect(foo_1.sum()).toBe(0);
});
test('basic again', function () {
    expect(foo_1.sum(1, 2)).toBe(3);
});

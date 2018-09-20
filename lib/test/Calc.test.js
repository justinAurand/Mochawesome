"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Calc_1 = require("../src/Calc");
chai_1.should();
describe('Calc test suite', function () {
    var calc = new Calc_1.Calc();
    it('Can add', function () {
        var result = calc.add(5, 5);
        result.should.equals(10, "Should return: 10, but returned: " + result);
    });
    it('Can subtract', function () {
        var result = calc.subtract(20, 10);
        result.should.equals(10, "Should return: 10, but returned: " + result);
    });
});

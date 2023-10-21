// spec/math.spec.js
const { add } = require('../math.js');

describe("Math functions", function () {
    it("should add two numbers correctly", function () {
      expect(add(2, 3)).toBe(5);
    });
  
    it("should handle negative numbers", function () {
      expect(add(-1, 1)).toBe(0);
    });
  });
  
// spec/calculator.spec.js
const Calculator = require('../calculator.js')

describe('Calculator', function () {
    let calculator;
  
    // This beforeEach block will run before each test case in this suite.
    beforeEach(function () {
      calculator = new Calculator();
    });
  
    // Test case 1: Addition
    it('should add two numbers correctly', function () {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });
  
    // Test case 2: Subtraction
    it('should subtract two numbers correctly', function () {
      const result = calculator.subtract(5, 3);
      expect(result).toBe(2);
    });
  
    // Test case 3: Multiplication
    it('should multiply two numbers correctly', function () {
      const result = calculator.multiply(4, 3);
      expect(result).toBe(12);
    });
  });
  
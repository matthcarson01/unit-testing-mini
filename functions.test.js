const {returnTwo, add, subtract, multiply, divide, greeting} = require("./functions");

//returnTwo function Test
test("returnTwo should equal 2", () => {
  expect(returnTwo()).toBe(2);
});

//greeting function Test
test("greeting should return custom greeting", () => {
  expect(greeting("James")).toBe("Hello, James.");
  expect(greeting("Jill")).toBe("Hello, Jill.");
});

//Math functions Test
describe("Math Functions: ",()=>{

    test("add should equal sum of two parameters", () => {
      expect(add(1, 2)).toBe(3);
      expect(add(5, 9)).toBe(14);
    });

    test("subtract should equal sum of two parameters", () => {
      expect(subtract(5, 4)).toBe(1);
      expect(subtract(5, 9)).toBe(-4);
    });

    test("multiply should equal sum of two parameters", () => {
      expect(multiply(10, 2)).toBe(20);
      expect(multiply(4, 3)).toBe(12);
    });
    test("divide should equal sum of two parameters", () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(4, 2)).toBe(2);
    });
})

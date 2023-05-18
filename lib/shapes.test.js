const { Shape, Triangle, Square, Circle } = require('../lib/shapes.js');

describe("Triangle Test", () => {
  test("test for a triangle with a pink background", () => {
    const shape = new Triangle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="pink" />'
    );
  });
});

describe("Circle Test", () => {
  test("test for a circle with a blue background", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="blue" />'
    );
  });
});

describe("Square Test", () => {
  test("test for a square with a green background", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="green" />'
    );
  });
});
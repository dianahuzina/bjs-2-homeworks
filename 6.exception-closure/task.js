function parseCount(value) {
  let result = parseFloat(value);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  get perimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }
  get area() {
    let halfPerimeter = this.perimeter / 2;
    let area = parseFloat((Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c))).toFixed(3));
    return area;
  }
}

function getTriangle(a, b, c) {
  try {
    let triangle = new Triangle(a, b, c);
    return triangle;
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }, 
      get area() {
        return "Ошибка! Треугольник не существует";
      } 
    };
  }
}

"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1, x2;
  let D = b**2 - 4 * a * c;
  if (D < 0) {
    arr = [];
  }
  else if (D === 0) { 
    x1 = x2 = -b / (2 * a);
    arr = [x1];
  }
  else {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr = [x1, x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) * 1 / 12;
  let n = countMonths;
  let S = amount - contribution;
  let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
  let totalAmount = monthlyPayment * n;
  let roundedTotalAmount = totalAmount.toFixed(2);
  return parseFloat(roundedTotalAmount);
}
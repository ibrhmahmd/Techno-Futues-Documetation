// Session 2 Demo: Variables, Data Types & Operators

// Variable declaration examples
let age = 25;
const PI = 3.14;
var name = "Ali";

// Data types example
let number = 10;
let text = "Hello";
let isActive = true;
let value = null;
let data;
let obj = { key: "value" };

// Operators example
let sum = 5 + 2;
let product = 4 * 2;
let power = 2 ** 3;

// Show variables in console
function showVariables() {
  console.log("let age =", age);
  console.log("const PI =", PI);
  console.log("var name =", name);
}

document.getElementById('showVars').addEventListener('click', showVariables);

// Show data types in console
function showTypes() {
  console.log("number:", typeof number);
  console.log("text:", typeof text);
  console.log("isActive:", typeof isActive);
  console.log("value (null):", value === null ? "null" : typeof value);
  console.log("data (undefined):", typeof data);
  console.log("obj:", typeof obj);
}

document.getElementById('showTypes').addEventListener('click', showTypes);

// Show operators in console
function showOperators() {
  console.log("5 + 2 =", sum);
  console.log("4 * 2 =", product);
  console.log("2 ** 3 =", power);
}

document.getElementById('showOps').addEventListener('click', showOperators);
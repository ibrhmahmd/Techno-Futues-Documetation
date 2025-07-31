// Session 4 Demo: Functions & Scope

// Function declaration
function greet(name) {
  return "Hello, " + name;
}

document.getElementById('callGreet').addEventListener('click', function() {
  console.log(greet("Ali"));
});

// Arrow function
const add = (a, b) => a + b;
document.getElementById('callAdd').addEventListener('click', function() {
  console.log('2 + 3 =', add(2, 3));
});

// Scope and hoisting example
function testScope() {
  var a = 1;
  let b = 2;
  if (true) {
    var a = 3;
    let b = 4;
    console.log('Inside block:', a, b); // 3, 4
  }
  console.log('Outside block:', a, b); // 3, 2
}
document.getElementById('testScope').addEventListener('click', testScope);
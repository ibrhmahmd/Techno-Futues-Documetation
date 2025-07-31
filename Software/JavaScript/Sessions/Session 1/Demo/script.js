// Session 1 Demo: JavaScript Introduction & Basic Syntax

// Output a welcome message to the console
console.log('Welcome to JavaScript Session 1!');

// Add event listener to the external button
document.getElementById('externalBtn').addEventListener('click', function() {
  console.log('Button clicked! This message is from external JS.');
});

// Example of single-line and multi-line comments
// This is a single-line comment
/*
  This is a multi-line comment

// JavaScript Session 1 Demo
// Demonstrates basic syntax and console output

// Print a welcome message to the console
console.log('Welcome to JavaScript Session 1!');

// Add event listener to button to show a message
const btn = document.getElementById('showMessage');
if (btn) {
  btn.addEventListener('click', function() {
    console.log('Button clicked! This is a console output example.');
    alert('Check the console for the message!');
  });
}

// Example of a variable declaration
let greeting = "Hello, world!";
console.log(greeting);

// Example of a single-line comment
// This is a comment

/*
  Example of a multi-line comment
  This explains the code below

*/
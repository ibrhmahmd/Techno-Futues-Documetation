// Session 5 Demo: Arrays & Array Methods

let fruits = ["apple", "banana", "orange"];

// Show array creation and manipulation
function showFruits() {
  fruits.push("grape");
  console.log("Fruits:", fruits);
  fruits[0] = "mango";
  console.log("After change:", fruits);
}
document.getElementById('showFruits').addEventListener('click', showFruits);

// Array iteration
function iterateFruits() {
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  let lengths = fruits.map(function(fruit) {
    return fruit.length;
  });
  console.log("Lengths:", lengths);
}
document.getElementById('iterateFruits').addEventListener('click', iterateFruits);

// Search and filter
function searchFruits() {
  let hasBanana = fruits.includes("banana");
  let filtered = fruits.filter(fruit => fruit.startsWith("a"));
  console.log("Has banana?", hasBanana);
  console.log("Fruits starting with 'a':", filtered);
}
document.getElementById('searchFruits').addEventListener('click', searchFruits);
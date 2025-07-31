// Session 6 Demo: Objects & Basic DOM Manipulation

let person = {
  name: "Sara",
  age: 22,
  isStudent: true
};

// Show object creation
function showPerson() {
  person.city = "Cairo";
  person.age = 23;
  delete person.isStudent;
  console.log(person);
}
document.getElementById('showPerson').addEventListener('click', showPerson);

// Object method
person.greet = function() {
  return "Hello, " + this.name;
};
document.getElementById('callGreet').addEventListener('click', function() {
  console.log(person.greet());
});

// DOM selection and manipulation
function changeTitle() {
  let heading = document.getElementById('main-title');
  console.log('Old title:', heading.textContent);
  heading.textContent = 'New Title';
  console.log('New title:', heading.textContent);
}
document.getElementById('changeTitle').addEventListener('click', changeTitle);
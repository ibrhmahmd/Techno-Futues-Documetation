// Session 3 Demo: Control Flow (Conditionals)

// If/Else Example
function checkScore() {
  let score = 70;
  if (score >= 60) {
    console.log("ناجح (Passed)");
  } else {
    console.log("راسب (Failed)");
  }
}
document.getElementById('checkScore').addEventListener('click', checkScore);

// Switch Example
function showDay() {
  let day = 3;
  switch(day) {
    case 1:
      console.log("الأحد (Sunday)");
      break;
    case 2:
      console.log("الاثنين (Monday)");
      break;
    case 3:
      console.log("الثلاثاء (Tuesday)");
      break;
    default:
      console.log("يوم غير معروف (Unknown day)");
  }
}
document.getElementById('showDay').addEventListener('click', showDay);

// Ternary Operator Example
function checkAge() {
  let age = 18;
  let status = (age >= 18) ? "بالغ (Adult)" : "قاصر (Minor)";
  console.log(status);
}
document.getElementById('checkAge').addEventListener('click', checkAge);

// Truthy/Falsy Example (shown in console on load)
console.log('Falsy test (empty string):', "" ? "Truthy" : "Falsy");
console.log('Falsy test (0):', 0 ? "Truthy" : "Falsy");
console.log('Truthy test ("hello"):', "hello" ? "Truthy" : "Falsy");
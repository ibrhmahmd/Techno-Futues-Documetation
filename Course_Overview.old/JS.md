### **1️⃣ Introduction to JavaScript**


---

### **2️⃣ Ways to Write JavaScript Code**

#### ✅ **Inline JavaScript**

```html
<button onclick="alert('Hello!')">Click me</button>
```

#### ✅ **Internal JavaScript**

```html
<script>
  alert("Welcome to JavaScript!");
</script>
```

#### ✅ **External JavaScript**

```js
// script.js
console.log("Hello from external JS file!");
```

```html
<script src="script.js"></script>
```

---

### **3️⃣ Understanding Variables**

Variables store data.

```js
var name = "John";  // Old way
let age = 25;       // Modern way
const PI = 3.14;    // Constant
```

---

### **4️⃣ Variable Declaration Rules**

- Variable names are **case-sensitive**.
- Cannot start with a number (`123name` ❌).
- Cannot use reserved keywords (`let`, `function`, etc.).
- Use **camelCase** for better readability (`userName`).

---

### **5️⃣ Operators**

```js
let sum = 10 + 5;   // Addition
let sub = 10 - 5;   // Subtraction
let mul = 10 * 5;   // Multiplication
let div = 10 / 5;   // Division
let mod = 10 % 3;   // Modulus (remainder)
let notTrue = !true; // Logical NOT
```

---

### **6️⃣ Printing Output**

```js
console.log("Hello Console!");  // Console output
document.write("Hello Page!");  // Write on the page
alert("Hello Alert!");          // Popup alert
```

---

### **7️⃣ Arrays**

#### ✅ Deleting Elements

```js
let fruits = ["Apple", "Banana", "Cherry"];
fruits.pop();  // Removes "Cherry"
```

#### ✅ Inserting Elements

```js
fruits.push("Mango"); // Adds "Mango" to the end
fruits.unshift("Grapes"); // Adds "Grapes" to the beginning
```

---

### **8️⃣ Data Types**

```js
let str = "Hello";   // String
let num = 25;        // Number
let float = 3.14;    // Float (also number)
let bool = true;     // Boolean
```

---

### **9️⃣ Simple Projects**

#### ✅ **Creating a Calculator using `prompt`**

```js
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
alert("Sum: " + (num1 + num2));
```

#### ✅ **Student Project (Grading System)**

```js
let grade = parseInt(prompt("Enter your score:"));
if (grade >= 90) alert("A");
else if (grade >= 80) alert("B");
else alert("C");
```

---

### **🔟 Conditional Statements**

```js
if (score > 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}
```

---

### **1️⃣1️⃣ Logical Operators**

```js
if (age >= 18 && hasLicense) console.log("Can drive");
if (age < 18 || !hasLicense) console.log("Cannot drive");
```

---

### **1️⃣2️⃣ Functions**

```js
function greet(name) {
  return "Hello " + name;
}
console.log(greet("John"));
```

---

## **🔹 JavaScript Level 2 (Intermediate Concepts)**

### **1️⃣ `switch` Statement**

```js
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Other day");
}
```

---

### **2️⃣ Scope of Variables**

```js
let globalVar = "I am global"; 

function test() {
  let localVar = "I am local"; 
  console.log(globalVar);
}
test();
// console.log(localVar); // ❌ Error: localVar is not defined
```

---

### **3️⃣ Events**

#### ✅ **Click Event**

```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

#### ✅ **Key Events**

```js
document.addEventListener("keydown", function() {
  console.log("Key Pressed!");
});
```

---

### **4️⃣ Loops**

#### ✅ **For Loop**

```js
for (let i = 1; i <= 5; i++) {
  console.log("Number " + i);
}
```

#### ✅ **While Loop**

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

#### ✅ **Do-While Loop**

```js
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);
```

---

### **5️⃣ Arrow Functions**

```js
const greet = (name) => "Hello " + name;
console.log(greet("Alice"));
```

---

### **6️⃣ Introduction to the DOM**

```js
document.getElementById("myDiv").innerHTML = "Changed Text!";
```

---

## **🔹 JavaScript Level 3 (DOM & Advanced Topics)**

### **1️⃣ DOM Attributes (`innerHTML`, `outerHTML`)**

```js
document.getElementById("demo").innerHTML = "Hello!";
```

---

### **2️⃣ Manipulating CSS via JavaScript**

```js
document.getElementById("box").style.backgroundColor = "red";
```

---

### **3️⃣ Inserting & Removing Elements**

```js
let newDiv = document.createElement("div");
newDiv.innerHTML = "New Element";
document.body.appendChild(newDiv); 
document.body.removeChild(newDiv);
```

---

### **4️⃣ Browser Object Model (BOM)**

#### ✅ **Window & Location**

```js
console.log(window.innerWidth);
console.log(location.href); // Current URL
```

#### ✅ **Scrolling**

```js
window.scrollTo(0, 100);
```

---

### **Final Projects 🚀**

#### ✅ **1️⃣ Simple To-Do List**

```html
<input type="text" id="task" placeholder="Enter task">
<button onclick="addTask()">Add Task</button>
<ul id="taskList"></ul>
<script>
  function addTask() {
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.innerHTML = task;
    document.getElementById("taskList").appendChild(li);
  }
</script>
```

#### ✅ **2️⃣ Digital Clock**

```html
<p id="clock"></p>
<script>
  function updateClock() {
    let now = new Date();
    document.getElementById("clock").innerHTML = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
</script>
```

---
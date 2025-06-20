---
title: "Advanced JavaScript - Session 3"
author: "---"
date: "2025"
---

## Topic 1: Very Simple DOM Selectors

<div class="arabic">
أبسط طرق اختيار العناصر من الصفحة
</div>

**Example: Select an element by ID and by class**

```javascript
// HTML: <p id="greet">Hello</p>
const greet = document.getElementById("greet");
console.log(greet.textContent); // Output: Hello

// HTML: <div class="box">Box</div>
const box = document.querySelector(".box");
console.log(box.textContent); // Output: Box
```

<div class="arabic">
getElementById يختار عنصرًا بمعرفه. querySelector يختار أول عنصر يطابق الكلاس أو الوسم.
</div>

---

## Topic 2: Real Programming Usage for a Function

<div class="arabic">
استخدام عملي للدوال في البرمجة
</div>

Functions are used to organize code for tasks like validating user input in a form.

**Example: Validate if a username is not empty**

```javascript
function isValidUsername(username) {
  return username.trim() !== "";
}

console.log(isValidUsername("Marwan")); // Output: true
console.log(isValidUsername("   "));    // Output: false
```

<div class="arabic">
الدوال تساعدنا في إعادة استخدام الكود. هنا دالة تتحقق إذا كان اسم المستخدم غير فارغ.
</div>

---

## Topic 3: Objects in JavaScript (with Real Use Case)

<div class="arabic">
شرح الكائنات (objects) واستخدام عملي في البرمجة
</div>

Objects group related data and actions. For example, representing a user and checking their password.

```javascript
const user = {
  username: "Marwan",
  password: "1234",
  checkPassword: function(input) {
    return input === this.password;
  }
};

console.log(user.username); // Output: Marwan
console.log(user.checkPassword("1234")); // Output: true
```

<div class="arabic">
الكائن يجمع بيانات المستخدم ودالة للتحقق من كلمة المرور.
</div>

---

## Topic 4: Introduction to Saving Objects to Local Storage

<div class="arabic">
مقدمة عن حفظ الكائنات في التخزين المحلي (localStorage)
</div>

You can save objects in the browser's local storage by converting them to a string.

**Example: Save and retrieve a user object**

```javascript
const user = { username: "Marwan", age: 20 };

// Save to localStorage
localStorage.setItem("user", JSON.stringify(user));

// Retrieve from localStorage
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.username); // Output: Marwan
```

<div class="arabic">
نستخدم JSON.stringify لتحويل الكائن إلى نص قبل حفظه، وJSON.parse لإرجاعه إلى كائن عند القراءة.
</div>

---

## Practical Exercise

<div class="arabic">
تمرين عملي: أنشئ صفحة فيها زر يغير لون الخلفية كلما ضغطت عليه، وأضف عنصر نصي يتغير محتواه عند الضغط على زر آخر.
</div>

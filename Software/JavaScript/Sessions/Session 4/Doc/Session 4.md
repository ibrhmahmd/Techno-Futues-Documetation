---
title: "Functions & Scope - Session 4"
author: "---"
date: "2025"
---

## Topic 1: Function Declaration

<div class="arabic">
تعريف الدوال في جافاسكريبت
</div>

### Subtopic 1

**[تعريف دالة تقليدية]**

```javascript
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Ali"));
```

<div class="arabic">
الدوال التقليدية تُعرف بكلمة function ويمكن استدعاؤها في أي مكان بعد تعريفها.
</div>

---

### Subtopic 2

**[الدوال السهمية (Arrow Functions)]**

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

<div class="arabic">
الدوال السهمية طريقة مختصرة لتعريف الدوال.
</div>

## Topic 2: Parameters and Return Values

<div class="arabic">
المعاملات وقيم الإرجاع في الدوال
</div>

```javascript
function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 5); // 20
```

<div class="arabic">
يمكن للدوال استقبال معاملات وإرجاع قيم.
</div>

## Topic 3: Scope and Hoisting

<div class="arabic">
نطاق المتغيرات ورفع التعريفات
</div>

```javascript
function testScope() {
  var a = 1;
  let b = 2;
  if (true) {
    var a = 3;
    let b = 4;
    console.log(a, b); // 3, 4
  }
  console.log(a, b); // 3, 2
}
testScope();
```

<div class="arabic">
var له نطاق دالة، let له نطاق بلوك. التعريفات باستخدام var تُرفع للأعلى (hoisting).
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: اكتب دالة تستقبل رقمين وتعيد ناتج جمعهما.
</div>

```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 7));
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **Function Declaration**: Traditional & arrow
2. **Parameters & Return**: Passing and returning values
3. **Scope**: var vs let/const
4. **Hoisting**: Variable/function lifting

## Advanced: Function Expressions

### Anonymous Functions

<div class="arabic">
الدوال المجهولة (بدون اسم)
</div>

| Example | Usage |
|---------|-------|
| `setTimeout(function(){...}, 1000);` | Timer |
| `arr.map(function(x){ return x*2; });` | Array mapping |

<div class="arabic">
الدوال المجهولة تُستخدم كثيراً في الأحداث والتعامل مع المصفوفات.
</div>
---
title: "Advanced JavaScript - Session 1"
author: "---"
date: "2025"
---

## Variable Types: var, let, and const

<div class="arabic">
الفرق بين طرق تعريف المتغيرات var و let و const
</div>

### var

**var - ممكن نعيد تعريفه تاني**

```javascript
var x = 10;
var x = 20;  **عرفناه تاني من غير ما يحصل ايرور**
x = 30;     // Valid update
console.log(x); // Output: 30
```

<div class="arabic">
 var يمكن إعادة تعريفه وتغيير قيمته
</div>

---

### let

**let - مينفعش نعيد تعريفه زي ما عملنا في ال var قبل كده**

**دي حاجه احسن علي فكره عشان كده هنستخدم let علي طول**

```javascript
let y = 10;
// let y = 20;//
**هنا لو شغلت الكود دا هيطلعلي ايرور**
y = 20;      // Valid update
console.log(y); // Output: 20
```

<div class="arabic">
 let يمكن تغيير قيمته ولكن لا يمكن إعادة تعريفه
</div>

---

### const

**const - ثابت مش بيتغير ولا بيتعاد تعريفه**

```javascript
const z = 10;
// const z = 20;
**مينفعش اعرفه تاني**
// z = 20;
**مينفعش اغير قيمته**
console.log(z); // Output: 10
```

<div class="arabic">
 const لا يمكن تغيير قيمته أو إعادة تعريفه
</div>

## Variables and Strings

<div class="arabic">
دا شرح كتابه ال Variable باستخدام let وكمان ازاى نغير قيمتهم ونضيف رقم لنص
</div>

```
  let    num    =     5
  ↓       ↓            ↓
نوع المتغير  اسم المتغير  القيمة
(Variable type) (Variable name) (Value)
```

```javascript
// a variable with 'let'
let name = 'farida';

  
// Changing the value of a variable
name = 'salem';
console.log(name); // Output: salem

  
// Adding a number to a string.
name = name + 1;
console.log(name); // Output: salem1
```

## Null Values and Conditionals

<div class="arabic">
هنا الكود في ال (if) بيتاكد لو قيمه ال num بتساوي null ولا لا
</div>

```javascript
// Variable with null value
let num = null;


if (num == null)
    console.log("the num can not be empty");
else
    console.log("num");
```

<div class="arabic">
الفرق بين == و === هو ان === بتتأكد من النوع والقيمة لكن == بتتأكد من القيمة بس
</div>

---

## Conditional Statements: if, else if, else

<div class="arabic">
هنا بنتعلم ازاي نستخدم if, else if, و else للتحكم في مسار البرنامج حسب الشروط المختلفة
</div>

### Basic if-else Statement

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are under 18");
}
// Output: You are an adult
```

<div class="arabic">
البلوك الأول بيتنفذ لو الشرط صح، البلوك الثاني (else) بيتنفذ لو الشرط غلط
</div>

### Multiple Conditions with else if

```javascript
let grade = 85;

if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 80) {
    console.log("Very Good");
} else if (grade >= 70) {
    console.log("Good");
} else if (grade >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// Output: Very Good
```

<div class="arabic">
بنستخدم else if عشان نختبر شروط مختلفة بالترتيب، وبيتنفذ البلوك الأول اللي شرطه يتحقق
</div>


## Numbers and the Operator (%)

<div class="arabic">
علامة % هي معامل باقى القسمة، يعنى بتجيب الباقى بعد ما نقسم رقم على رقم تانى
</div>

```javascript
// Remainder after division
let number = 23;
let remainer = number % 2;
console.log(remainer); // Output: 1   (عشان باقي القسمه من  23 ÷ 2 هو 1)

  
// Checking if a number is even or odd
let testNumber = 24;
if (testNumber % 2 === 0)
    console.log('even');
else
    console.log("odd");
// Output: even
```

<div class="arabic">
بنستخدم معامل باقى القسمة (%) عشان نشوف إذا كان الرقم زوجى (even) او فردي (odd)
</div>

## Even/Odd Number Checker

<div class="arabic">
دا مثال لكود بيحدد إذا كان الرقم زوجي او فردي
</div>

```javascript
let num = 30;
let remainer = num % 2;

  
if (remainer == 0) {
    console.log('even');
} else {
    console.log('odd');
}
// Output: even
```

<div class="arabic">
لو باقى القسمة على 2 يساوي صفر يبقى الرقم زوجي، غير كدا يبقى فردي
</div>

## Key Concepts Covered

<div class="arabic">
دى المفاهيم اللي اتكلمنا عنها عشان لو عملت سيرش تسيرش صح:
</div>

1. **Variables**: Using `var`, `let`, and `const` to declare variables
2. **Data Types**: String, number, null, Undefined
3. **Console Output**: Using `console.log()` to display values
4. **Conditionals**: Using `if/else if/else` statements to make decisions
5. **Operators**:
   - Assignment (`=`) عامل التعيين
   - Addition/concatenation (`+`) الجمع/الدمج
   - Modulo (`%`) باقى القسمة
   - Equality (`==`, `===`) المساواة
   - Comparison (`>`, `<`, `>=`, `<=`) المقارنة


## Advanced: Variable Declaration Comparison

### Key Differences Between var, let, and const

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Redeclaration | ✅ Yes | ❌ No | ❌ No |
| Reassignment | ✅ Yes | ✅ Yes | ❌ No |
| Hoisting | ✅ Yes (initialized as undefined) | ✅ Yes (not initialized) | ✅ Yes (not initialized) |
| Temporal Dead Zone | ❌ No | ✅ Yes | ✅ Yes |
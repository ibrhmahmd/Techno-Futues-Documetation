---
title: "Advanced JavaScript - Session 1"
author: "---"
date: "2025"
---

## Variable Types: var, let, and const

<div class="arabic">
الفرق بين طرق تعريف المتغيراتي var و let و const
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

## Arrays

<div class="arabic">
هنا بنتعلم ازاى نعمل  (array) ونوصل للعناصر جواها ونغير قيمهم
</div>

```javascript
// Creating an array
let array = [1, 2, 3, 4, 5];
console.log(array); // Output: [1, 2, 3, 4, 5]

  
// Accessing array elements ()
**خد بالك بنبدأ العد بالصفر مش بالواحد**
console.log(array[2]); // Output: 3

  
// Changing an array element
array[4] = 'marwan';
console.log(array); // Output: [1, 2, 3, 4, 'marwan']
```

<div class="arabic">
المصفوفات ممكن تحتوى على أنواع مختلفة من البيانات زى الأرقام والنصوص في نفس الوقت
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

  
// Array with mixed data types
let arrayOfNums = ["sameh", 2, 3, 4, 5, 6, 7, 8, 9];

  
// Checking if a number is even or odd
if (array[0] % 2 === 0)
    console.log('even');
else
    console.log("odd");
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
```

<div class="arabic">
لو باقى القسمة على 2 يساوي صفر يبقى الرقم زوجي، غير كدا يبقى فردي
</div>

## Key Concepts Covered

<div class="arabic">
دى اهم المفاهيم اللي اتكلمنا عنها:
</div>

1. **Variables**: Using `let` to declare variables
2. **Data Types**: String, number, null, Undefined, array
3. **Console Output**: Using `console.log()` to display values
4. **Conditionals**: Using `if/else` statements to make decisions
5. **Arrays**: Creating, accessing, and modifying array elements
6. **Operators**:
   - Assignment (`=`) عامل التعيين
   - Addition/concatenation (`+`) الجمع/الدمج
   - Modulo (`%`) باقى القسمة
   - Equality (`==`, `===`) المساواة

## Advanced: Variable Declaration Comparison

### Key Differences Between var, let, and const

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Redeclaration | ✅ Yes | ❌ No | ❌ No |
| Reassignment | ✅ Yes | ✅ Yes | ❌ No |
| Hoisting | ✅ Yes (initialized as undefined) | ✅ Yes (not initialized) | ✅ Yes (not initialized) |
| Temporal Dead Zone | ❌ No | ✅ Yes | ✅ Yes |


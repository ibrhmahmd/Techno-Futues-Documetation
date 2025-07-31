---
title: "Variables, Data Types & Operators - Session 2"
author: "---"
date: "2025"
---

## Topic 1: Variable Declaration (let, const, var)

<div class="arabic">
طرق تعريف المتغيرات في جافاسكريبت
</div>

### Subtopic 1

**[استخدام let و const و var]**

```javascript
let age = 25;
const PI = 3.14;
var name = "Ali";
```

<div class="arabic">
let: متغير يمكن تغيير قيمته
const: متغير ثابت لا يمكن تغييره
var: طريقة قديمة لتعريف المتغيرات
</div>

---

### Subtopic 2

**[نطاق المتغيرات (Scope)]**

```javascript
if (true) {
  let x = 10;
  var y = 20;
}
// console.log(x); // خطأ: x غير معرف خارج البلوك
console.log(y); // صحيح: y معرف
```

<div class="arabic">
let و const لهما نطاق محلي (block scope)، أما var فنطاقه أوسع (function scope).
</div>

## Topic 2: Data Types

<div class="arabic">
أنواع البيانات في جافاسكريبت
</div>

```javascript
let number = 10; // Number
let text = "Hello"; // String
let isActive = true; // Boolean
let value = null; // Null
let data; // Undefined
let obj = { key: "value" }; // Object
```

<div class="arabic">
أهم أنواع البيانات: رقم، نص، منطقية، فارغ، غير معرف، كائن.
</div>

## Topic 3: Type Conversion

<div class="arabic">
تحويل أنواع البيانات
</div>

```javascript
let num = "5";
let sum = Number(num) + 10; // 15
let str = String(123); // "123"
```

<div class="arabic">
يمكنك التحويل بين الأنواع باستخدام Number() و String().
</div>

## Topic 4: Operators

<div class="arabic">
المعاملات في جافاسكريبت
</div>

```javascript
let a = 5 + 2; // 7
let b = 10 - 3; // 7
let c = 4 * 2; // 8
let d = 8 / 2; // 4
let e = 7 % 3; // 1
let f = 2 ** 3; // 8
```

<div class="arabic">
معاملات الجمع، الطرح، الضرب، القسمة، باقي القسمة، والأس.
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: عرف متغيرين (اسمك وعمرك) واطبع جملة باستخدامهما.
</div>

```javascript
let name = "أحمد";
let age = 20;
console.log("اسمي " + name + " وعمري " + age);
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **Variable Declaration**: let, const, var
2. **Data Types**: Number, String, Boolean, Null, Undefined, Object
3. **Type Conversion**: Number(), String()
4. **Operators**: +, -, *, /, %, **

## Advanced: Comparison Operators

### == vs ===

<div class="arabic">
الفرق بين == و === في المقارنة
</div>

| Operator | Description | Example |
|----------|-------------|---------|
| ==       | مقارنة مع التحويل | 5 == "5" // true |
| ===      | مقارنة بدون تحويل | 5 === "5" // false |

<div class="arabic">
يفضل استخدام === للمقارنة الدقيقة بين القيم والأنواع.
</div>
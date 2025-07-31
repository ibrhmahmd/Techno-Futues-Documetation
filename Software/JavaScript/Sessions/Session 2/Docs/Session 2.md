---
title: "Advanced JavaScript - Session 2: Variables, Data Types & Operators"
author: "Techno Software Instructor"
date: "2024"
---

## Topic 1: Variable Declaration

<div class="arabic">
مقدمة للمتغيرات في JavaScript وطرق التصريح عنها
</div>

### Variable Types

**أنواع التصريح عن المتغيرات**

```javascript
// let - block-scoped, can be reassigned
let changeable = "I can change";
changeable = "New value"; // Allowed

// const - block-scoped, cannot be reassigned
const constant = "I cannot change";
// constant = "New value"; // This would cause an error

// var - function-scoped (older method)
var oldStyle = "Legacy declaration";
```

<div class="arabic">
شرح الفروق بين let, const, و var في التصريح عن المتغيرات
</div>

## Topic 2: Data Types

<div class="arabic">
استكشاف الأنواع الأساسية للبيانات في JavaScript
</div>

### Primitive Data Types

```javascript
// String
let text = "Hello, World!";

// Number
let integer = 42;
let float = 3.14;

// Boolean
let isTrue = true;
let isFalse = false;

// Undefined
let undefinedVar;

// Null
let emptyValue = null;

// Checking types
console.log(typeof text);        // "string"
console.log(typeof integer);     // "number"
console.log(typeof isTrue);      // "boolean"
console.log(typeof undefinedVar);// "undefined"
```

<div class="arabic">
شرح الأنواع الأساسية للبيانات وكيفية التحقق من نوع المتغير
</div>

## Topic 3: Operators

<div class="arabic">
المشغلات الأساسية في JavaScript
</div>

### Arithmetic and Assignment Operators

```javascript
// Arithmetic Operators
let sum = 10 + 5;        // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5;    // Multiplication
let quotient = 10 / 5;   // Division
let remainder = 10 % 3;  // Modulus

// Assignment Operators
let x = 10;
x += 5;  // Equivalent to x = x + 5
x -= 3;  // Equivalent to x = x - 3
x *= 2;  // Equivalent to x = x * 2
```

<div class="arabic">
شرح المشغلات الحسابية وعمليات التعيين
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي لتطبيق المفاهيم المتعلمة في الجلسة
</div>

```javascript
// Exercise: Create a simple calculator function
function calculate(a, b) {
    // TODO: Implement basic arithmetic operations
    // 1. Use different data types
    // 2. Demonstrate type conversion
    // 3. Use various operators
}

// Example usage
console.log(calculate(5, 3));
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **Variable Declaration**: let, const, var
2. **Primitive Data Types**: string, number, boolean
3. **Type Checking**: typeof operator
4. **Arithmetic Operators**: +, -, *, /, %
5. **Assignment Operators**: =, +=, -=, *=

## Advanced: Type Conversion and Coercion

### Type Conversion Methods

| Method | Description | Example |
|--------|-------------|---------|
| String() | Convert to string | `String(42)` → `"42"` |
| Number() | Convert to number | `Number("42")` → `42` |
| Boolean() | Convert to boolean | `Boolean(1)` → `true` |
| .toString() | Convert to string | `(42).toString()` → `"42"` |

<div class="arabic">
طرق التحويل بين أنواع البيانات المختلفة في JavaScript
</div> 
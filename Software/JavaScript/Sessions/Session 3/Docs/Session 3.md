---
title: "Advanced JavaScript - Session 3: Control Flow (Conditionals)"
author: "Techno Software Instructor"
date: "2024"
---

## Topic 1: If Statements

<div class="arabic">
مقدمة للتحكم في تدفق البرنامج باستخدام الشروط
</div>

### Basic If Syntax

**الشروط البسيطة باستخدام if**

```javascript
// Simple if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}

// If-else statement
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

<div class="arabic">
شرح كيفية استخدام الشروط البسيطة والمركبة
</div>

## Topic 2: Else-If and Complex Conditions

<div class="arabic">
التعامل مع الشروط المتعددة والمعقدة
</div>

### Multiple Conditions

```javascript
let score = 75;

if (score >= 90) {
    console.log("Excellent grade: A");
} else if (score >= 80) {
    console.log("Very good grade: B");
} else if (score >= 70) {
    console.log("Good grade: C");
} else if (score >= 60) {
    console.log("Passing grade: D");
} else {
    console.log("Failing grade: F");
}

// Nested conditions
let temperature = 25;
let isRaining = false;

if (temperature > 30) {
    if (isRaining) {
        console.log("Hot and rainy");
    } else {
        console.log("Hot and dry");
    }
} else {
    console.log("Moderate temperature");
}
```

<div class="arabic">
التعامل مع الشروط المتعددة والمتداخلة
</div>

## Topic 3: Truthy and Falsy Values

<div class="arabic">
فهم القيم الصادقة والكاذبة في JavaScript
</div>

```javascript
// Falsy values
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

// Truthy values
console.log(Boolean(1));        // true
console.log(Boolean("hello"));  // true
console.log(Boolean({}));       // true
console.log(Boolean([]));       // true

// Practical example
function checkValue(value) {
    if (value) {
        console.log("Value is truthy");
    } else {
        console.log("Value is falsy");
    }
}

checkValue(42);      // Truthy
checkValue("");      // Falsy
checkValue(null);    // Falsy
```

<div class="arabic">
شرح مفهوم القيم الصادقة والكاذبة وكيفية استخدامها في الشروط
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي لتطبيق الشروط والتحكم في تدفق البرنامج
</div>

```javascript
// Exercise: Create a grade classification system
function classifyGrade(score) {
    // TODO: Implement grade classification
    // Use if-else or switch to categorize scores
    // Consider edge cases and provide detailed feedback
}

// Example usage
console.log(classifyGrade(85));
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **If Statements**: Basic conditional logic
2. **Else-If Chains**: Multiple condition handling
3. **Nested Conditions**: Complex decision making
4. **Truthy and Falsy Values**: Implicit type conversion
5. **Conditional Operators**: Comparison and logical operators

## Advanced: Ternary Operator

### Conditional (Ternary) Operator

| Syntax | Description | Example |
|--------|-------------|---------|
| condition ? trueValue : falseValue | Shorthand if-else | `let result = age >= 18 ? "Adult" : "Minor"` |
| Nested Ternary | Chained conditions | `let status = score >= 90 ? "Excellent" : score >= 70 ? "Good" : "Average"` |

<div class="arabic">
المشغل الشرطي (Ternary) كبديل مختصر للشروط التقليدية
</div> 
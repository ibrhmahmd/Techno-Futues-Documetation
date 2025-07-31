---
title: "JavaScript Introduction & Basic Syntax - Session 1"
author: "---"
date: "2025"
---

## Topic 1: JavaScript Integration Methods

<div class="arabic">
طرق دمج جافاسكريبت في صفحات الويب
</div>

### Subtopic 1

**شرح طرق دمج جافاسكريبت (داخل الوسم <script>، ملف خارجي، سطر واحد)**

```javascript
// Inline script
console.log('Hello from inline script!');
```

<div class="arabic">
مثال على كود جافاسكريبت مدمج داخل صفحة HTML
</div>

---

### Subtopic 2

**شرح الفرق بين دمج الكود في <head> و <body> وتأثيره على التنفيذ**

```javascript
// External script
// <script src="script.js"></script>
```

<div class="arabic">
شرح متى يفضل وضع السكريبت في <head> أو <body>
</div>

## Topic 2: Basic Syntax & Console Output

<div class="arabic">
شرح أساسيات كتابة الكود في جافاسكريبت وطباعة النتائج
</div>

```javascript
// Basic syntax
let message = "Hello, JavaScript!";
console.log(message); // Output: Hello, JavaScript!
```

<div class="arabic">
شرح تفصيلي للكود والمفاهيم المستخدمة
</div>

## Topic 3: Comments in JavaScript

<div class="arabic">
كيفية كتابة التعليقات في جافاسكريبت
</div>

```javascript
// This is a single-line comment
/* This is a
   multi-line comment */
```

<div class="arabic">
شرح أهمية التعليقات في الكود
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: اكتب كود يطبع اسمك في الكونسول
</div>

```javascript
// Exercise skeleton code
function printName() {
  // اكتب اسمك هنا
  console.log("[اسمك]");
}

// Example usage
printName();
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **JavaScript Integration**: Inline, internal, and external scripts
2. **Basic Syntax**: Statements, semicolons, case sensitivity
3. **Console Output**: Using console.log
4. **Comments**: Single-line and multi-line

## Advanced: Additional Information

### Best Practices for Script Placement

<div class="arabic">
أفضل الممارسات لوضع السكريبت في صفحات الويب
</div>

| Feature | <head> | <body> | External |
|---------|--------|--------|----------|
| Execution | Before content | After content | Separate file |
| Use case | Libraries | Main logic | Reusability |
| Performance | May block | Non-blocking | Cached |

<div class="arabic">
شرح تفصيلي للجدول والمعلومات المتقدمة
</div>
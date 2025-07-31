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

**[إدراج جافاسكريبت داخل ملف HTML]**

```html
<!-- Inline JavaScript -->
<script>
  alert('Hello, JavaScript!');
</script>
```

<div class="arabic">
يمكنك كتابة كود جافاسكريبت مباشرة داخل وسم <script> في ملف HTML.
</div>

---

### Subtopic 2

**[ربط ملف جافاسكريبت خارجي]**

```html
<!-- External JavaScript -->
<script src="script.js"></script>
```

<div class="arabic">
يفضل وضع كود جافاسكريبت في ملف منفصل وربطه باستخدام src.
</div>

## Topic 2: Basic Syntax & Console Output

<div class="arabic">
أساسيات كتابة الكود وإخراج النتائج في الكونسول
</div>

```javascript
// Basic output
console.log('Hello, world!'); // Output: Hello, world!
```

<div class="arabic">
استخدم console.log لطباعة النتائج في الكونسول.
</div>

## Topic 3: Comments in JavaScript

<div class="arabic">
كتابة التعليقات في كود جافاسكريبت
</div>

```javascript
// This is a single-line comment
/* This is a
   multi-line comment */
```

<div class="arabic">
التعليقات تساعد في توضيح الكود ولا يتم تنفيذها.
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: اكتب كود يطبع اسمك في الكونسول.
</div>

```javascript
// Exercise
console.log('اكتب اسمك هنا');
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **JavaScript Integration**: Inline & external scripts
2. **Basic Syntax**: Statements, semicolons
3. **Console Output**: Using console.log
4. **Comments**: Single-line & multi-line

## Advanced: Script Placement

### Where to Place <script> Tags

<div class="arabic">
أفضل أماكن وضع وسم <script> في الصفحة
</div>

| Placement | Pros | Cons |
|-----------|------|------|
| <head>    | Loads early | May block rendering |
| End of <body> | Page loads first | Scripts run after HTML |

<div class="arabic">
يفضل وضع السكريبت في نهاية <body> لتحسين سرعة تحميل الصفحة.
</div>
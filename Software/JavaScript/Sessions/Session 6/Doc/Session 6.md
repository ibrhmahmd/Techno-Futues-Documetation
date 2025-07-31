---
title: "Objects & Basic DOM Manipulation - Session 6"
author: "---"
date: "2025"
---

## Topic 1: Object Creation

<div class="arabic">
إنشاء الكائنات في جافاسكريبت
</div>

### Subtopic 1

**[تعريف كائن وخصائصه]**

```javascript
let person = {
  name: "Sara",
  age: 22,
  isStudent: true
};
console.log(person);
```

<div class="arabic">
الكائن يحتوي على خصائص وقيم.
</div>

---

### Subtopic 2

**[إضافة وتعديل وحذف الخصائص]**

```javascript
person.city = "Cairo";
person.age = 23;
delete person.isStudent;
console.log(person);
```

<div class="arabic">
يمكنك إضافة أو تعديل أو حذف خصائص الكائن بسهولة.
</div>

## Topic 2: Object Methods

<div class="arabic">
الدوال داخل الكائنات
</div>

```javascript
person.greet = function() {
  return "Hello, " + this.name;
};
console.log(person.greet());
```

<div class="arabic">
يمكنك إضافة دوال (methods) للكائنات.
</div>

## Topic 3: DOM Selection

<div class="arabic">
اختيار عناصر الصفحة (DOM)
</div>

```javascript
let heading = document.getElementById("main-title");
console.log(heading.textContent);
```

<div class="arabic">
يمكنك استخدام getElementById أو querySelector لاختيار العناصر.
</div>

## Topic 4: Basic DOM Manipulation

<div class="arabic">
تعديل عناصر الصفحة
</div>

```javascript
heading.textContent = "New Title";
```

<div class="arabic">
يمكنك تغيير نص أو خصائص العناصر بسهولة.
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: أنشئ كائن يمثل كتاباً واطبع عنوانه.
</div>

```javascript
let book = { title: "JavaScript Basics", author: "A. Smith" };
console.log(book.title);
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **Object Creation**: Properties and values
2. **Object Methods**: Functions inside objects
3. **DOM Selection**: getElementById, querySelector
4. **DOM Manipulation**: Changing content

## Advanced: Dynamic Property Access

### Bracket Notation

<div class="arabic">
الوصول للخصائص باستخدام الأقواس
</div>

| Syntax | Example |
|--------|---------|
| obj["key"] | person["name"] |
| obj[keyVar] | person[varName] |

<div class="arabic">
تسمح الأقواس بالوصول الديناميكي للخصائص.
</div>
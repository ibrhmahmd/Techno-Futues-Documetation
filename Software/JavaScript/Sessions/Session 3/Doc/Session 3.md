---
title: "Control Flow (Conditionals) - Session 3"
author: "---"
date: "2025"
---

## Topic 1: If Statements

<div class="arabic">
استخدام جمل if للتحكم في تدفق البرنامج
</div>

### Subtopic 1

**[جملة if الأساسية]**

```javascript
let score = 80;
if (score >= 60) {
  console.log("ناجح");
} else {
  console.log("راسب");
}
```

<div class="arabic">
تستخدم if للتحقق من شرط وتنفيذ كود بناءً على النتيجة.
</div>

---

### Subtopic 2

**[جملة else if]**

```javascript
let grade = 85;
if (grade >= 90) {
  console.log("ممتاز");
} else if (grade >= 75) {
  console.log("جيد جداً");
} else {
  console.log("جيد");
}
```

<div class="arabic">
else if تسمح بفحص شروط متعددة.
</div>

## Topic 2: Switch Statements

<div class="arabic">
استخدام switch لاختبار عدة حالات
</div>

```javascript
let day = 3;
switch(day) {
  case 1:
    console.log("الأحد");
    break;
  case 2:
    console.log("الاثنين");
    break;
  case 3:
    console.log("الثلاثاء");
    break;
  default:
    console.log("يوم غير معروف");
}
```

<div class="arabic">
تستخدم switch لاختبار قيمة متغير مقابل عدة احتمالات.
</div>

## Topic 3: Ternary Operator

<div class="arabic">
المعامل الثلاثي لاختصار الشروط البسيطة
</div>

```javascript
let age = 18;
let status = (age >= 18) ? "بالغ" : "قاصر";
console.log(status);
```

<div class="arabic">
المعامل الثلاثي بديل مختصر لجملة if البسيطة.
</div>

## Topic 4: Truthy and Falsy Values

<div class="arabic">
القيم التي تعتبر صحيحة أو خاطئة في الشروط
</div>

```javascript
if ("") console.log("Truthy"); else console.log("Falsy"); // Falsy
if (0) console.log("Truthy"); else console.log("Falsy"); // Falsy
if ("hello") console.log("Truthy"); // Truthy
```

<div class="arabic">
بعض القيم مثل 0 و "" و null تعتبر Falsy، والباقي Truthy.
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: اكتب كود يحدد إذا كان الرقم موجب أو سالب أو صفر.
</div>

```javascript
let num = -5;
if (num > 0) {
  console.log("موجب");
} else if (num < 0) {
  console.log("سالب");
} else {
  console.log("صفر");
}
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **If Statements**: Basic and nested
2. **Switch Statements**: Multiple cases
3. **Ternary Operator**: Short conditional
4. **Truthy/Falsy**: Conditional evaluation

## Advanced: Nested Conditionals

### Combining Multiple Conditions

<div class="arabic">
دمج أكثر من شرط باستخدام && و ||
</div>

| Operator | Description | Example |
|----------|-------------|---------|
| &&       | و (AND)     | a > 0 && b > 0 |
| ||       | أو (OR)     | a > 0 || b > 0 |

<div class="arabic">
استخدم && و || لكتابة شروط مركبة.
</div>
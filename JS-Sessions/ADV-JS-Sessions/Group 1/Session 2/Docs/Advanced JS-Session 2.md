---
title: "Advanced JavaScript - Session 2"
author: "---"
date: "2025"
---

## Topic 1: Complex Conditional Patterns

<div class="arabic">
أنماط الشروط المتقدمة في جافاسكريبت
</div>

### Switch Statement

**[جملة التبديل]**

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("بداية الأسبوع");
        break;
    case "Friday":
        console.log("نهاية الأسبوع");
        break;
    default:
        console.log("أيام الأسبوع العادية");
}
```

<div class="arabic">
جملة switch تستخدم عندما نريد مقارنة قيمة واحدة بعدة قيم مختلفة. أكثر تنظيماً من استخدام عدة if/else
</div>

## Topic 2: Loops in JavaScript

<div class="arabic">
الحلقات التكرارية في جافاسكريبت
</div>

### While Loop

**[while loop]**

```javascript
let count = 1;

while (count <= 5) {
    console.log("العداد: " + count);
    count++;
}
```

<div class="arabic">
حلقة while تستمر في التنفيذ طالما الشرط صحيح. يجب تغيير قيمة الشرط داخل الحلقة لتجنب الحلقات اللانهائية
</div>

### For Loop

**[for loop ]**

```javascript
for (let i = 0; i < 5; i++) {
    console.log("الدورة رقم: " + i);
}
```

<div class="arabic">
حلقة for هي طريقة أكثر اختصاراً لكتابة الحلقات التكرارية. تتكون من ثلاثة أجزاء: التهيئة، الشرط، والتحديث
</div>

### Loop Control

**[التحكم في الloops ]**

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // تخطي الرقم 5
    }
    if (i === 8) {
        break; // الخروج من الحلقة عند الوصول للرقم 8
    }
    console.log(i);
}
```

<div class="arabic">
يمكننا استخدام break للخروج من الحلقة، و continue لتخطي الدورة الحالية والانتقال للدورة التالية
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: طباعة جدول الضرب
</div>

```javascript
// طباعة جدول ضرب الرقم 5
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " × " + i + " = " + (number * i));
}
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها
</div>

1. **جملة switch**: طريقة منظمة للتحقق من عدة قيم
2. **while**: تنفيذ كود بشكل متكرر طالما الشرط صحيح
3. **for**: تنفيذ كود لعدد محدد من المرات
4. **التحكم في الحلقات**: استخدام break و continue للتحكم في سير الحلقات

## Advanced: Function Scope

### Understanding Scope

<div class="arabic">
فهم نطاق الدوال
</div>

| Type   | Description                | Example                      |
| ------ | -------------------------- | ---------------------------- |
| Global | متغير متاح في كل مكان      | `let x = 5;`                 |
| Local  | متغير متاح فقط داخل الدالة | `function() { let y = 10; }` |
| Block  | متغير متاح فقط داخل الكتلة | `{ let z = 15; }`            |

<div class="arabic">
نطاق المتغير يحدد أين يمكن استخدامه. المتغيرات العامة متاحة في كل مكان، بينما المتغيرات المحلية متاحة فقط داخل الدالة التي تم تعريفها فيها
</div> 
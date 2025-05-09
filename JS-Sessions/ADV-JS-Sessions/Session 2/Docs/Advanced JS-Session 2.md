---
title: "Advanced JavaScript - Session 2"
author: "---"
date: "2025"
---

## Topic 1: Complex Conditional Patterns

<div class="arabic">
أنماط الشروط المتقدمة في جافاسكريبت
</div>

### Nested If Statements

**[الشروط المتداخلة]**

```javascript
let age = 15;
let hasPermission = true;

if (age >= 13) {
    if (hasPermission) {
        console.log("يمكنك الوصول للمحتوى");
    } else {
        console.log("تحتاج إذن الوالدين");
    }
} else {
    console.log("عذراً، العمر غير مناسب");
}
```

<div class="arabic">
في هذا المثال، نستخدم شروط متداخلة للتحقق من العمر والإذن. الشروط المتداخلة تساعدنا في اتخاذ قرارات أكثر تعقيداً
</div>

---

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

## Topic 2: Logical Operators

<div class="arabic">
المعاملات المنطقية في جافاسكريبت
</div>

```javascript
let age = 15;
let hasMoney = true;

// AND operator (&&)
if (age >= 13 && hasMoney) {
    console.log("يمكنك شراء التذكرة");
}

// OR operator (||)
if (age < 13 || age > 65) {
    console.log("تذكرة مجانية");
}

// NOT operator (!)
if (!hasMoney) {
    console.log("عذراً، تحتاج للمال");
}
```

<div class="arabic">
المعاملات المنطقية تساعدنا في دمج عدة شروط معاً. && تعني "و"، || تعني "أو"، ! تعني "ليس"
</div>

## Topic 3: Functions Deep Dive

<div class="arabic">
تعمق في الدوال
</div>

### Function Declarations

**[تعريف الدوال]**

```javascript
// Function Declaration
function greet(name) {
    return "مرحباً " + name;
}

// Function Expression
let greet2 = function(name) {
    return "أهلاً " + name;
};

// Arrow Function
let greet3 = (name) => "هاي " + name;

console.log(greet("أحمد"));    // Output: مرحباً أحمد
console.log(greet2("محمد"));   // Output: أهلاً محمد
console.log(greet3("علي"));    // Output: هاي علي
```

<div class="arabic">
هناك عدة طرق لتعريف الدوال في جافاسكريبت. كل طريقة لها استخداماتها الخاصة
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: بناء لعبة تخمين الرقم
</div>

```javascript
function guessNumber() {
    let secretNumber = 7;
    let guess = prompt("اختر رقماً من 1 إلى 10");
    
    if (guess == secretNumber) {
        alert("أحسنت! لقد فزت!");
    } else if (guess < secretNumber) {
        alert("الرقم أكبر من ذلك");
    } else {
        alert("الرقم أصغر من ذلك");
    }
}

// لتشغيل اللعبة
guessNumber();
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **الشروط المتداخلة**: استخدام if داخل if للتحقق من شروط متعددة
2. **جملة switch**: طريقة منظمة للتحقق من عدة قيم
3. **المعاملات المنطقية**: استخدام && و || و ! للتحكم في الشروط
4. **أنواع الدوال**: Function Declaration و Function Expression و Arrow Function
5. **المعاملات**: كيفية تمرير البيانات للدوال

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
---
title: "Advanced JavaScript - Session 6"
author: "---"
date: "2025"
---

 
## Introduction

In this session, we learned how to create images, handle CSS classes, and work with attributes using JavaScript.

<div class="arabic">
في السيشن دي، اتعلمنا إزاي نعمل صورة بالجافاسكريبت، ونتحكم في الكلاسات، ونتعامل مع الخصائص (attributes) بطريقة بسيطة وسهلة.
</div>

## Topic 1: Creating an Image with JavaScript

You can create an image element and add it to the page using `createElement` and `appendChild`.

```javascript
// HTML: <button id="showImgBtn">Show Image</button>
//        <div id="imgContainer"></div>

document.getElementById('showImgBtn').addEventListener('click', function() {
  let img = document.createElement('img');
  img.src = 'https://via.placeholder.com/150';
  img.alt = 'Demo Image';
  document.getElementById('imgContainer').appendChild(img);
});
```

This code creates an image and puts it inside the div when you click the button.

<div class="arabic">
تقدر تعمل صورة بالجافاسكريبت وتحطها في الصفحة. الكود ده بيضيف صورة جوه الديف لما تدوس على الزرار.
</div>

## Topic 2: Handling CSS Classes in JavaScript

### Using `classList`
You can add, remove, or toggle a class on any element using `classList`.

```javascript
// HTML: <button id="colorBtn">Change Color</button>

document.getElementById('colorBtn').addEventListener('click', function() {
  this.classList.toggle('red');
});
```

- `add('class')` — يضيف كلاس جديد
- `remove('class')` — يشيل كلاس
- `toggle('class')` — يضيف أو يشيل الكلاس حسب وجوده
- `contains('class')` — يشوف لو الكلاس موجود ولا لأ

<div class="arabic">
تقدر تضيف أو تشيل أو تبدل كلاس لأي عنصر باستخدام classList. الكود ده بيخلي الزرار ياخد كلاس "red" كل ما تدوس عليه. ولو عايز تشيل كلاس أو تضيف أكتر من كلاس، استخدم add/remove/toggle.
</div>

### Directly Setting All Classes
You can also set all classes at once using `className`:

```javascript
let btn = document.getElementById('myBtn');
btn.className = 'active big-btn'; // كل الكلاسات القديمة بتتشال ويتحط اللي انت كتبته بس
```

<div class="arabic">
ممكن تكتب كل الكلاسات مرة واحدة كده: <code>btn.className = 'active big-btn';</code> ده هيمسح أي كلاس قديم ويحط اللي انت كتبته بس.
</div>

## Topic 3: Attribute Manipulation

You can get, set, or remove attributes using `getAttribute`, `setAttribute`, and `removeAttribute`.

```javascript
// HTML: <button id="disableBtn">Disable Me</button>

document.getElementById('disableBtn').addEventListener('click', function() {
  this.setAttribute('disabled', 'true');
  this.textContent = 'Disabled';
});
```

This code disables the button and changes its text when you click it.

<div class="arabic">
ممكن تغير أو تضيف أو تشيل أي خاصية (attribute) للعنصر. هنا لما تدوس على الزرار، بيتقفل وبيغير كلامه.
</div>

---

## Key Concepts Covered

<div class="arabic">
الحاجات المهمة اللي اتعلمناها في السيشن:
</div>

1. **createElement**: إزاي تعمل عنصر جديد زي الصورة
2. **classList & className**: إزاي تضيف أو تشيل كلاس من العنصر أو تغير كل الكلاسات مرة واحدة
3. **setAttribute**: إزاي تغير أو تضيف خاصية للعنصر

</rewritten_file>

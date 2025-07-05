---
title: "Advanced JavaScript - Session 7"
author: "---"
date: "2025"
---

## Introduction

In this session, we learned how to use events to change element styles with classes, got a simple intro to DOM traversal, and combined both in a small demo.

<div class="arabic">
في السيشن دي، اتعلمنا إزاي نستخدم الأحداث (events) عشان نغير شكل العناصر بالكلاسات، وخدنا فكرة بسيطة عن التنقل بين عناصر الصفحة (DOM traversal)، وجربنا ندمج اللي اتعلمناه في مثال عملي صغير.
</div>

## Topic 1: Event Handling to Manipulate Styles with Classes

You can use event listeners to add, remove, or toggle classes and change how elements look when users interact with them.

```javascript
// HTML: <button id="highlightBtn">Highlight Box</button>
//        <div id="myBox">أنا بوكس</div>

document.getElementById('highlightBtn').addEventListener('click', function() {
  document.getElementById('myBox').classList.toggle('highlight');
});
```

This code toggles the 'highlight' class on the box when you click the button.

<div class="arabic">
تقدر تضيف أو تشيل كلاس للعناصر لما المستخدم يتفاعل معاها. هنا لما تدوس على الزرار، البوكس بياخد كلاس "highlight" أو يتشال منه.
</div>

## Topic 2: DOM Traversal (Intro & Simple Demo)

DOM traversal means moving between elements in the page, like من الأب للابن أو من الأخ للأخ (parent, child, sibling).

```javascript
// HTML: <ul id="myList">
//   <li>واحد</li>
//   <li>اتنين</li>
//   <li>تلاتة</li>
// </ul>
// <button id="nextBtn">لون اللي بعده</button>

const list = document.getElementById('myList');
const nextBtn = document.getElementById('nextBtn');
let current = list.firstElementChild;

nextBtn.addEventListener('click', function() {
  if (current) {
    current.classList.remove('selected');
    current = current.nextElementSibling || list.firstElementChild;
    current.classList.add('selected');
  }
});
```

This code moves the highlight to the next list item every time you click the button.

<div class="arabic">
DOM traversal يعني تعرف تتنقل بين العناصر في الصفحة. هنا كل ما تدوس على الزرار، العنصر اللي عليه الدور بيتلون.
</div>

## Topic 3: Mini Project – Combine Events & Traversal

Let's combine what we learned: Click a list item to highlight it and its next sibling.

```javascript
// HTML: <ul id="miniList">
//   <li>أ</li>
//   <li>ب</li>
//   <li>ج</li>
// </ul>

document.querySelectorAll('#miniList li').forEach(function(item) {
  item.addEventListener('click', function() {
    // شيل الكلاس من الكل
    document.querySelectorAll('#miniList li').forEach(li => li.classList.remove('selected'));
    // ضيف الكلاس على العنصر اللي اتداس عليه
    this.classList.add('selected');
    // ولو فيه أخ بعده، ضيف له كلاس كمان
    if (this.nextElementSibling) {
      this.nextElementSibling.classList.add('next-selected');
    }
  });
});
```

This code highlights the clicked item and its next sibling.

<div class="arabic">
في المشروع الصغير ده، لما تدوس على عنصر في الليست، هو وأخوه اللي بعده بيتلونوا.
</div>

---

## Key Concepts Covered

<div class="arabic">
الحاجات المهمة اللي اتعلمناها في السيشن:
</div>

1. **Event Handling**: إزاي تتعامل مع الأحداث وتغير شكل العناصر بالكلاسات
2. **DOM Traversal**: فكرة بسيطة عن التنقل بين عناصر الصفحة
3. **دمج اللي اتعلمناه**: مثال عملي بيجمع الأحداث والتنقل بين العناصر

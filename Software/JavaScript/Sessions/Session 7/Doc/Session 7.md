---
title: "Events & Event Handling - Session 7"
author: "---"
date: "2025"
---

## Topic 1: Event Types

<div class="arabic">
أنواع الأحداث في جافاسكريبت
</div>

### Subtopic 1

**[أحداث النقر والتمرير]**

```javascript
document.getElementById("btn").onclick = function() {
  alert("Button clicked!");
};
```

<div class="arabic">
أشهر الأحداث: click, mouseover, keydown.
</div>

---

### Subtopic 2

**[إضافة حدث باستخدام addEventListener]**

```javascript
let box = document.getElementById("box");
box.addEventListener("mouseover", function() {
  box.style.background = "yellow";
});
```

<div class="arabic">
addEventListener يتيح إضافة أكثر من حدث لنفس العنصر.
</div>

## Topic 2: Event Object

<div class="arabic">
كائن الحدث ومعلوماته
</div>

```javascript
document.addEventListener("keydown", function(event) {
  console.log(event.key);
});
```

<div class="arabic">
كائن الحدث يحتوي على معلومات عن الحدث (مثل المفتاح المضغوط).
</div>

## Topic 3: Event Delegation

<div class="arabic">
تفويض الأحداث لعناصر متعددة
</div>

```javascript
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    alert("Item: " + e.target.textContent);
  }
});
```

<div class="arabic">
تفويض الأحداث يسمح بإدارة أحداث عناصر كثيرة بكود واحد.
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: أضف حدث نقر لزر يغير لون خلفية الصفحة.
</div>

```javascript
document.getElementById("colorBtn").onclick = function() {
  document.body.style.background = "#e0ffe0";
};
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **Event Types**: click, mouseover, keydown
2. **addEventListener**: Attaching events
3. **Event Object**: Accessing event data
4. **Event Delegation**: Efficient event handling

## Advanced: Removing Event Listeners

### removeEventListener

<div class="arabic">
إزالة الأحداث من العناصر
</div>

| Method | Usage |
|--------|-------|
| removeEventListener | elem.removeEventListener("click", handler) |

<div class="arabic">
يمكنك إزالة الحدث عند عدم الحاجة إليه لتحسين الأداء.
</div>
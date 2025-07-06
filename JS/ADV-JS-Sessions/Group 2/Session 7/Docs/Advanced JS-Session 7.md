---
title: "Advanced JavaScript - Session 7"
author: "---"
date: "2025"
---

## Introduction

In this session, we explored essential DOM-manipulation skills: defining and calling JavaScript **functions**, adding, removing, and toggling CSS classes with `classList`, and wiring everything together with `addEventListener`.

<div class="arabic">
في السيشن دي، اتعلمنا أساسيات مهمة في الـ DOM: إزاي نكتب ونستخدم الـ **functions** في جافاسكريبت، وإزاي نضيف ونشيل ونقلب (toggle) الكلاسات باستخدام `classList`، وكمان إزاي نربط الأحداث بـ `addEventListener`.
</div>

## Topic 1: Functions (Declaration vs Expression)

Functions group reusable code. Two common ways to create them are **function declarations** and **function expressions**.

```javascript
// Function Declaration
function greet(name) {
  console.log('Hello', name);
}

// Function Expression (stored in a variable)
const greetExp = function (name) {
  console.log('Hello', name);
};
```

<div class="arabic">
الـ Function Declarations بتتكتب بكلمة `function` في أول السطر وبتتـHoist، أما الـ Function Expressions بتتخزن في متغيّر ومش بتتـHoist بنفس الشكل.
</div>

## Topic 2: classList.add

`element.classList.add('className')` adds a class to the element.

```javascript
myBox.classList.add('highlight');
```

<div class="arabic">
`add` بتضيف كلاس للعُنصر لو مش موجود.
</div>

## Topic 3: classList.remove

`element.classList.remove('className')` removes a class if it exists.

```javascript
myBox.classList.remove('highlight');
```

<div class="arabic">
`remove` بتشيل الكلاس لو كان موجود.
</div>

## Topic 4: classList.toggle

`element.classList.toggle('className')` adds the class if it isn’t there or removes it if it is — perfect for switches.

```javascript
myBox.classList.toggle('highlight'); // يضيف أو يشيل على حسب الحالة الحالية
```

<div class="arabic">
`toggle` مفيدة لو عايز تفتح/تقفل مود معيّن بكليك واحدة.
</div>

## Topic 5: addEventListener

`addEventListener` attaches a function that will run when a specific event fires.

```javascript
button.addEventListener('click', function () {
  console.log('Button clicked');
});
```

<div class="arabic">
`addEventListener` بتربط كودك بالحدث (زي click) عشان يتنفذ لما الحدث يحصل.
</div>

## Topic 6: Comparing Common Event Types

| Event | Fires When | Typical Elements | Bubbles? | Notes |
|-------|------------|------------------|----------|-------|
| click | User clicks (mouse or touch) | Buttons, links, any element | Yes | Default for most interactions |
| dblclick | User double-clicks | Same as click | Yes | Less common on mobile |
| mouseover | Pointer enters element | Any element | Yes | Handy for tooltips/menus |
| keydown | Key pressed down | Document, inputs | Yes | Good for keyboard shortcuts |
| submit | Form is submitted | `<form>` | Yes | Prevent with `event.preventDefault()` |
| input | User types/changes value | Inputs, textareas | Yes | Fires on every change |

<div class="arabic">
مقارنة بين أشهر الـ Events: `click`، `dblclick`، `mouseover`، `keydown`، `submit`، و`input`.
</div>

## Topic 7: Full Event Reference (Quick Cheat-Sheet)

Below is a non-exhaustive but **practical** catalogue of DOM events you can attach with `addEventListener`. Keep it handy when you build UI features.

| Category | Events |
|----------|--------|
| **Clipboard** | copy, cut, paste |
| **Composition / IME** | compositionstart, compositionupdate, compositionend |
| **Drag & Drop** | drag, dragstart, dragend, dragenter, dragleave, dragover, drop |
| **Focus** | focus, blur, focusin, focusout |
| **Form & Input** | input, change, submit, reset, invalid |
| **Keyboard** | keydown, keyup, keypress |
| **Mouse / Pointer** | click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave, mouseover, mouseout, contextmenu |
| **Pointer (touch / pen)** | pointerdown, pointerup, pointermove, pointerenter, pointerleave, pointerover, pointerout, pointercancel |
| **Touch** | touchstart, touchend, touchmove, touchcancel |
| **Wheel / Scroll** | wheel, scroll |
| **UI & View** | resize, scroll, load, unload, beforeunload, error |
| **Media** | play, pause, ended, volumechange, timeupdate, seeked, waiting |
| **Animation & Transition** | animationstart, animationend, animationiteration, transitionstart, transitionend, transitionrun |
| **Network** | online, offline |
| **Selection** | select, selectstart, selectionchange |
| **Storage & Data** | storage, beforeprint, afterprint |

<div class="arabic">
مرجع سريع لأشهر الأحداث اللي ممكن تستخدمها مع `addEventListener`.
</div>

## Task – Light Switch Button

Create a button that turns a "light bulb" on and off.

### Requirements
1. Use **only JavaScript** for logic.
2. Toggle a CSS class `.on` on a bulb element.
3. Attach a **click** event with `addEventListener`.
4. Use `classList.toggle` (or `.add()` / `.remove()`).
5. Bulb color changes: gray (off) ↔ yellow (on).

### Starter Template
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    #bulb {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: gray; /* Off */
      margin: 20px auto;
    }
    .on {
      background-color: yellow; /* On */
    }
  </style>
</head>
<body>

<div id="bulb"></div>
<button id="toggleBtn">Toggle Light</button>

<script>
  const bulb = document.getElementById('bulb');
  const btn  = document.getElementById('toggleBtn');

  btn.addEventListener('click', () => {
    bulb.classList.toggle('on');
  });
</script>

</body>
</html>
```

<div class="arabic">
مطلوب زر يفتح ويطفئ مصباحًا بسيطًا باستخدام `classList.toggle` وحدث `click`.
</div>

---


## Key Concepts Covered

<div class="arabic">
الحاجات المهمة اللي اتعلمناها في السيشن:
</div>

1. **Functions**
2. **classList.add / remove / toggle**
3. **addEventListener**
4. **أنواع الأحداث الشائعة & مرجع كامل للأحداث**

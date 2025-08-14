---
title: "Typography & Colors - Session 2"
author: "---"
date: "2025"
---

## Topic 1: Bootstrap Typography Utilities

<div class="arabic">
مقدمة عن فئات الطباعة في Bootstrap مثل `fs-1` إلى `fs-6`، `fw-bold`، وغيرها.
</div>

### Subtopic 1

**Understanding Font-Size & Weight**

```html
<h1 class="fs-1 fw-bold">Big Bold Heading</h1>
<p class="fs-5">Lead paragraph with larger text.</p>
```

<div class="arabic">
شرح تأثير حجم الخط والسمك على الانتباه والقراءة.
</div>

#### Font Size Utility Classes

| Class | Approx Size (rem) | Typical Element |
|-------|-------------------|-----------------|
| `fs-1` | 2.5 | Hero headings |
| `fs-2` | 2 | Section headings |
| `fs-3` | 1.75 | Sub-headings |
| `fs-4` | 1.5 | Paragraph titles |
| `fs-5` | 1.25 | Lead paragraphs |
| `fs-6` | 1 | Small text |

> Tip: Use responsive variants like `fs-lg-2` to change font size only on large screens.


---

### Subtopic 2

**Text Transform & Alignment**

```html
<p class="text-uppercase text-center">centered uppercase text</p>
```

<div class="arabic">
استخدام `text-center` لمحاذاة النص في المنتصف و`text-uppercase` لجعل النص كبير الحروف.
</div>

#### Text Transform & Alignment Classes

| Class | Effect | Responsive Variant |
|-------|--------|--------------------|
| `text-uppercase` | UPPERCASE text | `text-md-uppercase` |
| `text-lowercase` | lowercase text | `text-md-lowercase` |
| `text-capitalize` | Capitalize Words | `text-lg-capitalize` |
| `text-start` | Align start (LTR left) | `text-sm-start` |
| `text-center` | Center text | `text-sm-center` |
| `text-end` | Align end (LTR right) | `text-lg-end` |

---

## Topic 2: Color Psychology Basics

<div class="arabic">
مبادئ الألوان الدافئة والباردة وتأثيرها النفسي مع أمثلة عملية على استخدامها في واجهات المستخدم.
</div>

**Why Colours Matter?**

| Color Family | Common Emotions | Typical UI Usage |
|--------------|-----------------|------------------|
| **Red / Orange** (دافئة) | طاقة، حماس، إلحاح | أزرار الشراء، التنبيهات |
| **Yellow** | تفاؤل، وضوح | شارات التفاعل، التلميحات |
| **Blue / Green** (باردة) | ثقة، هدوء، نمو | لوحات المعلومات، تطبيقات مالية |
| **Purple** | إبداع، فخامة | خدمات مميزة، محتوى تعليمي |
| **Neutral** (أسود، أبيض، رمادي) | توازن، احترافية | خلفيات، نص أساسي |

<div class="arabic">
يوضح الجدول تأثير كل فئة لونية وكيفية تطبيقها في التصميم.
</div>

### Subtopic 1

**Bootstrap Text Colors**

```html
<p class="text-primary">Primary brand color</p>
<p class="text-danger">Warning / danger text</p>
```

<div class="arabic">
`text-primary` للون الأساسي، `text-danger` للتنبيه أو الخطأ.
</div>

### Subtopic 2

**Custom Accent Colors**

```css
.accent {
    color: #ff8800; /* custom orange */
}
```

---

## Topic 3: Visual Hierarchy

<div class="arabic">
كيفية ترتيب العناصر لجذب الانتباه باستخدام الحجم، اللون، والمسافة.
</div>

### Subtopic 1

**Hierarchy Example**

```html
<h1 class="fw-bold fs-2 text-primary mb-3">Company Vision</h1>
<p class="lead">We build innovative solutions...</p>
<p>Additional supporting text.</p>
```

---

## Topic 4: Dynamic Text with JavaScript

<div class="arabic">
تعديل محتوى النص ديناميكياً باستخدام الجافاسكريبت.
</div>

```javascript
// Array containing different facts to display
const facts = [
  'We started in 2020!',
  'Over 1M users worldwide.',
  'Award-winning design team.'
];

/**
 * Changes the displayed fact to a random one from the facts array
 * @returns {void}
 */
function changeFact() {
  // 1. Get reference to the paragraph element with id="fact"
  const factPara = document.getElementById('fact');
  
  // 2. Generate a random index number between 0 and array length
  const randomIndex = Math.floor(Math.random() * facts.length);
  
  // 3. Get a random fact from the array
  const randomFact = facts[randomIndex];
  
  // 4. Update the paragraph's text content with the random fact
  factPara.innerText = randomFact;
}
```

### How the Function Works:

1. **Array of Facts**: We start with an array called `facts` that stores different text strings we want to display.

2. **Function Definition**: `changeFact()` is called when the user clicks a button in the HTML.

3. **Element Selection**: 
   ```javascript
   const factPara = document.getElementById('fact');
   ```
   This line finds the HTML element with `id="fact"` (like a `<p>` or `<div>` tag) where we'll display our facts.

4. **Random Selection**:
   ```javascript
   Math.random() * facts.length  // Generates a random decimal between 0 and array length
   Math.floor()                  // Rounds down to nearest whole number
   ```
   This combination ensures we get a valid array index (0, 1, or 2 for 3 items).

5. **Update Display**: 
   ```javascript
   factPara.innerText = randomFact;
   ```
   This changes the text content of our target element to show the randomly selected fact.

### Example Usage in HTML:
```html
<p id="fact">Click the button to learn a fun fact!</p>
<button onclick="changeFact()">Show Random Fact</button>
```

---

## Practical Exercise

<div class="arabic">
تمرين عملي: صمِّم صفحة "About Us" تحتوي على عنوان بارز، فقرة تعريفية، واقتباس مميز، وزر يغيّر فقرة "حقائق ممتعة".
</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script defer src="main.js"></script>
</head>
<body class="p-4">
  <div class="container text-center">
    <h1 class="fw-bold text-primary mb-4">About Our Team</h1>
    <p class="lead">We love creating engaging web experiences.</p>
    <blockquote class="blockquote border-start border-3 ps-3 mb-4">
      <p class="mb-0">"Design is not just what it looks like and feels like. Design is how it works."</p>
    </blockquote>
    <p id="fact" class="fs-5 mb-3">Click the button to learn a fun fact!</p>
    <button class="btn btn-success" onclick="changeFact()">Surprise Fact</button>
  </div>
</body>
</html>
```

---

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تناولها في هذه الجلسة:
</div>

1. **Typography Utilities**: `fs-*`, `fw-*`, `text-*` classes
2. **Color Psychology**: تأثير الألوان على تجربة المستخدم
3. **Visual Hierarchy**: استخدام الحجم واللون والمسافة
4. **Dynamic Text**: تحديث DOM باستخدام الجافاسكريبت
5. **Practical Styling**: بناء صفحة "About Us" متجاوبة

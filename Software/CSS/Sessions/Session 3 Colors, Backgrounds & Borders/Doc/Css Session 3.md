---
title: "CSS - Session 3: Colors, Backgrounds & Borders"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---
## Topic 1: Working with Colors (العمل مع الألوان)

<div class="arabic">
تعلم كيفية استخدام وتطبيق الألوان في CSS بطرق مختلفة.
</div>

### Subtopic 1: Color Values (قيم الألوان)

- **Color Keywords** (الكلمات المفتاحية):
  ```css
  color: red;
  background-color: blue;
  ```

- **HEX Values** (قيم الست عشرية):
  ```css
  color: #ff0000;      /* Red */
  color: #00ff00;      /* Green */
  color: #0000ff;      /* Blue */
  color: #ff00ff;      /* Magenta */
  color: #ff000080;    /* Red with 50% opacity */
  ```

- **RGB/RGBA Values** (قيم RGB):
  ```css
  color: rgb(255, 0, 0);        /* Red */
  color: rgba(0, 128, 0, 0.5);  /* Green with 50% opacity */
  ```

- **HSL/HSLA Values** (قيم HSL):
  ```css
  color: hsl(0, 100%, 50%);     /* Red */
  color: hsla(120, 100%, 50%, 0.3); /* Green with 30% opacity */
  ```

### Subtopic 2: Color Tools (أدوات الألوان)

- Using browser DevTools color picker
- Online color pickers and generators
- Color contrast checkers for accessibility

---

## Topic 2: Background Properties (خصائص الخلفية)

### Subtopic 1: Background Basics (أساسيات الخلفية)

- `background-color` (لون الخلفية)
- `background-image` (صورة الخلفية)
- `background-repeat` (تكرار الخلفية)
- `background-position` (موضع الخلفية)
- `background-size` (حجم الخلفية)
- Shorthand `background` property

### Subtopic 2: Background Examples (أمثلة على الخلفيات)

```css
/* Solid color background */
.solid-bg {
  background-color: #f0f0f0;
}

/* Gradient background */
.gradient-bg {
  background: linear-gradient(to right, #ff9966, #ff5e62);
}

/* Image background */
.image-bg {
  background-image: url('pattern.png');
  background-size: cover;
  background-position: center;
}
```

---

## Topic 3: Borders & Effects (الحدود والتأثيرات)

### Subtopic 1: Border Properties (خصائص الحدود)

- `border-width` (سُمك الحدود)
- `border-style` (نمط الحدود)
- `border-color` (لون الحدود)
- Shorthand `border` property
- Individual borders (top, right, bottom, left)

### Subtopic 2: Border Radius & Shadows (زوايا وظلال الحدود)

- `border-radius` (تدوير الزوايا)
- `box-shadow` (إضافة ظل)
- `text-shadow` (ظل النص)

```css
.rounded-box {
  border: 2px solid #3498db;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
  padding: 20px;
  margin: 20px 0;
}
```

---

## Practical Exercise (تمرين عملي)

1. Create a color palette using different color formats
2. Design a card with gradient background and rounded corners
3. Add a subtle shadow effect to the card
4. Ensure proper contrast for text readability

## Homework (الواجب المنزلي)

1. Create a webpage that includes:
   - A header with a gradient background
   - Three cards with different background styles
   - Each card should have a border and shadow
   - Use at least 3 different color formats

2. Experiment with:
   - Opacity in colors
   - Multiple background images
   - Different border styles

## Resources (المراجع)
- [MDN Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- [CSS Gradient Generator](https://cssgradient.io/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Next Session Preview (معاينة الجلسة القادمة)

في الجلسة القادمة سنتعلم عن:
- خصائص الخطوط والنصوص
- تنسيق النصوص
- المسافات بين الأسطر والكلمات
- التأثيرات النصية

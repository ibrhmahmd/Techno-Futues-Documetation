# CSS Session 6 – Positioning & Holy Grail Layout

---
title: "CSS Positioning & Holy Grail Layout - Session 6"
author: "---"
date: "2025-08-23"
---

## Topic 1: CSS Positioning

<div class="arabic">
الموضوع يشرح كيفية تحريك العناصر والتحكم في مكانها باستخدام خصائص `position`. الأمثلة مأخوذة من الملف: [posistion.html]
</div>

### Subtopic 1: Values Overview
- static (الافتراضي) – العنصر يتم تنفيذه بطريقة طبيعية ويملأ المساحة
- relative – التمرير بالمنافس من المكان الافتراضي، ولكنه يملأ المساحة بالإضافة إلى ذلك
- absolute – التمرير بالمنافس من الأب أبطلة على الأب ذي المكان المحدد
- fixed – التثبيت على المشاهد مع التمرير في الصفحة
- sticky – تبديل بين المتقدم والمثبت بناءً على التمرير في الصفحة.

```css
/* from posistion.html */
.parent {
  position: relative;
  height: 150px;
  background: #f0f0f0;
  border: 1px dashed #bbb;
  border-radius: 15px;
  margin-bottom: 50px;
}

.child {
  position: absolute;
  top: 50px;
  right: 50px;
}
```

<div class="arabic">
- `absolute` يتمركز بالنسبة لأقرب أب لديه `position` غير `static` (هنا `.parent`).
- العنصر المطلق لا يحجز مساحة في التدفق الطبيعي.
</div>

### Subtopic 2: relative
```css
.relative {
  position: relative;
  left: 100px;
  top: 10px;
}
```
- Offsets adjust visual position.
- Space in flow is preserved.

<div class="arabic">
`relative` يحرك العنصر بصريًا فقط ويحافظ على مكانه في التخطيط.
</div>

### Subtopic 3: fixed
```css
.fixed {
  position: fixed;
  bottom: 12px;
  right: 12px;
}
```
- Anchored to viewport; does not scroll with content.

<div class="arabic">
`fixed` يظل ثابتًا عند التمرير (مثالي لأزرار العودة للأعلى).
</div>

### Subtopic 4: sticky
```css
.sticky {
  position: sticky;
  top: 12px;
}
```
- Behaves like relative until scroll reaches `top`, then sticks like fixed.

<div class="arabic">
`sticky` يبدأ عادي ثم يلتصق عند حافة الشاشة عندما نصل لموضعه.
</div>

---

## Topic 2: Holy Grail Layout (CSS Grid)

<div class="arabic">
التخطيط الكلاسيكي: رأس وتذييل بعرض كامل، مع ثلاثة أعمدة بالمنتصف. الأمثلة من `holy-grail.html`.
</div>

### Structure (HTML)
```html
<div class="page">
  <header class="site-header">Header</header>

  <div class="layout">
    <nav class="sidebar-left">...</nav>
    <main class="content">...</main>
    <aside class="sidebar-right">...</aside>
  </div>

  <footer class="site-footer">Footer</footer>
</div>
```

### Core CSS (mobile-first grid)
```css
.layout {
  display: grid;
  gap: var(--gap);
  padding: var(--gap);
  grid-template-columns: 1fr; /* mobile: single column */
}

/* Desktop: three columns */
@media (min-width: 900px) {
  .layout {
    grid-template-columns: var(--sidebar) 1fr var(--sidebar);
    grid-template-areas: "left content right";
  }
  .sidebar-left  { grid-area: left; }
  .content       { grid-area: content; }
  .sidebar-right { grid-area: right; }
}
```

### Sticky Header
```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 1;
}
```

<div class="arabic">
- التصميم يبدأ بعمود واحد على الشاشات الصغيرة، ثم يتحول لثلاثة أعمدة عند 900px.
- رأس الصفحة ثابت بالأعلى باستخدام `position: sticky`.
</div>

---

## Practical Exercise

<div class="arabic">
طبّق ما تعلمته:
</div>

1. أنشئ حاوية `.page` برأس وتذييل.
2. ابنِ `.layout` بـ Grid:
   - موبايل: عمود واحد.
   - سطح المكتب: ثلاثة أعمدة (`nav | main | aside`) مع Areas.
3. اجعل الرأس Sticky.
4. أضف عنصرًا `.fixed` أسفل يمين الشاشة (زر مراسلة مثلًا).
5. داخل قسم تجريبي، أنشئ `.parent` نسبي وطفل `.child` مطلق مع `top/right`.

---

## Key Concepts Covered

<div class="arabic">
ملخص:
</div>

1. relative vs absolute vs fixed vs sticky
2. containing block للأب النسبي مع الابن المطلق
3. sticky header behavior with scroll
4. CSS Grid mobile-first, ثم Media Query لثلاثة أعمدة
5. grid areas لتسمية المناطق

---

## Resources
- MDN: position — https://developer.mozilla.org/en-US/docs/Web/CSS/position
- MDN: CSS Grid — https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- CSS-Tricks: Holy Grail Layout — https://css-tricks.com/the-holy-grail-layout-reinvented-with-css-grid/

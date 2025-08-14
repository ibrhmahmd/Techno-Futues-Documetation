---
title: "Project Layout Basics - Session 1"
author: "Youssef Hussain"
date: "2025-08-09"
---

## Topic 1: Page Skeleton with HTML

<div class="arabic">
مقدمة حول كيفية إنشاء هيكل صفحة ويب باستخدام عناصر ‎HTML‎ الدلالية.
</div>

### Subtopic 1

**العناوين و رؤوس الصفحات (header)**

```html
<header class="header">
  <h1>Youssef Project</h1>
</header>
```

<div class="arabic">
يوضح المثال كيفية استخدام عنصر ‎`<header>`‎ لعرض عنوان الموقع مع إمكانية تنسيقه عبر ‎CSS‎.
</div>

---

### Subtopic 2

**القسم الرئيسي (main) و العناصر الداخلية**

```html
<main class="main-section">
  <div class="car-box">
    <h1>BMW</h1>
    <img src="images/BMW.jpg" width="250" height="120">
  </div>
  ...
</main>
```

<div class="arabic">
يمثل ‎`<main>`‎ المحتوى الأساسي مع تقسيمه إلى مربعات سيارات لاستخدامها لاحقًا في المشروع.
</div>

## Topic 2: Styling with CSS

<div class="arabic">
مقدمة سريعة عن ربط ملف ‎CSS‎ و اختيار العناصر.
</div>

```css
.header {
  border: 5px solid black;
  background-color: red;
  text-align: center;
}
```

<div class="arabic">
تم ضبط حدود، لون خلفية و محاذاة نص العنوان ضمن ترويسة الصفحة.
</div>

## Topic 3: Flexbox Layout

<div class="arabic">
شرح استخدام Flexbox لتقسيم العناصر أفقياً.
</div>

```css
.main-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
```

<div class="arabic">
Flexbox يسهل ترتيب المربعات داخل القسم الرئيسي بشكل مرن مع توزيع متساوٍ للمسافات.
</div>

## Practical Exercise

<div class="arabic">
قم ببناء صفحة سيارات جديدة تضيف 3 مركبات أخرى مع صورها و ألوان مختلفة للترويسة و التذييل.
</div>

```html
<!-- قم باستنساخ هذا الهيكل و عدِّل عليه -->
<!DOCTYPE html>
<html>
  ...
</html>
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها:
</div>

1. **Semantic HTML**: استخدام ‎header‎, ‎main‎, ‎footer‎.
2. **Linking CSS**: ربط ملف أنماط خارجي.
3. **CSS Selectors**: اختيار عناصر و أصناف.
4. **Flexbox Basics**: ‎display: flex‎ و ‎justify-content‎.
5. **Box Model**: الحدود، الهوامش و الحشو.


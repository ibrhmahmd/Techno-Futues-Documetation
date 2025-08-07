---
title: "CSS Text and Font Properties - Session 2"
author: "---"
date: "2025"
---

## Topic 1: HTML Structure

<div class="arabic">
وصف مختصر لبنية صفحة HTML مع دعم النص من اليمين إلى اليسار
</div>

### Subtopic 1: RTL Document Structure

**هيكل صفحة يدعم اللغة العربية**

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>مثال RTL</title>
  </head>
  <body>
    <h1>عنوان رئيسي</h1>
  </body>
</html>
```

<div class="arabic">
يشرح هذا المثال كيفية إعداد صفحة HTML تدعم الاتجاه من اليمين إلى اليسار
</div>

---

### Subtopic 2: Meta Tags & Structure

**وصف عربي لوسوم meta وأهميتها**

```html
<meta name="description" content="وصف للموقع">
```

<div class="arabic">
تساعد وسوم meta محركات البحث على فهم مضمون الصفحة
</div>

---

## Topic 2: CSS Text and Font Properties

<div class="arabic">
وصف مختصر لخصائص النص والخط في CSS
</div>

```css
body {
  font-family: "Tajawal", Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  direction: rtl;
}
h1 {
  color: blue;
  text-align: center;
}
.important {
  color: red;
  text-decoration: underline;
}
```

<div class="arabic">
يستعرض الكود خصائص الخطوط ومحاذاة النص واتجاه الصفحة
</div>

---

### Subtopic 1: Font Properties

**خصائص الخطوط في CSS**

```css
p {
  font-weight: bold;
  font-style: italic;
}
```

<div class="arabic">
يوضح المثال كيفية تطبيق سماكة وميل الخط
</div>

---

### Subtopic 2: Text Properties

**خصائص تنسيق النص**

```css
p {
  text-transform: uppercase;
  letter-spacing: 2px;
  word-spacing: 4px;
}
```

<div class="arabic">
يوضح المثال كيفية التحكم في مظهر النص والمسافات بين الحروف والكلمات
</div>

---

## Topic 3: Practical Exercise

<div class="arabic">
تمرين عملي لتطبيق خصائص النص والخط
</div>

```html
<h2 class="blue">العنوان باللون الأزرق</h2>
<p class="important">هذه كلمة <span class="important">مهمة</span> داخل الفقرة.</p>
<ul>
  <li>عنصر ١</li>
  <li>عنصر ٢</li>
  <li>عنصر ٣</li>
</ul>
```

---

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية المغطاة:
</div>

1. **Font Family**: استخدام خطوط ويب مخصصة
2. **Text Alignment**: محاذاة النصوص في الاتجاهين
3. **Text Decoration**: تزيين النصوص بخطوط مختلفة
4. **Text Transformation**: تغيير حالة الأحرف
5. **Spacing**: التحكم في تباعد الحروف والكلمات

## Advanced: Accessibility & Fallback Fonts

### Improving Readability

<div class="arabic">
معلومات متقدمة حول تحسين إمكانية الوصول وبدائل الخطوط
</div>

| Feature | Technique | Example |
|---------|-----------|---------|
| Fallback Fonts | `font-family` list | `"Tajawal", Arial, sans-serif` |
| Relative Units | Use `rem` | `font-size: 1.2rem` |
| Contrast | Sufficient color contrast | Blue headings on light bg |

<div class="arabic">
يساعد هذا الجدول على اختيار الخطوط ووحدات القياس المناسبة لضمان سهولة القراءة
</div>

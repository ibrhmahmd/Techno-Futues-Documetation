---
title: "🚀 CSS - الجلسة ٥: Flexbox المتقدم + CSS Grid! 🚀"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Amiri&display=swap" rel="stylesheet">

<style>
body, p, li { line-height: 1.8; margin-bottom: 0.7em; font-family: 'Cairo', 'Amiri', sans-serif; }
h1, h2, h3, h4, h5, h6 { margin-top: 1.4em; margin-bottom: 0.6em; }
code { white-space: pre-wrap; }
.tip { background: #fffae6; padding: 0.8em; border-left: 4px solid #ffc107; }
.warning { background: #ffe6e6; padding: 0.8em; border-left: 4px solid #dc3545; }
.success { background: #e6ffe6; padding: 0.8em; border-left: 4px solid #28a745; }
</style>

# الموضوع ١: Flexbox المتقدم - `flex-wrap` و `flex-grow`! 🎯

<div class="arabic">
دلوقتي هنتعلم خصائص Flexbox المتقدمة اللي بتخلي التصميم أكتر مرونة! 🧩
</div>

## `flex-wrap` - التفاف العناصر

```css
/* العناصر تفضل في سطر واحد (افتراضي) */
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}

/* العناصر تلف للسطر الجديد */
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

/* العناصر تلف للسطر الجديد بالترتيب المعكوس */
.flex-container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

<div class="tip">
💡 استخدم `flex-wrap: wrap` عشان العناصر تلف تلقائياً في الشاشات الصغيرة!
</div>

## `flex-grow` - نمو العناصر

```css
.flex-item {
  flex-grow: 0; /* لا ينمو (افتراضي) */
}

.flex-item-large {
  flex-grow: 2; /* ينمو ضعف العناصر الأخرى */
}

.flex-item-medium {
  flex-grow: 1; /* ينمو مثل باقي العناصر */
}
```

<div class="success">
✅ `flex-grow` بيحدد نسبة نمو العنصر مقارنة بالعناصر الأخرى!
</div>

---

# الموضوع ٢: `flex-shrink` و `flex-basis` - تحكم دقيق! 🎛️

<div class="arabic">
الخصائص دي بتخليك تتحكم في حجم العناصر بدقة أكتر! 📏
</div>

## `flex-shrink` - تقلص العناصر

```css
.flex-item {
  flex-shrink: 1; /* يتقلص مثل باقي العناصر (افتراضي) */
}

.flex-item-important {
  flex-shrink: 0; /* لا يتقلص أبداً */
}

.flex-item-small {
  flex-shrink: 2; /* يتقلص ضعف العناصر الأخرى */
}
```

## `flex-basis` - الحجم الأساسي

```css
.flex-item {
  flex-basis: auto; /* حسب المحتوى (افتراضي) */
}

.flex-item-fixed {
  flex-basis: 200px; /* حجم ثابت */
}

.flex-item-percentage {
  flex-basis: 25%; /* نسبة من الحاوية */
}
```

## الاختصار `flex`

```css
/* الاختصار: flex-grow | flex-shrink | flex-basis */
.flex-item {
  flex: 1 1 auto; /* grow: 1, shrink: 1, basis: auto */
}

.flex-item-large {
  flex: 2 0 200px; /* grow: 2, shrink: 0, basis: 200px */
}
```

<div class="warning">
⚠️ استخدم الاختصار `flex` عشان الكود يكون أقصر وأوضح!
</div>

---

# الموضوع ٣: `align-self` - تحكم فردي! 🎯

<div class="arabic">
`align-self` بيخليك تتحكم في عنصر واحد بس، مش كل العناصر! 🎯
</div>

```css
.flex-container {
  display: flex;
  align-items: center; /* لجميع العناصر */
}

.special-item {
  align-self: flex-start; /* هذا العنصر فقط */
}

.another-item {
  align-self: flex-end; /* هذا العنصر فقط */
}
```

<div class="tip">
💡 `align-self` بيجاوز `align-items` للعنصر المحدد فقط!
</div>

---

# الموضوع ٤: CSS Grid - شبكة قوية! 🕸️

<div class="arabic">
CSS Grid أقوى من Flexbox للتصميمات المعقدة! بتخليك تعمل شبكة دقيقة! 🕸️
</div>

## إنشاء شبكة أساسية

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 أعمدة */
  grid-template-rows: 100px 100px; /* صفين */
  gap: 20px; /* مسافة بين العناصر */
}
```

## استخدام `fr` (fractional unit)

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* عمود متوسط أكبر */
  grid-template-rows: 100px 200px;
}
```

<div class="success">
✅ `fr` بتقسم المساحة المتبقية بالتساوي!
</div>

## `repeat()` - تكرار سريع

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 أعمدة متساوية */
  grid-template-rows: repeat(2, 100px); /* صفين بارتفاع 100px */
}
```

---

# الموضوع ٥: تحديد موقع العناصر في Grid! 🎯

<div class="arabic">
في Grid تقدر تحدد بالضبط فين كل عنصر يروح! 🎯
</div>

## تحديد الصف والعمود

```css
.grid-item {
  grid-column: 1 / 3; /* من العمود 1 للعمود 3 */
  grid-row: 1 / 2; /* من الصف 1 للصف 2 */
}

.wide-item {
  grid-column: span 2; /* يمتد على عمودين */
}

.tall-item {
  grid-row: span 2; /* يمتد على صفين */
}
```

## استخدام `grid-area`

```css
.grid-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

<div class="tip">
💡 `grid-area` بيخلي التخطيط أوضح وأسهل للفهم!
</div>

---

# تدريب عملي: صفحة Flexbox + Grid متقدمة! ⚙️

<div class="arabic">
حان الوقت نطبق كل اللي تعلمناه في صفحة واحدة! 🚀
</div>

```html
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>Flexbox + Grid المتقدم</title>
  <style>
    body { margin: 0; font-family: 'Cairo', sans-serif; }
    
    /* Header مع Flexbox */
    header {
      background: #2c3e50;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    
    nav a { color: #3498db; margin-left: 1rem; text-decoration: none; }
    
    /* Main content مع Grid */
    .main-content {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-rows: auto auto;
      gap: 20px;
      padding: 20px;
      min-height: 400px;
    }
    
    .sidebar { background: #ecf0f1; padding: 1rem; }
    .content { background: #bdc3c7; padding: 1rem; }
    .widget { background: #95a5a6; padding: 1rem; }
    
    /* Cards مع Flexbox متقدم */
    .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      padding: 20px;
    }
    
    .card {
      background: #3498db;
      color: white;
      padding: 1rem;
      border-radius: 8px;
      flex: 1 1 250px; /* grow: 1, shrink: 1, basis: 250px */
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    
    .card-large {
      flex: 2 1 300px; /* أكبر من باقي البطاقات */
    }
    
    @media (max-width: 768px) {
      .main-content {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
      }
      
      header {
        flex-direction: column;
        gap: 1rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>موقعي المتقدم</h1>
    <nav>
      <a href="#">الرئيسية</a>
      <a href="#">الخدمات</a>
      <a href="#">اتصل بنا</a>
    </nav>
  </header>
  
  <div class="main-content">
    <div class="sidebar">شريط جانبي</div>
    <div class="content">محتوى رئيسي</div>
    <div class="widget">أداة</div>
  </div>
  
  <div class="cards-container">
    <div class="card">بطاقة ١</div>
    <div class="card card-large">بطاقة كبيرة</div>
    <div class="card">بطاقة ٣</div>
    <div class="card">بطاقة ٤</div>
  </div>
</body>
</html>
```

<div class="success">
✅ هذه الصفحة تجمع بين Flexbox و Grid مع خصائص متقدمة!
</div>

---

# تحدي الواجب: لوحة تحكم متقدمة! 🌟

<div class="arabic">
اصنع لوحة تحكم تستخدم كل التقنيات اللي تعلمناها! 🎛️
</div>

١. اصنع لوحة تحكم فيها:
   - Header مع Flexbox (شعار + قائمة + زر تسجيل دخول)
   - Sidebar مع قائمة مرنة
   - Main area مع Grid (3 أعمدة)
   - Cards section مع Flexbox متقدم
   - Footer مع 4 أعمدة

٢. استخدم:
   - `flex-wrap` للعناصر
   - `flex-grow` و `flex-shrink`
   - `grid-template-areas`
   - `grid-column` و `grid-row`
   - `align-self` لعنصر واحد على الأقل

٣. خليها responsive:
   - في الشاشات الصغيرة، Grid يتحول لعمود واحد
   - Cards تلف للسطر الجديد
   - Header يتحول لعمود

٤. أضف ألوان وظلال جميلة!

---

## 🏆 تحدي المحقق المتقدم

<div class="arabic">
في مشروعك، استخدم:
- خصائص Flexbox المتقدمة: ___
- خصائص CSS Grid: ___
- Responsive design: ___
- ألوان وظلال: ___
</div>

---

## 🎉 مبروك! أنت محترف CSS!

<div class="arabic">
لو خلصت التحدي، يبقى انت بقيت محترف CSS بجد! 🧙‍♂️✨
</div>

<div class="tip">
💡 في الجلسة القادمة هنتعلم CSS Animations و Transitions! 🎬
</div>

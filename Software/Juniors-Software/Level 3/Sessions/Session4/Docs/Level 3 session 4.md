---
title: "🚀 CSS - الجلسة ٤: سحر Flexbox! 🚀"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Amiri&display=swap" rel="stylesheet">

<style>
body, p, li { line-height: 1.8; margin-bottom: 0.7em; font-family: 'Cairo', 'Amiri', sans-serif; }
h1, h2, h3, h4, h5, h6 { margin-top: 1.4em; margin-bottom: 0.6em; }
code { white-space: pre-wrap; }
.tip { background: #fffae6; padding: 0.8em; border-left: 4px solid #ffc107; }
</style>

# الموضوع ١: `flex-direction` – حدد محورك الرئيسي!

<div class="arabic">
`flex-direction` بيغيّر اتجاه العناصر جوه الحاوية (المحور الرئيسي). عندك اختيارين مهمين دلوقتي: صف (row) أو عمود (column). 🛣️
</div>

```css
/* صف أفقي (القيمة الافتراضية) */
.flex-row {
  display: flex;
  flex-direction: row;
}
/* عمود رأسي */
.flex-column {
  display: flex;
  flex-direction: column;
}
```

<div class="tip">
💡 غيّر القيمة وشوف العناصر بقت مرصوصة إزاي!
</div>

### جميع القيم الممكنة لـ `flex-direction`

| القيمة | الوصف |
|--------|-------|
| `row` | صف أفقي (افتراضي) |
| `row-reverse` | صف أفقي معكوس (العناصر تُعرض بترتيب معكوس) |
| `column` | عمود رأسي |
| `column-reverse` | عمود رأسي معكوس |


---

# الموضوع ٢: `justify-content` – رص العناصر على المحور الرئيسي!

<div class="arabic">
`justify-content` بيرص العناصر أفقياً لو الاتجاه `row`، أو رأسياً لو الاتجاه `column`. جرب القيم دي: `flex-start`, `center`, `space-between`. 🧲
</div>

```css
.nav {
  display: flex;
  justify-content: space-between; /* يبعد العناصر بالتساوي */
}
.banner {
  display: flex;
  justify-content: center; /* يوسّط العناصر */
}
```

<div class="tip">
💡 بدل القيم بسرعة في DevTools عشان تشوف التأثير فوراً.
</div>

### جميع القيم الممكنة لـ `justify-content`

| القيمة | الوصف |
|--------------|-------------------------------------------------------------------|
| `flex-start` | محاذاة العناصر عند بداية المحور الرئيسي |
| `flex-end` | محاذاة عند نهاية المحور الرئيسي |
| `center` | توسيط العناصر |
| `space-between` | مسافة متساوية بين العناصر والحواف ملتصقة |
| `space-around` | مسافة حول كل عنصر (الحواف نصف المسافة) |
| `space-evenly` | مسافات متساوية بما فيها الأطراف |


---

# الموضوع ٣: `align-items` – رص العناصر على المحور المتقاطع!

<div class="arabic">
`align-items` بيتحكم في المحور العمودي لو الاتجاه `row`، أو الأفقي لو الاتجاه `column`. أكثر القيم استخداماً: `stretch` (الافتراضي)، `center`, `flex-end`. 🎯
</div>

```css
.banner {
  display: flex;
  height: 200px;
  align-items: center; /* يوسّط رأسياً */
}
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* يحط العناصر على اليمين */
}
```

<div class="tip">
💡 استخدم `align-items: center` مع ارتفاع ثابت عشان تضمن التوسيط العمودي.
</div>

### جميع القيم الممكنة لـ `align-items`

| القيمة | الوصف |
|-----------|---------------------------------------------|
| `stretch` | تمدد العناصر لملء المحور المتقاطع (افتراضي) |
| `flex-start` | محاذاة عند بداية المحور المتقاطع |
| `flex-end` | محاذاة عند نهاية المحور المتقاطع |
| `center` | توسيط العناصر |
| `baseline` | محاذاة على خط الأساس للنص |


---

# تدريب عملي: شريط تنقّل متجاوب ⚙️

<div class="arabic">
حان الوقت نطبّق الثلاث خصائص مع بعض!
</div>

```html
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>شريط تنقّل Flexbox</title>
  <style>
    body { margin: 0; font-family: 'Cairo', sans-serif; }
    header {
      background: #282c34;
      color: #fff;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between; /* تباعد العناصر */
      align-items: center;           /* توسيط رأسي */
    }
    nav a { color: #0af; margin-left: 1.2rem; text-decoration: none; }
    @media (max-width: 600px) {
      header {
        flex-direction: column;      /* يتحول لعمود في الشاشات الصغيرة */
        gap: 1rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>شعاري</h1>
    <nav>
      <a href="#">رابط ١</a>
      <a href="#">رابط ٢</a>
      <a href="#">رابط ٣</a>
    </nav>
  </header>
</body>
</html>
```

<div class="tip">
💡 جرّب تصغير المتصفح ولاحظ كيف يصبح العمود مرتب تلقائياً!
</div>

---

# تحدي الواجب: صفحة Flexbox كاملة 🌟

١. اصنع صفحة فيها:
   - رأس (Header) فيه شعار وروابط، رصهم بــ `justify-content: space-between` و `align-items: center`.
   - محتوى رئيسي (Main) مع شريط جانبي (Sidebar) باستخدام `flex-direction: row` ثم `column` في الشاشات الصغيرة.
   - قسم بطاقات (Cards) يلتف تلقائياً (`flex-wrap`) ويستخدم `justify-content: center`.
   - تذييل (Footer) بأربع أعمدة.
٢. لازم يكون فيه حاوية Flexbox بداخل أخرى (Nested Flexbox).
٣. شارك النتيجة مع باقي الفريق! 🚀

---

## 🏅 مبروك! أنت ساحر Flexbox!

<div class="arabic">
لو خلّصت التحدي، يبقى اتحكّمت في أهم خصائص Flexbox بنجاح! 🧙‍♂️
</div>

---
title: "🎨 CSS - الجلسة ٣: ألوان وتموضع وعرض! 🎨"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Amiri&display=swap" rel="stylesheet">

<style>
body, p, li { line-height: 1.8; margin-bottom: 0.7em; font-family: 'Cairo', 'Amiri', sans-serif; }
h1, h2, h3, h4, h5, h6 { margin-top: 1.4em; margin-bottom: 0.6em; }
code { white-space: pre-wrap; }
</style>

# الموضوع ١: ألوان CSS - خلي صفحتك منورة!

<div class="arabic">
الألوان في CSS زي علبة ألوان كبيرة عندك! اختار اللون اللي يعجبك وخلي صفحتك شكلها يفرح. 🎨
</div>

```css
/* لون أحمر */
color: rgb(255, 0, 0);
/* لون أزرق شفاف */
color: rgba(0, 0, 255, 0.5);

```

<div class="tip">
💡 جرب تغير الألوان في الكود وشوف النتيجة بنفسك!
</div>

---

# الموضوع ٢: التموضع في CSS - حرّك كل حاجة زي ما تحب!

<div class="arabic">
التموضع في CSS زي لعبة البازل، كل عنصر ممكن تحطه في المكان اللي يعجبك! 🧩
</div>

```css
/* الوضع العادي */
position: static;
/* تحريك بسيط من مكانه */
position: relative;
top: 10px; left: 20px;
/* في أي مكان في الصفحة */
position: absolute;
top: 50px; right: 30px;
/* ثابت في الشاشة حتى لو نزلت */
position: fixed;
bottom: 0; right: 0;
/* يثبت فوق لما تنزل */
position: sticky;
top: 0;
```

<div class="tip">
💡 جرب كل نوع تموضع وشوف الفرق بنفسك!
</div>

---

# الموضوع ٣: وحدات CSS - قيس كل حاجة بالمسطرة!

<div class="arabic">
الوحدات في CSS زي المسطرة، بتحدد بيها حجم ومسافة كل حاجة! 📏
</div>

```css
/* وحدات ثابتة */
width: 100px; /* بيكسل */
font-size: 12pt; /* نقطة */
margin: 1cm; /* سنتيمتر */

/* وحدات مرنة */
width: 50%; /* نسبة من الأب */
font-size: 2em; /* حسب حجم الخط */
padding: 1rem; /* حسب حجم الخط الأساسي */
height: 50vh; /* نص ارتفاع الشاشة */
width: 80vw; /* ٨٠٪ من عرض الشاشة */
```

<div class="tip">
💡 استخدم px للحجم الثابت، % للمرونة، em/rem للتكبير، vw/vh حسب حجم الشاشة!
</div>

---

# الموضوع ٤: ظل الصندوق - خلي العنصر يطلع لقدام!

<div class="arabic">
ظل الصندوق في CSS زي لمسة سحرية بتخلي العنصر باين أكتر! 🕶️
</div>

```css
/* ظل بسيط */
box-shadow: 4px 4px 10px #888;
/* أكتر من ظل */
box-shadow: 2px 2px 5px #aaa, 0 0 10px #00f inset;
```

<div class="tip">
💡 جرب تغير المسافة واللون والشفافية لظل مميز!
</div>

---

# الموضوع ٥: خصائص العرض - رص العناصر زي ما تحب!

<div class="arabic">
خصائص العرض في CSS بتحدد كل عنصر يترتب إزاي في الصفحة! 🧩
</div>

```css
/* عنصر ياخد السطر كله */
display: block;
/* عنصر في نفس السطر */
display: inline;
/* زي inline بس تقدر تتحكم في الحجم */
display: inline-block;
/* اخفي العنصر خالص */
display: none;
/* رص العناصر جنب بعض */
display: flex;
/* شبكة زي جدول */
display: grid;
```

<div class="tip">
💡 استخدم block للأقسام، inline للكلام، flex/grid للتصميمات المتقدمة!
</div>

---

# تدريب عملي: اعمل صفحة ألوانك!

<div class="arabic">
اعمل صفحة فيها صناديق ملونة، جرب تحركهم بخصائص التموضع، واستخدم وحدات مختلفة، وضيف ظل للصناديق، وجرب خصائص العرض! 🎨
</div>

```html
<!-- مثال عملي -->
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>مغامرة CSS بتاعتي</title>
    <style>
        .color-box {
            width: 150px;
            height: 100px;
            background: rgb(255, 200, 0);
            color: #fff;
            box-shadow: 4px 4px 10px #888;
            margin: 1em;
            display: inline-block;
            position: relative;
        }
        .moved {
            position: absolute;
            top: 50px;
            left: 200px;
        }
        .flex-container {
            display: flex;
            gap: 1em;
        }
    </style>
</head>
<body>
    <h1>مغامرة CSS بتاعتي</h1>
    <div class="flex-container">
        <div class="color-box">صندوق ١</div>
        <div class="color-box moved">صندوق ٢ (متحرك!)</div>
        <div class="color-box" style="background: #0af;">صندوق ٣</div>
    </div>
</body>
</html>
```

<div class="tip">
💡 جرب تغير الألوان، التموضع، الوحدات، وأنواع العرض لكل صندوق!
</div>

---

# تحدي الواجب: اعمل لوحة فنية بـ CSS!

<div class="arabic">
اعمل صفحة فيها صناديق ملونة، استخدم التموضع والوحدات والظل وخصائص العرض، وابتكر تصميمك الخاص! 🎨
</div>

١. اعمل صفحة فيها:
   - صناديق ألوان مختلفة
   - استخدم ٣ أنواع تموضع
   - جرب ٣ وحدات مختلفة
   - ضيف ظل للصناديق
٢. خليها مبتكرة ومبهجة!

---

## تحدي المحقق CSS

<div class="arabic">
في صفحتك، تقدر تعد كام خاصية من كل نوع؟
- خصائص اللون: ___
- خصائص التموضع: ___
- خصائص الوحدات: ___
- خصائص الظل: ___
- خصائص العرض: ___
</div>

---

## 🏅 مبروك! أنت فنان CSS!

<div class="arabic">
لو خلصت تصميمك، انت كده بقيت فنان CSS بجد! 👩‍🎨👨‍🎨
</div>

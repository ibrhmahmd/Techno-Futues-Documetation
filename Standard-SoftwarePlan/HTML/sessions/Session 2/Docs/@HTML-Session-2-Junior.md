---
title: "🌟 HTML - Session 2: Links, Images & Multi-Page Magic! 🌟"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Amiri&display=swap" rel="stylesheet">

<style>
body, p, li { line-height: 1.8; margin-bottom: 0.7em; font-family: 'Cairo', 'Amiri', sans-serif; }
h1, h2, h3, h4, h5, h6 { margin-top: 1.4em; margin-bottom: 0.6em; }
code { white-space: pre-wrap; }
</style>

# 🔗 Topic 1: Links - The Magic Doors of the Web!

## 🔗 الموضوع ١: اللينكات - أبواب الإنترنت السحرية!

<div class="arabic">
اللينكات زي الأبواب اللي بتوديك أماكن تانية على الإنترنت أو حتى تفتحلك صفحة جديدة أو إيميل! 🪄
</div>

**Links are like magic doors that take you to new places!**
- External links: أبواب بتوديك لمواقع تانية
- Internal links: أبواب بتوديك لصفحات تانية في نفس الموقع
- Email links: تقدر تراسل حد على طول

```html
<!-- External link -->
<a href="https://www.example.com">زور موقع Example</a>

<!-- Internal link (to another page in same site) -->
<a href="about.html">عننا</a>
```

<div class="tip">
💡 Use <code>href</code> to tell the link where to go. Use <code>target="_blank"</code> if you want the door to open in a new tab!
</div>

<div class="arabic tip">
💡 استخدم <code>href</code> عشان تحدد مكان اللينك. ولو عايز تفتح الباب في تاب جديد، استخدم <code>target="_blank"</code>.
</div>

<!-- PAGE BREAK -->

---

# 🖼️ Topic 2: Images - Bringing Your Page to Life!

## 🖼️ الموضوع ٢: الصور - خلي صفحتك تعيش!

<div class="arabic">
الصور بتخلي الصفحة شكلها حلو وتخلي الناس تفهم أسرع! 🖼️
</div>

**Adding images is like decorating your room with your favorite posters!**

```html
<!-- Basic image -->
<img src="images/photo.jpg" alt="وصف للصورة">

<!-- Image with size -->
<img src="images/logo.png" alt="لوجو الشركة" width="200" height="100">
```

<div class="tip">
💡 Always use <code>alt</code> to describe your image. It helps everyone, even if the picture doesn't show up!
</div>

<div class="arabic tip">
💡 لازم دايمًا تكتب وصف للصورة في <code>alt</code>، عشان لو الصورة ما ظهرتش أو حد عنده مشكلة في النظر.
</div>

<!-- PAGE BREAK -->

---

# 📄 Topic 3: Multi-Page Websites & Navigation - Your Own Website Adventure!

## 📄 الموضوع ٣: مواقع فيها كذا صفحة - مغامرة موقعك!

<div class="arabic">
لو عندك أكتر من صفحة، لازم تربطهم ببعض وتخلي التنقل بينهم سهل زي لعبة المتاهة! 🗺️
</div>

**Block vs Inline Elements:**
- Block elements: زي الصناديق الكبيرة، كل واحد في سطر لوحده (زي <code>div</code> و <code>p</code>)
- Inline elements: زي الكلمات اللي جنب بعض في نفس السطر (زي <code>span</code>)

**Navigation:**
- استخدم <code>nav</code> عشان تعمل قائمة تنقل بين الصفحات

```html
<!-- Block elements -->
<div>ده عنصر بلوك</div>
<p>ده كمان عنصر بلوك</p>

<!-- Inline elements -->
الكلام ده فيه <span>عنصر إنلاين</span> جواه.

<!-- Navigation -->
<nav>
    <a href="index.html">الرئيسية</a>
    <a href="about.html">عننا</a>
    <a href="contact.html">اتصل بينا</a>
</nav>
```

<div class="tip">
💡 Navigation is like a map for your website. Make it easy for visitors to find their way!
</div>

<div class="arabic tip">
💡 قائمة التنقل زي الخريطة، خليها واضحة وسهلة عشان كل اللي يدخل موقعك يعرف يروح فين بسرعة!
</div>

<!-- PAGE BREAK -->

---

# 🏆 Practical Exercise: Build Your Own Mini Website!

## 🏆 تدريب عملي: ابني موقع صغير بنفسك!

<div class="arabic">
اعمل صفحتين HTML: واحدة رئيسية وواحدة عن هواياتك. اربطهم ببعض، وحط صور وروابط زي ما اتعلمت! 🎨
</div>

```html
<!-- Example skeleton code for navigation and images -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Hobbies</title>
</head>
<body>
    <nav>
        <a href="index.html">Home</a>
        <a href="hobbies.html">My Hobbies</a>
    </nav>
    <h1>هواياتي</h1>
    <h2>كرة القدم</h2>
    <img src="images/football.jpg" alt="صورة كرة القدم" width="200">
    <p>بحب ألعب كورة مع صحابي في النادي.</p>
    <h2>القراءة</h2>
    <img src="images/reading.jpg" alt="صورة قراءة" width="200">
    <p>القراءة بتخليني أتعلم حاجات جديدة.</p>
    <!-- زود هوايات وروابط تانية لو حابب -->
</body>
</html>
```

<div class="tip">
💡 Try adding more hobbies, images, and links to make your site unique!
</div>

<div class="arabic tip">
💡 جرب تزود هوايات وصور وروابط أكتر عشان موقعك يبقى مميز!
</div>

<!-- PAGE BREAK -->

---

# 📝 Homework Challenge: Show Off Your Hobbies!

## 📝 تحدي الواجب: ورينا هواياتك!

<div class="arabic">
اعمل صفحة "هواياتي" فيها ٣ هوايات أو أكتر، لكل هواية صورة ووصف، وروابط لمواقع ليها علاقة، وكمان لينك يرجعك للصفحة الرئيسية. 🏅
</div>

1. Create a "My Hobbies" page with at least 3 hobbies.
2. For each hobby, add a picture, a description, and a link to a related website.
3. Add a link to go back to your main page.
4. Decorate your page with colors and fun!

---

## 🕵️ HTML Detective Challenge

<div class="arabic">
## 🕵️ تحدي المحقق HTML

في صفحة "هواياتي" بتاعتك، تقدر تلاقي كام تاج من كل نوع؟
- تاجات العناوين: ___
- تاجات الفقرات: ___
- تاجات الصور: ___
- تاجات اللينك: ___
</div>

Can you count how many of each tag you used in your "My Hobbies" page?
- Heading tags: ___
- Paragraph tags: ___
- Image tags: ___
- Link tags: ___

---

## 🏅 Achievement Unlocked!

<div class="arabic">
لما تخلص موقعك الصغير، انت كده بقيت Web Explorer! 🥳
</div>

When you finish your mini website, you are now a Web Explorer! 🥳

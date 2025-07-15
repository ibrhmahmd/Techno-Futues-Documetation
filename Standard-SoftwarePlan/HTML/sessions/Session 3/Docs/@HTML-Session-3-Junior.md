---
title: "🌟 HTML - Session 3: Lists & Sounds Adventure! 🌟"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Amiri&display=swap" rel="stylesheet">

<style>
body, p, li { line-height: 1.8; margin-bottom: 0.7em; font-family: 'Cairo', 'Amiri', sans-serif; }
h1, h2, h3, h4, h5, h6 { margin-top: 1.4em; margin-bottom: 0.6em; }
code { white-space: pre-wrap; }
</style>

# 📝 Topic 1: Unordered Lists - Magic Dots!

## 📝 الموضوع ١: القوايم الغير مرتبة - نقط سحرية!

<div class="arabic">
القوايم الغير مرتبة زي كيس فيه حاجات كتير جنب بعض، كل واحدة ليها نقطة أو رمز! 🟣
</div>

**Unordered lists are like a bag of surprises, each item gets a dot or a fun symbol!**

```html
<!-- Basic unordered list -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- With type -->
<ul type="square">
    <li>Square bullet item</li>
    <li>Another square bullet</li>
</ul>

<!-- Nested list -->
<ul>
    <li>Main item 1
        <ul>
            <li>Sub-item 1.1</li>
            <li>Sub-item 1.2</li>
        </ul>
    </li>
    <li>Main item 2</li>
</ul>
```

<div class="tip">
💡 Use <code><ul></code> for the list, and <code><li></code> for each item. Try changing the bullet style for more fun!
</div>

<div class="arabic tip">
💡 استخدم <code><ul></code> عشان تعمل قايمة بنقط، و<code><li></code> لكل عنصر. جرب تغير شكل النقط عشان القايمة تبقى أظرف!
</div>

<!-- PAGE BREAK -->

---

# 🔢 Topic 2: Ordered Lists - Numbered Steps!

## 🔢 الموضوع ٢: القوايم المرتبة - خطوات بالأرقام!

<div class="arabic">
القوايم المرتبة زي خطوات لعبة أو وصفة، كل خطوة ليها رقم أو حرف! 🔢
</div>

**Ordered lists are like a recipe or a game plan, every step has a number or a letter!**

```html
<!-- Basic ordered list -->
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<!-- With type attribute -->
<ol type="A">
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ol>

<!-- With start attribute -->
<ol start="5">
    <li>This is item #5</li>
    <li>This is item #6</li>
</ol>

<!-- Nested ordered list -->
<ol>
    <li>Main step
        <ol type="a">
            <li>Sub-step a</li>
            <li>Sub-step b</li>
        </ol>
    </li>
    <li>Next main step</li>
</ol>
```

<div class="tip">
💡 Use <code><ol></code> for numbered lists, and <code>type</code> or <code>start</code> to change the style or starting number!
</div>

<div class="arabic tip">
💡 استخدم <code><ol></code> عشان تعمل قايمة مرقمة، و<code>type</code> أو <code>start</code> لو عايز تغير شكل الترقيم أو تبدأ من رقم معين!
</div>

<!-- PAGE BREAK -->

---

# 🔊 Topic 3: Audio Elements - Let's Add Some Sound!

## 🔊 الموضوع ٣: العناصر الصوتية - شغل صوت في صفحتك!

<div class="arabic">
ممكن تضيف صوت لصفحتك وتخليها تفاعلية أكتر، زي لما تضيف موسيقى للعبة! 🎵
</div>

**Audio makes your page come alive! Add music, sound effects, or your own voice!**

```html
<!-- Basic audio player -->
<audio controls>
    <source src="audio/sample.mp3" type="audio/mpeg">
    <source src="audio/sample.ogg" type="audio/ogg">
    Your browser does not support audio playback.
</audio>

<!-- With autoplay and loop -->
<audio controls autoplay loop>
    <source src="audio/background.mp3" type="audio/mpeg">
</audio>
```

<div class="tip">
💡 Use <code>controls</code> to show play buttons. <code>autoplay</code> and <code>loop</code> make the sound play by itself and repeat!
</div>

<div class="arabic tip">
💡 استخدم <code>controls</code> عشان تظهر أزرار التشغيل. <code>autoplay</code> و<code>loop</code> يخلو الصوت يشتغل لوحده ويعيد نفسه!
</div>

<!-- PAGE BREAK -->

---

# 🍔 Practical Exercise: My Yummy Recipe Page!

## 🍔 تدريب عملي: صفحة وصفتي اللذيذة!

<div class="arabic">
اعمل صفحة فيها قايمة أكلاتك المفضلة (غير مرتبة)، وخطوات وصفة (مرتبة)، وجرب تضيف صوت لوصفة أو شرح! 🍳
</div>

```html
<!-- Example skeleton code for lists and audio -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Recipe</title>
</head>
<body>
    <h1>وصفتي المفضلة</h1>
    <h2>المكونات</h2>
    <ul>
        <li>بيض</li>
        <li>لبن</li>
        <li>عيش</li>
    </ul>
    <h2>الخطوات</h2>
    <ol>
        <li>اكسر البيض</li>
        <li>حط اللبن</li>
        <li>سخن العيش</li>
    </ol>
    <audio controls>
        <source src="audio/recipe.mp3" type="audio/mpeg">
    </audio>
</body>
</html>
```

<div class="tip">
💡 Try making a recipe for your favorite food, and record your own voice explaining the steps!
</div>

<div class="arabic tip">
💡 جرب تكتب وصفة أكلة بتحبها، وسجل صوتك وانت بتشرح الخطوات!
</div>

<!-- PAGE BREAK -->

---

# 📝 Homework Challenge: Make Your Own Recipe Page!

## 📝 تحدي الواجب: اعمل صفحة وصفة من عندك!

<div class="arabic">
اعمل صفحة وصفة فيها قايمة مكونات (غير مرتبة)، وخطوات (مرتبة)، وقايمة مصطلحات (description list)، ولو تحب ضيف صوت. 🍲
</div>

1. Create a recipe page with:
   - An unordered list for ingredients
   - An ordered list for steps
   - A description list for new words or cooking terms
   - (Optional) Add an audio explanation!
2. Make it colorful and fun!

---

## 🕵️ HTML Detective Challenge

<div class="arabic">
## 🕵️ تحدي المحقق HTML

في صفحة الوصفة بتاعتك، تقدر تلاقي كام تاج من كل نوع؟

- تاجات القوايم الغير مرتبة: ___
- تاجات القوايم المرتبة: ___
- تاجات الصوت: ___

</div>

Can you count how many of each tag you used in your recipe page?

- Unordered list tags: ___
- Ordered list tags: ___
- Audio tags: ___

---

## 🏅 Achievement Unlocked!

<div class="arabic">
لما تخلص صفحة الوصفة، انت كده بقيت Master Chef Web! 👨‍🍳👩‍🍳
</div>

When you finish your recipe page, you are now a Master Chef Web! 👨‍🍳👩‍🍳

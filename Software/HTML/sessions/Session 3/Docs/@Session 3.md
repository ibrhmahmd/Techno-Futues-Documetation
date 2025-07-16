---
title: "HTML - Session 3"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: Unordered Lists (القوايم الغير مرتبة)

<div class="arabic">
القوايم الغير مرتبة بتستخدم عشان تعرض عناصر جنب بعض بنقط أو رموز.
</div>

### Subtopic 1: Basic Unordered Lists and Styles

**إزاي تعمل قايمة غير مرتبة وتغير شكل النقط**

```html
<!-- Basic unordered list -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- With type -->
<ul type= "square">
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

<div class="arabic">
<ul> بتعمل قايمة بنقط، و<li> لكل عنصر. ممكن تغير شكل النقط بـ style، وكمان تعمل قايمة جوا قايمة.
</div>

<!-- PAGE BREAK -->

---

## Topic 2: Ordered Lists (القوايم المرتبة)

<div class="arabic">
القوايم المرتبة بتستخدم أرقام أو حروف عشان تعرض خطوات أو ترتيب.
</div>

### Subtopic 1: Basic Ordered Lists and Attributes

**إزاي تعمل قايمة مرتبة وتغير نوع الترقيم**

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

<div class="arabic">
<ol> بتعمل قايمة مرقمة، و<li> لكل عنصر. ممكن تغير نوع الترقيم بـ type، وتبدأ من رقم معين بـ start. وكمان ينفع تعمل قايمة جوا قايمة.
</div>

<!-- PAGE BREAK -->

---

## Topic 3: Audio Elements (العناصر الصوتية)

<div class="arabic">
ممكن تضيف صوت لصفحتك عشان تخليها تفاعلية أكتر.
</div>

### Subtopic 1: Adding Audio and Controls

**إزاي تضيف عنصر صوت وتتحكم فيه**

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

<div class="arabic">
<audio> بيضيف مشغل صوت للصفحة. controls بتظهر أزرار التشغيل، وautoplay وloop بيخلوا الصوت يشتغل لوحده ويعيد نفسه.
</div>

<!-- PAGE BREAK -->

---

## Practical Exercise

<div class="arabic">
تدريب عملي: اعمل صفحة فيها قايمة أكلاتك المفضلة (غير مرتبة)، وخطوات وصفة (مرتبة)، وجرب تضيف صوت لوصفة أو شرح.
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

<!-- PAGE BREAK -->

---

## Homework

<div class="arabic">
اعمل صفحة وصفة فيها قايمة مكونات (غير مرتبة)، وخطوات (مرتبة)، وقايمة مصطلحات (description list)، ولو تحب ضيف صوت.
</div> 
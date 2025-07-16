---
title: "HTML - Session 2"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: Links (اللينكات)

<div class="arabic">
اللينكات بتوصلك بين الصفحات وبعضها أو لمواقع تانية أو حتى تفتح إيميل.
</div>

### Subtopic 1: Basic Links and Types

**أنواع اللينكات في HTML**

```html
<!-- External link -->
<a href="https://www.example.com">Visit Example Website</a>

<!-- Internal link (to another page in same site) -->
<a href="about.html">About Us</a>

```

<div class="arabic">
كل لينك ليه هدف: ممكن يوديك صفحة تانية. href بتحدد مكان اللينك، وtarget بتخليك تفتح اللينك في تاب جديد لو عايز.
</div>

<!-- PAGE BREAK -->

---

## Topic 2: Images (الصور)

<div class="arabic">
الصور بتخلي الصفحة شكلها أحلى وأسهل في الفهم.
</div>

### Subtopic 1: Adding Images and Attributes

**إزاي تضيف صورة وتظبط خصائصها**

```html
<!-- Basic image -->
<img src="images/photo.jpg" alt="Description of the image">

<!-- Image with size attributes -->
<img src="images/logo.png" alt="Company Logo" width="200" height="100">

```

<div class="arabic">
tag <code>img</code> بيعرض صورة. src هو مكان الصورة، alt وصف للصورة (مهم للي عنده مشاكل في النظر)، width وheight بيتحكموا في حجم الصورة.
</div>

<!-- PAGE BREAK -->

---

## Topic 3: Multi-Page Setup (موقع فيه كذا صفحة)

<div class="arabic">
لو عندك أكتر من صفحة، لازم تربطهم ببعض وتظبط التنقل بينهم.
</div>

### Subtopic 1: Block vs Inline Elements & Navigation

**الفرق بين العناصر البلوكية والإنلاين، وإزاي تعمل تنقل بين الصفحات**

```html
<!-- Block elements (create new lines) -->
<div>This is a block element</div>
<p>This is another block element</p>

<!-- Inline elements (flow within text) -->
This text has <span>an inline element</span> within it.

<!-- Basic navigation between pages -->
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</nav>
```

<div class="arabic">
العناصر البلوكية بتنزل في سطر جديد (زي div و p)، الإنلاين بتكمل في نفس السطر (زي span). لو عندك أكتر من صفحة، اعمل navigation عشان المستخدم يتنقل بسهولة.
</div>

<!-- PAGE BREAK -->

---

## Practical Exercise

<div class="arabic">
تدريب عملي: اعمل صفحتين HTML، واحدة رئيسية وواحدة عن هواياتك. اربطهم ببعض، وحط صور وروابط زي ما اتعلمت.
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

<!-- PAGE BREAK -->

---

## Homework

<div class="arabic">
 اعمل صفحة "هواياتي" فيها ٣ هوايات أو أكتر، لكل هواية صورة ووصف، وروابط لمواقع ليها علاقة، وكمان لينك يرجعك للصفحة الرئيسية.
</div>
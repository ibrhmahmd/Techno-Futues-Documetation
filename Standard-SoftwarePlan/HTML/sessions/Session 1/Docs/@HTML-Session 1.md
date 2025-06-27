---
title: "HTML - Session 1"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: HTML Document Structure

<div class="arabic">
ده شكل مستند HTML الأساسي
</div>

### Subtopic 1: Creating the HTML Skeleton

**HTML مع إعلان DOCTYPE والعناصر الأساسية**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

<!-- PAGE BREAK -->

---

```
```

## Topic 2: Headings and Paragraphs

<div class="arabic">
استخدم العناوين والفقرات عشان ترتب المحتوى بتاعك
</div>

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section heading</h3>
<!-- h1, h2, h3, h4, h5, h6 -->

<p>دي فقرة نص. HTML هتظبط الكلام لوحدها عشان يبان كويس على الشاشة.</p>
```

<div class="arabic">
tag العناوين (h1-h6) بتساعدك تعمل ترتيب منطقي للمحتوى، والفقرات بتستخدمها للنص العادي. الكومنتات مفيدة لو عايز تشرح الكود لنفسك من غير ما تظهر للمستخدم.
</div>

<!-- PAGE BREAK -->

---

## Topic 3: Text Formatting

<div class="arabic">
عايز تبرز معلومة؟ استخدم تنسيقات الخط زي بولد أو مائل أو تحته خط
</div>

```html
<!-- Basic formatting -->
<p>This is <b>bold</b> and this is <i>italic</i> and this is <u>underlined</u>.</p>

<!-- Semantic formatting -->
<p>This is <strong>important</strong> and this is <em>emphasized</em> and this is <mark>highlighted</mark>.</p>

<!-- Line breaks -->
<p>This is line one.<br>This is line two.</p>

<!-- Horizontal rule -->
<hr>
```

<div class="arabic">
tag الأساسية (`b`, `i`, `u`) بتدي شكل للخط، لكن الsemantic tags (`strong`, `em`) بتدي معنى للكلام وبتساعد جوجل وأي حد عنده صعوبة في القراءة. tag `br` بينزل سطر جديد و`hr` بيعمل خط فاصل.
</div>

<!-- PAGE BREAK -->

---

## Table: Topic 3 Tags and Their Explanations

| Tag      | What it does (English)                | شرح مبسط                                |
|----------|---------------------------------------|------------------------------------------|
| `<b>`    | Makes text bold (non-semantic)        | بيخلي الكلام تخين (بولد) بس من غير معنى خاص للمتصفح أو جوجل |
| `<i>`    | Makes text italic (non-semantic)      | بيخلي الكلام مايل (مائل) برضه من غير معنى خاص |
| `<u>`    | Underlines the text                   | بيحط خط تحت الكلام |
| `<strong>` | Makes text bold and means "important" | بيخلي الكلام بولد وكمان معناه إن الكلام ده مهم للمتصفح وجوجل |
| `<em>`   | Italicizes and means "emphasized"     | بيخلي الكلام مائل ومعناه إن الكلام ده عليه تأكيد أو مهم شوية |
| `<mark>` | Highlights text with yellow background | بيظلل الكلام كأنه متعلم عليه بماركر أصفر |
| `<br>`   | Line break (new line)                 | بينزل الكلام لسطر جديد |
| `<hr>`   | Horizontal line across the page       | بيعمل خط فاصل أفقي في الصفحة |

<!-- PAGE BREAK -->

---

## Practical Exercise

<div class="arabic">
تدريب عملي: اعمل صفحة تعريفية عن نفسك باستخدام العناوين والفقرات وتنسيق النص زي ما اتعلمت.
</div>

```html
<!-- Exercise skeleton code -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
</head>
<body>
    <h1>اسمك هنا</h1>
    <h2>عن نفسي</h2>
    <p>اكتب نبذة قصيرة عن نفسك هنا...</p>
    <!-- زود أقسام وتنسيقات زي ما تحب -->
</body>
</html>
```
---
title: "HTML - Session 5"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: Revision (مراجعة)

<div class="arabic">
مراجعة سريعة على أهم الحاجات اللي اتعلمناها في الأربع جلسات اللي فاتوا.
</div>

### Subtopic 1: HTML Structure & Headings

**هيكل صفحة HTML والعناوين**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
</head>
<body>
    <h1>عنوان رئيسي</h1>
    <h2>عنوان فرعي</h2>
    <p>دي فقرة نصية.</p>
</body>
</html>
```

<div class="arabic">
اتعلمنا إزاي نكتب هيكل صفحة HTML، ونستخدم العناوين والفقرات.
</div>

---

### Subtopic 2: Links & Images

**اللينكات والصور**

```html
<a href="https://www.example.com">لينك خارجي</a>
<img src="images/photo.jpg" alt="صورة">
```

<div class="arabic">
اللينكات بتوصلك لصفحات تانية أو مواقع، والصور بتخلي الصفحة أجمل.
</div>

---

### Subtopic 3: Lists (القوايم)

**القوايم المرتبة وغير المرتبة**

```html
<ul>
    <li>عنصر ١</li>
    <li>عنصر ٢</li>
</ul>
<ol>
    <li>خطوة ١</li>
    <li>خطوة ٢</li>
</ol>
```

<div class="arabic">
<ul> للقوايم بنقط، <ol> للقوايم المرقمة.</div>

---

### Subtopic 4: Forms, Audio, and Video

**النماذج، الصوت، والفيديو**

```html
<form>
    <label for="name">الاسم:</label>
    <input type="text" id="name" name="name">
</form>
<audio controls>
    <source src="audio/sample.mp3" type="audio/mpeg">
</audio>
<video src="video/sample.mp4" controls></video>
```

<div class="arabic">
النماذج بتجمع بيانات من المستخدم، والعناصر الصوتية والمرئية بتخلي الصفحة تفاعلية أكتر.
</div>

---

## Topic 2: The style Attribute (خاصية style)

<div class="arabic">
ممكن تغير شكل العناصر في HTML باستخدام خاصية style.
</div>

### Subtopic 1: background-color & color

**إزاي تغير لون الخلفية ولون الخط**

```html
<p style="background-color: yellow; color: red;">نص بلون خلفية أصفر وخط أحمر</p>
```

<div class="arabic">
background-color بتغير لون الخلفية، وcolor بتغير لون الخط. ممكن تستخدمهم مع أي عنصر HTML.
</div>

---

## Practical Exercise

<div class="arabic">
تدريب عملي: اعمل صفحة فيها عنوان، فقرة، قايمة، وصورة. استخدم خاصية style عشان تغير لون الخلفية ولون الخط لبعض العناصر.
</div>

```html
<!-- Example skeleton code for style attribute -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Revision & Style Demo</title>
</head>
<body>
    <h1 style="color: blue;">مراجعة HTML</h1>
    <p style="background-color: lightgray;">دي فقرة فيها خلفية رمادي.</p>
    <ul>
        <li style="color: green;">عنصر أخضر</li>
        <li>عنصر عادي</li>
    </ul>
    <img src="images/photo.jpg" alt="صورة" style="background-color: pink;">
</body>
</html>
```

V

---

## Homework

<div class="arabic">
مهمة واقعية: ابحث عن موضوع يهمك (زي نادي رياضي، حدث مدرسي، أو صفحة تعريفية عن نفسك أو عيلتك)، واصنع صفحة ويب كاملة عنه. لازم تستخدم كل العناصر اللي اتعلمتها في الكورس:
<ul>
  <li>هيكل HTML كامل (doctype, head, body)</li>
  <li>عناوين وفقرات</li>
  <li>لينكات وصور</li>
  <li>قوايم مرتبة وغير مرتبة</li>
  <li>نموذج (form) لجمع بيانات</li>
  <li>عنصر صوتي (audio) أو فيديو (video)</li>
  <li>خاصية style لتغيير الألوان</li>
</ul>
دور على محتوى مناسب (صور، نصوص، روابط) من الإنترنت أو من عندك، وركبهم في الصفحة. الهدف إنك تطبق كل اللي اتعلمته في مشروع واحد.
</div>

**Real-life task:**
Search for a topic you care about (like a sports club, a school event, or a personal/family profile) and create a complete web page about it. You must use all the elements learned in the course:
- Full HTML structure (doctype, head, body)
- Headings and paragraphs
- Links and images
- Ordered and unordered lists
- A form to collect data
- An audio or video element
- The style attribute to change colors

Find suitable content (images, text, links) from the internet or your own resources, and combine them in your page. The goal is to apply everything you learned in one project.

## Useful Resources for Audio & Video

<div class="arabic">
لو محتاج فيديوهات أو ملفات صوتية مجانية لمشروعك، ممكن تستخدم المواقع دي:
<ul>
  <li><a href="https://www.pexels.com/videos/" target="_blank">Pexels Videos</a> (فيديوهات مجانية)</li>
  <li><a href="https://pixabay.com/videos/" target="_blank">Pixabay Videos</a> (فيديوهات مجانية)</li>
  <li><a href="https://mixkit.co/free-stock-video/" target="_blank">Mixkit</a> (فيديوهات عالية الجودة)</li>
  <li><a href="https://pixabay.com/sound-effects/" target="_blank">Pixabay Sound Effects</a> (مؤثرات صوتية ومقاطع موسيقية)</li>
  <li><a href="https://freemusicarchive.org/" target="_blank">Free Music Archive</a> (موسيقى مجانية)</li>
</ul>
دور على كلمة "Download" أو "تنزيل" عشان تحمل الملف، واستخدم الرابط أو الملف في صفحتك.
</div>

**Websites for free audio and video:**
- <a href="https://www.pexels.com/videos/" target="_blank">Pexels Videos</a> (free stock videos)
- <a href="https://pixabay.com/videos/" target="_blank">Pixabay Videos</a> (free stock videos)
- <a href="https://mixkit.co/free-stock-video/" target="_blank">Mixkit</a> (high-quality free videos)
- <a href="https://pixabay.com/sound-effects/" target="_blank">Pixabay Sound Effects</a> (sound effects and music)
- <a href="https://freemusicarchive.org/" target="_blank">Free Music Archive</a> (free music)

Look for the "Download" button to save the file, then use the file or its link in your HTML page.







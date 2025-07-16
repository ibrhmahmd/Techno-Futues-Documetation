---
title: "HTML - Session 4"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: Forms (النماذج)

<div class="arabic">
النماذج بتستخدم عشان تجمع بيانات من المستخدمين زي الاسم، السن، أو أي معلومة تانية.
</div>

### Subtopic 1: Basic Form, Label, and Input

**إزاي تعمل نموذج وتستخدم label و input**

```html
<!-- Basic form with label and input -->
<form>
    <label for="username">اسم المستخدم:</label>
    <input type="text" id="username" name="username">
</form>
```

<div class="arabic">
<form> بيبدأ النموذج. <label> بتكتب اسم الحقل، و<input> بتاخد البيانات. for في <label> لازم يكون زي id في <input>.
</div>

---

### Subtopic 2: Input Attributes & Types

**أنواع الحقول وخصائصها**

```html
<!-- Different input types and attributes -->
<form>
    <label for="age">السن:</label>
    <input type="number" id="age" name="age" min="1" max="100">
    <br>
    <label for="phone">رقم التليفون:</label>
    <input type="tel" id="phone" name="phone" placeholder="0123456789">
    <br>
    <label for="email">الإيميل:</label>
    <input type="email" id="email" name="email" required>
</form>
```

<div class="arabic">
<input> ليه أنواع كتير زي text, number, tel, email. ممكن تضيف خصائص زي placeholder, required, min, max.
</div>

---

### Subtopic 3: Checkboxes and Radio Buttons

**إزاي تعمل اختيارات متعددة أو اختيار واحد**

```html
<!-- Checkboxes -->
<form>
    <label>الهوايات:</label><br>
    <input type="checkbox" id="sport" name="hobby" value="رياضة">
    <label for="sport">رياضة</label>
    <input type="checkbox" id="music" name="hobby" value="موسيقى">
    <label for="music">موسيقى</label>
</form>

<!-- Radio buttons -->
<form>
    <label>النوع:</label><br>
    <input type="radio" id="male" name="gender" value="ذكر">
    <label for="male">ذكر</label>
    <input type="radio" id="female" name="gender" value="أنثى">
    <label for="female">أنثى</label>
</form>
```

<div class="arabic">
checkbox بيخلي المستخدم يختار أكتر من اختيار. radio button بيخليه يختار اختيار واحد بس من مجموعة.
</div>

---

## Topic 2: Video Elements (العناصر المرئية)

<div class="arabic">
ممكن تضيف فيديو لصفحتك عشان تعرض شرح أو محتوى تفاعلي.
</div>

### Subtopic 1: Adding Video and Controls

**إزاي تضيف فيديو وتتحكم فيه**

```html
<!-- Basic video player -->
<video src="video/sample.mp4" controls>
    متصفحك لا يدعم تشغيل الفيديو.
</video>

<!-- With autoplay, loop, and muted -->
<video src="video/lesson.mp4" controls autoplay loop muted>
</video>
```

<div class="arabic">
<video> بيضيف مشغل فيديو للصفحة. controls بتظهر أزرار التشغيل، autoplay بتشغل الفيديو تلقائي، loop بيعيد الفيديو، muted بيخلي الصوت مكتوم.
</div>

---

## Practical Exercise

<div class="arabic">
تدريب عملي: اعمل صفحة فيها نموذج تسجيل (اسم، سن، نوع، هوايات)، وجرب تضيف فيديو تعليمي.
</div>

```html
<!-- Example skeleton code for form and video -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration & Video</title>
</head>
<body>
    <h1>تسجيل جديد</h1>
    <form>
        <label for="name">الاسم:</label>
        <input type="text" id="name" name="name"><br>
        <label for="age">السن:</label>
        <input type="number" id="age" name="age"><br>
        <label>النوع:</label>
        <input type="radio" id="male" name="gender" value="ذكر">
        <label for="male">ذكر</label>
        <input type="radio" id="female" name="gender" value="أنثى">
        <label for="female">أنثى</label><br>
        <label>الهوايات:</label>
        <input type="checkbox" id="sport" name="hobby" value="رياضة">
        <label for="sport">رياضة</label>
        <input type="checkbox" id="music" name="hobby" value="موسيقى">
        <label for="music">موسيقى</label><br>
        <input type="submit" value="سجل">
    </form>
    <h2>فيديو تعليمي</h2>
    <video src="video/lesson.mp4" controls></video>
</body>
</html>
```

---

## Homework

<div class="arabic">
اعمل صفحة تسجيل فيها نموذج (اسم، سن، نوع، هوايات)، وجرب تضيف فيديو تعليمي مع خصائص (autoplay, loop, muted).
</div>


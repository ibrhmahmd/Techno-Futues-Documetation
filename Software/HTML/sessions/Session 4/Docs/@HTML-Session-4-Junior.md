---
title: "🌟 HTML - Session 4: Forms & Videos Fun! 🌟"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Amiri&display=swap" rel="stylesheet">

<style>
body, p, li { line-height: 1.8; margin-bottom: 0.7em; font-family: 'Cairo', 'Amiri', sans-serif; }
h1, h2, h3, h4, h5, h6 { margin-top: 1.4em; margin-bottom: 0.6em; }
code { white-space: pre-wrap; }
</style>

# 📝 Topic 1: Forms – Collecting Cool Info!

## 📝 الموضوع ١: النماذج – اجمع بيانات بطريقة شيك!

<div class="arabic">
النماذج بتستخدم عشان تجمع بيانات من المستخدمين زي الاسم، السن، أو أي معلومة تانية. 📝
</div>

**Forms let you grab information like names, ages, or anything you need from users!**

---

### 🎯 Sub-Topic 1: Basic Form, Label & Input

#### 🎯 العنوان الفرعي ١: نموذج بسيط، لابل، وإنبوت

```html
<!-- Basic form with label and input -->
<form>
    <label for="username">اسم المستخدم:</label>
    <input type="text" id="username" name="username">
</form>
```

<div class="tip">
💡 Wrap everything in `form`, use `label` to name the field, and `input` to collect the data. Match the `for` of the label with the `id` of the input!
</div>

<div class="arabic tip">
💡 استخدم `form` عشان تبدأ النموذج، و `label` لاسم الحقل، و `input` لاستقبال البيانات. لازم `for` في اللابل يساوي `id` في الإنبوت!
</div>

<!-- PAGE BREAK -->

### 🔢 Sub-Topic 2: Input Types & Attributes

#### 🔢 العنوان الفرعي ٢: أنواع الحقول وخصائصها

```html
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

<div class="tip">
💡 Change `type` to make different kinds of fields (number, tel, email). Add extras like `placeholder`, `required`, `min`, and `max` for extra power!
</div>

<div class="arabic tip">
💡 غيّر `type` عشان تحوّل الحقل (number, tel, email). ممكن تضيف خصائص زي `placeholder`, `required`, `min`, `max`.
</div>

<!-- PAGE BREAK -->

### ✅ Sub-Topic 3: Checkboxes & Radio Buttons

#### ✅ العنوان الفرعي ٣: مربعات الاختيار وأزرار الراديو

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

<div class="tip">
💡 Checkboxes = pick many, Radio buttons = pick just one from a group!
</div>

<div class="arabic tip">
💡 checkbox عشان تختار أكتر من اختيار، و radio button عشان اختيار واحد بس من مجموعة.
</div>

<!-- PAGE BREAK -->

# 🎬 Topic 2: Video Elements – Lights, Camera, Action!

## 🎬 الموضوع ٢: العناصر المرئية – شغّل الفيديو!

<div class="arabic">
ممكن تضيف فيديو لصفحتك عشان تعرض شرح أو محتوى تفاعلي. 🎥
</div>

**Add videos to show tutorials, fun clips, or anything awesome!**

---

### ▶️ Sub-Topic 1: Adding Video & Controls

#### ▶️ العنوان الفرعي ١: إضافة فيديو والتحكم فيه

```html
<!-- Basic video player -->
<video src="video/sample.mp4" controls>
    متصفحك لا يدعم تشغيل الفيديو.
</video>

<!-- With autoplay, loop, and muted -->
<video src="video/lesson.mp4" controls autoplay loop muted></video>
```

<div class="tip">
💡 `controls` shows play buttons, `autoplay` starts automatically, `loop` repeats, and `muted` silences the sound!
</div>

<div class="arabic tip">
💡 `controls` بتظهر أزرار التشغيل، `autoplay` بتشغل الفيديو تلقائي، `loop` بيعيد الفيديو، `muted` بيكتم الصوت!
</div>

<!-- PAGE BREAK -->

# 🍔 Practical Exercise: Registration & Video Page!

## 🍔 تدريب عملي: صفحة تسجيل وفيديو!

<div class="arabic">
اعمل صفحة فيها نموذج تسجيل (اسم، سن، نوع، هوايات)، وجرب تضيف فيديو تعليمي. 📝🎥
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

<div class="tip">
💡 Customize the form, change video source, and make the page colorful!
</div>

<div class="arabic tip">
💡 عدّل النموذج، غيّر الفيديو، وخلي الصفحة ملونة وجميلة!
</div>

<!-- PAGE BREAK -->

# 📝 Homework Challenge: Build Your Own Registration Page!

## 📝 تحدي الواجب: صمّم صفحة التسجيل الخاصة بك!

<div class="arabic">
اعمل صفحة تسجيل فيها نموذج (اسم، سن، نوع، هوايات)، وجرب تضيف فيديو تعليمي مع خصائص (autoplay, loop, muted). 🎯
</div>

1. Create a registration page with:
   - A form collecting name, age, gender, and hobbies
   - A video element showing a tutorial
   - Use `autoplay`, `loop`, and `muted` to experiment with behavior
2. Style it with colors, fonts, and maybe some emojis! 😎

---

## 🕵️ HTML Detective Challenge

<div class="arabic">
## 🕵️ تحدي المحقق HTML

في صفحة التسجيل بتاعتك، احسب كام تاج من كل نوع:

- تاجات النموذج `<form>`: ___
- تاجات الإنبوت `<input>`: ___
- تاجات الفيديو `<video>`: ___
</div>

Can you count how many of each tag you used?

- Form tags: ___
- Input tags: ___
- Video tags: ___

---

## 🏅 Achievement Unlocked!

<div class="arabic">
لما تخلص صفحة التسجيل، انت كده Web Forms & Video Pro! 🏆
</div>

When you finish your registration page, you are now a Web Forms & Video Pro! 🏆

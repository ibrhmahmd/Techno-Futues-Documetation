---
title: "HTML - Advanced Session"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: Semantic Elements (العناصر الدلالية)

<div class="arabic">
العناصر الدلالية بتوضح معنى كل جزء في الصفحة للمتصفح ومحركات البحث.
</div>

### Subtopic 1: header, footer, nav, main, article, section, aside, figure, figcaption, time

**Code Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Main Content Section</h2>
            <article>
                <h3>Article Title</h3>
                <p>Article content goes here.</p>
                <time datetime="2023-05-15">May 15, 2023</time>
            </article>
        </section>
        <aside>
            <h3>Related Information</h3>
            <p>Sidebar content goes here.</p>
        </aside>
    </main>
    <footer>
        <p>&copy; 2023 Example Company</p>
    </footer>
</body>
</html>
```

**Explanation (English):**
Semantic elements describe their meaning to browsers and developers. Header, footer, nav, and main define page regions, while article, section, and aside organize content. This improves accessibility and search engine optimization.

**شرح (عربي):**
العناصر الدلالية زي header, footer, nav, main بتقسم الصفحة لأجزاء واضحة. article وsection وaside بينظموا المحتوى. ده بيساعد محركات البحث وذوي الاحتياجات الخاصة.

---

## Topic 2: Embedding Content (تضمين المحتوى)

<div class="arabic">
ممكن تضيف فيديوهات، خرائط، أو رموز خاصة باستخدام عناصر التضمين.
</div>

### Subtopic 1: iframe (YouTube, Maps), HTML entities, video tag

**Code Example:**
```html
<!-- YouTube video embed -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player" allowfullscreen></iframe>

<!-- Google Maps embed -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1013991811613!2d-74.00594523469134!3d40.7117845179329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1658575262693!5m2!1sen!2sus" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

<!-- HTML entities -->
<p>Special characters: &copy; copyright, &reg; registered trademark, &trade; trademark, &lt; less than, &gt; greater than, &amp; ampersand</p>

<!-- Video tag -->
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**Explanation (English):**
Iframe elements embed external content like videos and maps. HTML entities display special characters. The video element provides native video playback with browser controls.

**شرح (عربي):**
iframe بيضيف فيديو أو خريطة من موقع تاني. الكيانات الخاصة (&copy; &lt; &gt;) بتعرض رموز. video بيشغل فيديوهات مباشرة في الصفحة.

---

## Topic 3: Final Project Planning (تخطيط المشروع النهائي)

<div class="arabic">
في نهاية الكورس هتعمل موقع كامل فيه كل العناصر اللي اتعلمتها.
</div>

### Subtopic 1: Multi-page site planning, wireframes, file organization

**Instructions (English):**
Plan your final project:
- Create a site map and wireframes for a multi-page website
- Organize your files and folders
- Start building the homepage with semantic HTML

**التعليمات (عربي):**
خطط لمشروعك النهائي:
- اعمل خريطة للموقع وwireframes لموقع فيه كذا صفحة
- نظم الملفات والفولدرات
- ابدأ في بناء الصفحة الرئيسية باستخدام عناصر HTML الدلالية

---

## Practical Exercise

**Instructions (English):**
Convert a simple layout (using divs) to use semantic HTML elements (header, nav, main, section, article, aside, footer). Add ARIA roles and test with a screen reader if possible. Embed a YouTube video and a Google Map.

**التعليمات (عربي):**
حول صفحة بسيطة معمولة بـ div لعناصر HTML دلالية (header, nav, main, section, article, aside, footer). ضيف ARIA roles وجربها مع قارئ شاشة لو تقدر. ضيف فيديو يوتيوب وخريطة جوجل.

---

## Homework

**Instructions (English):**
Start your final project:
- Multi-page website using only HTML (no CSS yet)
- Homepage with semantic structure
- About page with lists and tables
- Gallery page with images
- Contact page with form
- Navigation between all pages
- At least one embedded element
- Proper semantic HTML

**التعليمات (عربي):**
ابدأ مشروعك النهائي:
- موقع فيه كذا صفحة باستخدام HTML فقط (من غير CSS)
- صفحة رئيسية فيها عناصر دلالية
- صفحة about فيها قوائم وجداول
- صفحة معرض صور
- صفحة تواصل فيها نموذج
- تنقل بين كل الصفحات
- ضيف عنصر مدمج واحد على الأقل
- استخدم عناصر HTML الدلالية بشكل صحيح 
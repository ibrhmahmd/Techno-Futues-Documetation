---
title: "HTML - Session 5"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: Form Basics (أساسيات النماذج)

<div class="arabic">
النماذج بتستخدم لجمع بيانات من المستخدمين.
</div>

### Subtopic 1: form, input, label, required, placeholder

**Code Example:**
```html
<!-- Basic form -->
<form action="submit.php" method="post">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required>
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
    </div>
</form>
```

**Explanation (English):**
Forms collect user input. Labels improve accessibility by connecting to input fields. The required attribute enforces mandatory fields, while placeholders provide hints.

**شرح (عربي):**
النماذج بتجمع بيانات المستخدم. الـ label بيربط النص بحقل الإدخال. required بتخلي الحقل إجباري وplaceholder بيظهر نص توضيحي.

---

## Topic 2: More Input Types (أنواع إدخال إضافية)

<div class="arabic">
HTML5 بيدعم أنواع إدخال كتير زي الراديو، الشيك بوكس، التاريخ، اللون، القوائم، والمناطق النصية.
</div>

### Subtopic 1: radio, checkbox, date, color, select, textarea

**Code Example:**
```html
<!-- Various input types -->
<form>
    <!-- Radio buttons -->
    <div>
        <p>Gender:</p>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
        <input type="radio" id="other" name="gender" value="other">
        <label for="other">Other</label>
    </div>
    <!-- Checkboxes -->
    <div>
        <p>Interests:</p>
        <input type="checkbox" id="coding" name="interests" value="coding">
        <label for="coding">Coding</label>
        <input type="checkbox" id="music" name="interests" value="music">
        <label for="music">Music</label>
        <input type="checkbox" id="sports" name="interests" value="sports">
        <label for="sports">Sports</label>
    </div>
    <!-- Other input types -->
    <div>
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday">
    </div>
    <div>
        <label for="favorite-color">Favorite Color:</label>
        <input type="color" id="favorite-color" name="color">
    </div>
    <div>
        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
    </div>
    <div>
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="australia">Australia</option>
        </select>
    </div>
</form>
```

**Explanation (English):**
HTML5 offers specialized input types for different data. Radio buttons allow single selection from options, while checkboxes allow multiple selections. Textarea provides multi-line text input, and select creates dropdown menus.

**شرح (عربي):**
HTML5 بيدعم أنواع إدخال كتير. الراديو لاختيار واحد، الشيك بوكس لاختيارات متعددة، textarea لنص طويل، وselect لقائمة منسدلة.

---

## Topic 3: Form Organization (تنظيم النموذج)

<div class="arabic">
ممكن تنظم النموذج باستخدام fieldset وlegend، وتضيف أزرار إرسال ومسح، وتستخدم التحقق التلقائي.
</div>

### Subtopic 1: fieldset, legend, submit/reset, validation

**Code Example:**
```html
<!-- Organized form with fieldsets -->
<form action="process.php" method="post">
    <fieldset>
        <legend>Personal Information</legend>
        <div>
            <label for="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" required>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
    </fieldset>
    <fieldset>
        <legend>Preferences</legend>
        <div>
            <label for="favorite-website">Favorite Website:</label>
            <input type="url" id="favorite-website" name="website">
        </div>
        <div>
            <label for="satisfaction">Satisfaction (1-10):</label>
            <input type="range" id="satisfaction" name="satisfaction" min="1" max="10">
        </div>
    </fieldset>
    <div>
        <input type="submit" value="Submit Form">
        <input type="reset" value="Clear Form">
    </div>
</form>
```

**Explanation (English):**
Fieldset groups related form elements with a legend as title. Submit buttons send data, while reset buttons clear the form. Form validation helps ensure correct data input.

**شرح (عربي):**
fieldset بتجمع عناصر النموذج مع بعض تحت عنوان (legend). زرار submit بيبعت البيانات وreset بيمسحها. التحقق بيخلي البيانات صح قبل الإرسال.

---

## Practical Exercise

**Instructions (English):**
Build a registration form with:
- Name, email, and password fields (required)
- Gender (radio), interests (checkboxes)
- Birthday (date), favorite color (color picker)
- Comments (textarea), country (select)
- Organized with fieldsets and legends
- Submit and reset buttons
- Use validation and placeholders

**التعليمات (عربي):**
اعمل نموذج تسجيل فيه:
- اسم، إيميل، وباسورد (إجباري)
- النوع (راديو)، الاهتمامات (شيك بوكس)
- تاريخ الميلاد، اللون المفضل
- تعليقات (textarea)، الدولة (select)
- نظم النموذج بـ fieldset وlegend
- أزرار إرسال ومسح
- استخدم التحقق وplaceholder

---

## Homework

**Instructions (English):**
Create a registration form with:
- Personal details section
- Account preferences
- At least 8 input types
- Proper validation
- Fieldsets and good styling

**التعليمات (عربي):**
اعمل نموذج تسجيل فيه:
- قسم بيانات شخصية
- تفضيلات الحساب
- 8 أنواع إدخال على الأقل
- تحقق من صحة البيانات
- استخدم fieldset ونسق النموذج بشكل جيد 
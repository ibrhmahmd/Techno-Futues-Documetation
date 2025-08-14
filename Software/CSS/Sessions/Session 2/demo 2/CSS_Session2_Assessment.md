# CSS Session 2 Assessment - Box Model
**تقييم الجلسة الثانية - نموذج الصندوق**

---

## Assessment Overview - نظرة عامة على التقييم

<div class="arabic">
تقييم شامل لمفاهيم نموذج الصندوق في CSS
</div>

- **Topic - الموضوع**: CSS Box Model (Border, Margin, Padding, Width, Height, Classes, Divs)
- **Duration - المدة**: 15-20 دقيقة
- **Question Types - أنواع الأسئلة**: Multiple Choice, Short Answer, Code Completion
- **Total Points - إجمالي النقاط**: 100 نقطة

---

## Google Form Questions - أسئلة النموذج

### Section 1: Border Properties - الحدود (25 نقطة)

**Question 1 (5 نقاط) - اختيار متعدد**

أي خاصية CSS تُستخدم لإنشاء زوايا دائرية؟
Which CSS property is used to create rounded corners?

- A) border-corner
- B) border-radius ✓
- C) corner-radius  
- D) border-round

**Question 2 (5 نقاط) - اختيار متعدد**

ماذا يعني `border: 2px solid red;`؟
What does `border: 2px solid red;` mean?

- A) عرض 2px، نمط صلب، لون أحمر - 2px width, solid style, red color ✓
- B) ارتفاع 2px، خلفية صلبة، نص أحمر - 2px height, solid background, red text
- C) هامش 2px، حشو صلب، حدود حمراء - 2px margin, solid padding, red border
- D) نصف قطر 2px، خط صلب، خلفية حمراء - 2px radius, solid line, red background

**Question 3 (10 نقاط) - إجابة قصيرة**

اكتب كود CSS لإنشاء حدود منقطة زرقاء بعرض 3px:
Write CSS code to create a dotted blue border with 3px width:

```
[حقل إدخال النص - Text input field]
الإجابة الصحيحة: border: 3px dotted blue;
```

**Question 4 (5 نقاط) - اختيار متعدد**

أي نمط حدود ينشئ تأثير ثلاثي الأبعاد منحوت؟
Which border style creates a 3D grooved effect?

- A) ridge - بارز
- B) groove - منحوت ✓
- C) inset - غائر
- D) outset - بارز للخارج

### Section 2: Margin & Padding - الهامش والحشو (30 نقطة)

**Question 5 (10 نقاط) - اختيار متعدد**

ما الفرق بين margin و padding؟
What is the difference between margin and padding?

- A) Margin داخل الحدود، padding خارجها - Margin is inside the border, padding is outside
- B) Margin خارج الحدود، padding داخلها - Margin is outside the border, padding is inside ✓
- C) هما نفس الشيء - They are the same thing
- D) Margin يؤثر على العرض، padding على الارتفاع - Margin affects width, padding affects height

**Question 6 (10 نقاط) - إكمال الكود**

أكمل هذا الكود CSS لإضافة هامش 20px أعلى وأسفل، 10px يمين ويسار:
Complete this CSS to add 20px margin on top and bottom, 10px on left and right:

```css
.box {
    margin: _______;
}
```

```
الإجابة الصحيحة: margin: 20px 10px;
```

**Question 7 (10 نقاط) - إجابة قصيرة**

اشرح ماذا يعني `padding: 5px 10px 15px 20px;` بكلماتك الخاصة:
Explain what `padding: 5px 10px 15px 20px;` means in your own words:

```
[منطقة النص - Text area]
الإجابة المتوقعة: 5px أعلى، 10px يمين، 15px أسفل، 20px يسار (بدءاً من الأعلى باتجاه عقارب الساعة)
```

### Section 3: Width & Height - العرض والارتفاع (20 نقطة)

**Question 8 (5 نقاط) - اختيار متعدد**

ماذا يفعل `width: auto;`؟
What does `width: auto;` do?

- A) يضع العرض على 0 - Sets width to 0
- B) المتصفح يحسب العرض تلقائياً - Browser calculates the width automatically ✓
- C) يضع العرض على 100% - Sets width to 100%
- D) يجعل العنصر غير مرئي - Makes the element invisible

**Question 9 (10 نقاط) - إجابة قصيرة**

اكتب CSS لتحديد العرض الأدنى 200px والعرض الأقصى 800px:
Write CSS to set minimum width to 200px and maximum width to 800px:

```
[حقل إدخال النص - Text input field]
الإجابة الصحيحة: min-width: 200px; max-width: 800px;
```

**Question 10 (5 نقاط) - اختيار متعدد**

لماذا نستخدم `box-sizing: border-box;`؟
What is `box-sizing: border-box;` used for?

- A) ينشئ حدود حول الصندوق - Creates a border around the box
- B) يشمل الحشو والحدود في حسابات العرض/الارتفاع - Includes padding and border in width/height calculations ✓
- C) يجعل الصندوق غير مرئي - Makes the box invisible
- D) يغير لون الصندوق - Changes the box color

### Section 4: Classes & Divs - الفئات وعناصر التقسيم (25 نقطة)

**Question 11 (10 نقاط) - إكمال الكود**

أكمل هذا HTML لتطبيق فئة CSS تسمى "container":
Complete this HTML to apply a CSS class called "container":

```html
<div _______="container">
    <p>Content here</p>
</div>
```

```
الإجابة الصحيحة: class
```

**Question 12 (10 نقاط) - إجابة قصيرة**

اكتب كود CSS لإنشاء فئة تسمى "card" مع:
Write CSS code to create a class called "card" with:

- حدود حمراء (2px صلبة) - Red border (2px solid)
- حشو 15px - 15px padding
- هامش 10px - 10px margin

```
[منطقة النص - Text area]
الإجابة الصحيحة:
.card {
    border: 2px solid red;
    padding: 15px;
    margin: 10px;
}
```

**Question 13 (5 نقاط) - اختيار متعدد**

لماذا نستخدم عناصر `<div>`؟
Why do we use `<div>` elements?

- A) لإضافة ألوان للنص - To add colors to text
- B) لتجميع العناصر معاً وإنشاء أقسام - To group elements together and create sections ✓
- C) لجعل النص عريض - To make text bold
- D) لإنشاء روابط - To create links

---

### Section 5: CSS Basics – مقدمة في CSS (20 نقطة)

**Question 14 (5 نقاط) - اختيار متعدد**

أي وسم HTML بنستخدمه لربط ملف CSS خارجي؟
Which HTML tag is used to link an external CSS file?

- A) `<script>`
- B) `<style>`
- C) `<link>` ✓
- D) `<meta>`

**Question 15 (5 نقاط) - اختيار متعدد**

أي مُنتقي (selector) بيختار العناصر حسب الفئة (class)؟
Which selector targets elements by their class?

- A) `#idSelector`  
- B) `.classSelector` ✓  
- C) `*` (universal)  
- D) `element`

**Question 16 (10 نقاط) - إجابة قصيرة**

اكتب قاعدة CSS لتغيير لون خلفية الصفحة إلى أصفر.
Write a CSS rule to change the page background to yellow:

```
[منطقة النص]
الإجابة الصحيحة:
body {
    background-color: yellow;
}
```

---

### Section 6: HTML Basics – أساسيات HTML (Session 1) (20 نقطة)

**Question 17 (5 نقاط) - اختيار متعدد**

أي عنصر HTML يحتوي البيانات الوصفية ولا يظهر للزوار؟
Which HTML element contains metadata and is invisible to visitors?

- A) `<body>`
- B) `<head>` ✓
- C) `<footer>`
- D) `<section>`

**Question 18 (5 نقاط) - اختيار متعدد**

ما هو أصغر عنوان فرعي (heading) من العناوين التالية؟
Which is the smallest heading tag below?

- A) `<h2>`
- B) `<h4>`
- C) `<h6>` ✓
- D) `<h1>`

**Question 19 (10 نقاط) - إجابة قصيرة**

اكتب وسم `<!DOCTYPE html>` واشرح دوره في كلمة واحدة.
Write `<!DOCTYPE html>` and describe its role in one word:

```
[حقل إدخال]
الإجابة المتوقعة: Declaration (إعلان)
```

---

### Section 7: Images & Links – الصور واللينكات (Session 2) (20 نقطة)

**Question 20 (5 نقاط) - اختيار متعدد**

أي خاصية لابد استخدامها لوصف الصورة للقارئ ومحركات البحث؟
Which attribute must you use to describe an image for readers and search engines?

- A) `src`
- B) `href`
- C) `alt` ✓
- D) `title`

**Question 21 (10 نقاط) - إكمال الكود**

اكتب كود HTML لعمل رابط يفتح <https://example.com> في نافذة جديدة.
Write HTML code to create a link that opens <https://example.com> in a new tab:

```html
<a href="https://example.com" target="____">Example</a>
```

```
الإجابة الصحيحة: _blank
```

**Question 22 (5 نقاط) - اختيار متعدد**

ماذا يفعل `target="_blank"`؟
What does `target="_blank"` do?

- A) يفتح الرابط في نفس الصفحة  
- B) يفتح الرابط في تبويب/نافذة جديدة ✓  
- C) يفتح ملف PDF  
- D) يضيف تأثير تمرير (scroll)

---

### Section 8: Lists – القوائم (Session 3) (15 نقطة)

**Question 23 (5 نقاط) - اختيار متعدد**

أي وسم يُستخدم لإنشاء قائمة غير مرتبة؟
Which tag is used to create an unordered list?

- A) `<ol>`
- B) `<li>`
- C) `<ul>` ✓
- D) `<dl>`

**Question 24 (5 نقاط) - اختيار متعدد**

أي خاصية في `<ul>` تغيّر شكل الرمز (bullet)؟
Which attribute on `<ul>` changes bullet shape?

- A) `style`
- B) `type` ✓
- C) `class`
- D) `id`

**Question 25 (5 نقاط) - إجابة قصيرة**

اكتب عنصر قائمة واحد داخل `<ol>`.
Write one list item inside `<ol>`:

```html
<ol>
    <li>العنصر الأول</li>
</ol>
```

---

### Section 9: Forms – النماذج (Session 4) (15 نقطة)

**Question 26 (5 نقاط) - اختيار متعدد**

أي نوع حقل يجب استخدامه لجمع عنوان بريد إلكتروني؟
Which input type should you use to collect an email address?

- A) `text`
- B) `number`
- C) `email` ✓
- D) `tel`

**Question 27 (5 نقاط) - إكمال الكود**

أكمل كود HTML لعمل حقل اسم مستخدم داخل نموذج:
Complete the HTML code to create a username field inside a form:

```html
<form>
    <label for="username">اسم المستخدم:</label>
    <input type="text" id="username" name="username" ____>
</form>
```

```
الإجابة الصحيحة: required
```

**Question 28 (5 نقاط) - اختيار متعدد**

أي خاصية يجب أن يساويها `for` في `<label>` مع `<input>`؟
The `for` attribute in `<label>` must match which attribute in `<input>`?

- A) `name`
- B) `placeholder`
- C) `id` ✓
- D) `value`

---

### Section 10: Revision – مراجعة شاملة (Session 5) (10 نقاط)

**Question 29 (5 نقاط) - اختيار متعدد**

أي وسم يُستخدم لكتابة فقرة نصية؟
Which tag is used to write a text paragraph?

- A) `<div>`
- B) `<h1>`
- C) `<p>` ✓
- D) `<span>`

**Question 30 (5 نقاط) - إجابة قصيرة**

اذكر نصيحة واحدة لتحسين تنظيم شيفرة HTML أو CSS من الدروس السابقة.
State one tip to improve HTML/CSS code organization learned in previous sessions:

```
[منطقة النص]
إجابات مختلفة مقبولة (مثلاً: التعليقات، تنسيق الكود، استخدام الفئات)
```

---

## Monitoring & Analytics Strategy

### 1. **Real-time Monitoring**
- **Google Forms Analytics**: Monitor response rate and completion time
- **Live Response Tracking**: Watch submissions come in real-time
- **Question Performance**: Identify which questions students struggle with most

### 2. **Key Metrics to Track**
- **Completion Rate**: % of students who finish the assessment
- **Average Score**: Overall class performance
- **Time Spent**: How long students take per section
- **Question Difficulty**: Which questions have lowest correct answers
- **Common Mistakes**: Patterns in incorrect responses

### 3. **Monitoring Dashboard Setup**
```
Google Forms → Responses Tab → Summary View
- Total responses: X/Y students
- Average score: X%
- Response time: X minutes average
- Question breakdown with correct/incorrect ratios
```

### 4. **Response Analysis**
- **Export to Sheets**: For detailed analysis
- **Filter by Score Range**: Identify students needing help
- **Question-by-Question Review**: See which concepts need reinforcement

### 5. **Follow-up Actions**
- **Low Scores (<60%)**: Schedule individual help sessions
- **Common Wrong Answers**: Plan review session for specific topics
- **High Performers (>90%)**: Provide advanced challenges
- **Class Average**: Adjust next session difficulty accordingly

---

## Google Form Settings Recommendations

### **Collection Settings**
- ✅ Limit to 1 response per person
- ✅ Record email addresses
- ✅ Allow response editing (until deadline)

### **Presentation Settings**
- ✅ Show progress bar
- ✅ Shuffle question order (to prevent cheating)
- ✅ Show correct answers after submission
- ✅ Release grades immediately

### **Response Settings**
- ✅ Collect email addresses
- ✅ Send respondents a copy of their responses
- ✅ Allow response editing
- ✅ See summary charts and text responses

---

## Grading Rubric

| Score Range | Performance Level | Action Required |
|-------------|------------------|-----------------|
| 90-100% | Excellent | Provide advanced exercises |
| 80-89% | Good | Minor review of weak areas |
| 70-79% | Satisfactory | Review specific concepts |
| 60-69% | Needs Improvement | Extra practice + help session |
| Below 60% | Requires Support | Individual tutoring needed |

---

## Post-Assessment Analysis Questions

1. **Which topic had the lowest average score?**
2. **What was the most common mistake?**
3. **How long did students take on average?**
4. **Which students need additional support?**
5. **Should any topics be re-taught in the next session?**

---

## Quick Setup Checklist

- [ ] Create Google Form with questions above
- [ ] Set up proper permissions and settings
- [ ] Test the form yourself first
- [ ] Share form link with students
- [ ] Monitor responses in real-time
- [ ] Export results to Google Sheets for analysis
- [ ] Prepare follow-up based on results

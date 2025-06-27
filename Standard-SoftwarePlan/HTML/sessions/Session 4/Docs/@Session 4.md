---
title: "HTML - Session 4"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: Basic Table Structure (الجداول الأساسية)

<div class="arabic">
الجداول بتستخدم لتنظيم البيانات في صفوف وأعمدة.
</div>

### Subtopic 1: Table, tr, td, th, thead, tbody, tfoot

**Code Example:**
```html
<!-- Basic table -->
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
            <td>USA</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>30</td>
            <td>Spain</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">Total: 2 persons</td>
        </tr>
    </tfoot>
</table>
```

**Explanation (English):**
Tables organize data in rows and columns. The `<thead>`, `<tbody>`, and `<tfoot>` elements group table sections. Table header (`<th>`) cells are distinguished from regular data (`<td>`) cells.

**شرح (عربي):**
الجداول بتنظم البيانات في صفوف وأعمدة. العناصر `<thead>`, `<tbody>`, و`<tfoot>` بتقسم الجدول لأجزاء. `<th>` بتستخدم للعناوين و`<td>` للبيانات العادية.

---

## Topic 2: Spanning Cells (دمج الخلايا)

<div class="arabic">
ممكن تدمج أكتر من خلية في الجدول باستخدام colspan أو rowspan.
</div>

### Subtopic 1: colspan, rowspan, complex tables

**Code Example:**
```html
<!-- Table with column and row spans -->
<table border="1">
    <tr>
        <th>Time</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
    </tr>
    <tr>
        <td>9:00-10:00</td>
        <td>Math</td>
        <td>English</td>
        <td>Science</td>
    </tr>
    <tr>
        <td>10:00-12:00</td>
        <td colspan="2">Workshop</td>
        <td>Art</td>
    </tr>
    <tr>
        <td>12:00-1:00</td>
        <td colspan="3">Lunch</td>
    </tr>
    <tr>
        <td>1:00-3:00</td>
        <td>History</td>
        <td rowspan="2">Project</td>
        <td>Music</td>
    </tr>
    <tr>
        <td>3:00-4:00</td>
        <td>PE</td>
        <td>Computer</td>
    </tr>
</table>
```

**Explanation (English):**
`colspan` and `rowspan` attributes allow cells to span multiple columns or rows, useful for schedules and complex data.

**شرح (عربي):**
`colspan` بتخلي الخلية تمتد على أكتر من عمود، و`rowspan` بتخليها تمتد على أكتر من صف. مفيدة في الجداول المعقدة زي الجداول الزمنية.

---

## Topic 3: Table Accessibility (إتاحة الجداول)

<div class="arabic">
مهم تخلي الجدول سهل الاستخدام لذوي الاحتياجات الخاصة.
</div>

### Subtopic 1: Caption, scope, basic styling, accessibility

**Code Example:**
```html
<!-- Accessible table -->
<table border="1">
    <caption>Monthly Expenses</caption>
    <thead>
        <tr>
            <th scope="col">Category</th>
            <th scope="col">January</th>
            <th scope="col">February</th>
            <th scope="col">March</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Rent</th>
            <td>$1000</td>
            <td>$1000</td>
            <td>$1000</td>
        </tr>
        <tr>
            <th scope="row">Utilities</th>
            <td>$150</td>
            <td>$140</td>
            <td>$130</td>
        </tr>
        <tr>
            <th scope="row">Groceries</th>
            <td>$350</td>
            <td>$375</td>
            <td>$340</td>
        </tr>
    </tbody>
</table>
```

**Explanation (English):**
The `<caption>` provides a title for the table. The `scope` attribute helps screen readers identify row/column headers, improving accessibility for users with disabilities.

**شرح (عربي):**
`<caption>` بتدي عنوان للجدول. خاصية `scope` بتساعد برامج قراءة الشاشة تميز العناوين، وده مهم لذوي الاحتياجات الخاصة.

---

## Practical Exercise

**Instructions (English):**
Create a simple weekly schedule table using `<table>`, `<thead>`, `<tbody>`, and `<tfoot>`. Use `colspan` and `rowspan` where appropriate. Add a caption and make sure your table is accessible.

**التعليمات (عربي):**
اعمل جدول بسيط لجدول الأسبوع باستخدام `<table>`, `<thead>`, `<tbody>`, و`<tfoot>`. استخدم `colspan` و`rowspan` لو محتاج. ضيف عنوان للجدول وخليه متاح لذوي الاحتياجات الخاصة.

---

## Homework

**Instructions (English):**
Create a product comparison table:
- At least 4 products and 5 features
- Use merged cells (colspan/rowspan)
- Add headers and a caption
- Apply basic styling for readability

**التعليمات (عربي):**
اعمل جدول مقارنة بين منتجات:
- على الأقل 4 منتجات و5 مميزات
- استخدم دمج الخلايا (colspan/rowspan)
- ضيف عناوين وجدول عنوان
- ظبط شكل الجدول عشان يكون سهل القراءة 
---
title: "Level 2 - Session 1: Div, Span, Semantic Tags"
author: ---
date: "2025"
---

## Topic 1: Containers in HTML (Div & Span)

<div class="arabic">
شرح حول أهمية الحاويات (div و span) في تنظيم محتوى صفحات الويب.
</div>

### 1. Div

**عنصر Div: لتجميع ال elements.**

```html
<div style="background-color:lightblue; border: 2px solid blue;">

    <h2 style="color:navy;">Blue Box</h2>

	<p>Everything in this box has blue background!</p>
    
    <img src="cloud.jpg" width="100" height="80" alt="Cloud">

</div>
```

---

## Topic 2: semantic 

<div class="arabic">
شرح حول أهمية العناصر الدلالية مثل <code>header</code>، <code>main</code>، <code>section</code>، <code>article</code>، و<code>footer</code> في تحسين تنظيم الصفحة ووضوحها لمحركات البحث والمستخدمين.
</div>

```html
<header style="background-color: red; padding: 10px;">
    
    <h1>My Website</h1>
    
    <nav>
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
    </nav>

</header>



<footer style="background-color: #333; color: white; padding: 10px; text-align: center;">

	<p>© 2025 My Website</p>
</footer>
```

<div class="arabic">
يوضح هذا المثال كيفية استخدام العناصر الدلالية لبناء صفحة ويب منظمة. <code>header</code> يحتوي على عنوان الموقع وروابط التنقل، <code>main</code> يضم القسم الرئيسي والمقال، و<code>footer</code> يعرض حقوق النشر. هذه العناصر تسهل فهم الصفحة لكل من المستخدمين ومحركات البحث.
</div>

---


## 3. CSS 

**style attribute: لتطبيق CSS مباشرة على العناصر.**

```html
<div style="color: green;">This text is green!</div>
```

<div class="arabic">
خاصية <code>style</code> تتيح لك إضافة تعليمات CSS مباشرة داخل الوسم. في المثال، تم تغيير لون النص إلى الأخضر.
</div>

---

### 2. color

**color: لتغيير لون النص داخل العنصر.**

```html
<p style="color: red;">This is a red text.</p>
```


---

### 3. background-color

**background-color: لتغيير لون خلفية العنصر.**

```html
<div style="background-color: yellow;">Yellow background</div>
```

<div class="arabic">
<code>background-color</code> تُستخدم لتغيير لون خلفية العنصر. في المثال، الخلفية صفراء.
</div>

---

### 4. Box Model

**Box Model: يحدد كيفية عرض العناصر (المحتوى، الحشوة، الحدود، والهامش).**

```html
<div style="background-color: #red; padding: 10px; border: 2px solid #333; margin: 15px;">
  Box Model Example
</div>
```

- ![[Pasted image 20250526200508.png]]
---

### 5. padding

**padding: المسافة الداخلية بين محتوى العنصر وحدوده.**

```html
<div style="background-color: #f9c; padding: 20px;">With Padding</div>
```

---

### 6. border

**border: إضافة حدود حول العنصر.**

```html
<div style="border: 3px dashed blue;">Dashed Blue Border</div>
```

<div class="arabic">
 <code>border</code> تُستخدم لإضافة حدود حول العنصر. في المثال، هناك حدود زرقاء متقطعة بسُمك 3 بكسل.
</div>

---

### 7. margin

**margin: المسافة الخارجية بين العنصر والعناصر الأخرى.**

```html
<div style="background: #eee; margin: 30px;">With Margin</div>
```

<div class="arabic">
 <code>margin</code> تضيف مسافة خارجية حول العنصر، مما يبعده عن العناصر الأخرى. في المثال، هناك هامش 30 بكسل حول الصندوق.
</div>

---


<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها 
</div>

1. **Div Element**: General container for grouping content  
   <div class="arabic">عنصر Div: حاوية عامة لتجميع العناصر</div>

2. **Semantic Tags**: header, main, section, article, footer  
   <div class="arabic">العناصر الدلالية: header, main, section, article, footer</div>

3. **style Attribute**: Inline CSS styling  
   <div class="arabic">خاصية style: تنسيق العناصر مباشرة داخل الوسم</div>

4. **color**: Changing text color  
   <div class="arabic">خاصية color: تغيير لون النص</div>

5. **background-color**: Changing background color  
   <div class="arabic">خاصية background-color: تغيير لون الخلفية</div>

6. **Box Model**: Content, padding, border, margin  
   <div class="arabic">الصندوق النموذجي: المحتوى، الحشوة، الحدود، الهامش</div>

7. **padding**: Space inside the element  
   <div class="arabic">خاصية padding: المسافة الداخلية</div>

8. **border**: Element border styling  
   <div class="arabic">خاصية border: إضافة حدود حول العنصر</div>

9. **margin**: Space outside the element  
   <div class="arabic">خاصية margin: المسافة الخارجية حول العنصر</div> 
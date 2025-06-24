---
title: "Level 2 - Session 3: Fun with CSS Styling"
author: ---
date: "2025"
---

## Topic 1: Making Beautiful Backgrounds

<div class="arabic">
شرح حول كيفية إضافة صور خلفية جميلة وتكرارها بطرق مختلفة.
</div>

### 1. Background Image

**background-image: لإضافة صورة كخلفية للعنصر.**

```html
<div style="background-image: url('stars.jpg'); padding: 50px; color: white;">
    Look at the beautiful stars behind me!
</div>
```

### 2. Background Repeat

**background-repeat: للتحكم في تكرار الصورة.**

```html
<!-- صورة تتكرر في كل الاتجاهات -->
<div style="background-image: url('flower.jpg'); background-repeat: repeat; height: 200px;">
    Flowers everywhere!
</div>

<!-- صورة لا تتكرر -->
<div style="background-image: url('flower.jpg'); background-repeat: no-repeat; height: 200px;">
    Just one flower!
</div>
```

### 3. Background Size

**background-size: للتحكم في حجم الصورة الخلفية.**

```html
<!-- auto: الحجم الطبيعي للصورة -->
<div style="
    background-image: url('butterfly.jpg');
    background-repeat: no-repeat;
    background-size: auto;
    height: 200px;
    border: 1px solid black;
">
    Natural Size
</div>

<!-- contain: تظهر الصورة كاملة داخل العنصر -->
<div style="
    background-image: url('butterfly.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    height: 200px;
    border: 1px solid black;
">
    Fits Complete Image
</div>

<!-- cover: تملأ الصورة كل العنصر -->
<div style="
    background-image: url('butterfly.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    border: 1px solid black;
">
    Fills Entire Space
</div>
```

<div class="arabic">
تخيل أن لديك ملصق (الصورة) وورقة (العنصر):
- auto: حجم الملصق كما هو
- contain: الملصق يصغر ليظهر كاملاً على الورقة
- cover: الملصق يملأ الورقة كاملة
</div>

---

## Topic 2: Fun with Borders

<div class="arabic">
شرح حول كيفية إضافة حدود جميلة ومتنوعة للعناصر.
</div>

### 1. Border Styles

**border-style: لإضافة أنماط مختلفة للحدود.**

```html
<div style="border-style: dashed; padding: 10px; margin: 5px;">
    Dashed border - - - -
</div>

<div style="border-style: dotted; padding: 10px; margin: 5px;">
    Dotted border . . . .
</div>

<div style="border-style: double; padding: 10px; margin: 5px;">
    Double border ═══
</div>
```

### 3. Border Styles Explained

**كل نوع من أنواع الحدود له شكل مميز:**

```html
<!-- متقطع كالشرطات -->
<div style="
    border-style: dashed;
    border-width: 5px;
    padding: 10px;
    margin: 5px;
">
    Dashed: - - - -
</div>

<!-- متقطع كالنقاط -->
<div style="
    border-style: dotted;
    border-width: 5px;
    padding: 10px;
    margin: 5px;
">
    Dotted: • • • •
</div>

<!-- خطان متوازيان -->
<div style="
    border-style: double;
    border-width: 5px;
    padding: 10px;
    margin: 5px;
">
    Double: ═══
</div>
```

<div class="arabic">
تخيل أنك ترسم إطاراً:
- dashed: كأنك ترسم خطوطاً متقطعة
- dotted: كأنك ترسم نقاطاً متتالية
- double: كأنك ترسم خطين متوازيين
</div>

### 2. Border Shorthand

**border: طريقة سريعة لتحديد كل خصائص الحدود في سطر واحد.**

```html
<!-- Width Style Color -->
<div style="border: 5px solid purple;">
    Purple border in one line!
</div>
```

---

## Topic 3: Magic Shadows

<div class="arabic">
شرح حول كيفية إضافة ظلال جميلة للعناصر لتبدو وكأنها تطفو.
</div>

### 1. Box Shadow

**box-shadow: لإضافة ظل للعنصر.**

```html
<!-- ظل بسيط -->
<div style="box-shadow: 5px 5px 10px gray; padding: 20px; margin: 20px;">
    I'm floating!
</div>

<!-- ظل ملون -->
<div style="box-shadow: 0 0 20px pink; padding: 20px; margin: 20px;">
    Pink glow!
</div>
```

### Box Shadow Explained

**box-shadow: يتكون من أربعة أجزاء:**

```html
<!-- 
    box-shadow: [أفقي] [عمودي] [تشويش] [لون];
    - أفقي: المسافة يميناً (+) أو يساراً (-)
    - عمودي: المسافة لأسفل (+) أو لأعلى (-)
    - تشويش: مدى انتشار الظل
    - لون: لون الظل
-->

<!-- ظل للأسفل واليمين -->
<div style="
    box-shadow: 10px 10px 5px gray;
    padding: 20px;
    margin: 20px;
    background: white;
">
    Shadow Down-Right
</div>

<!-- ظل للأسفل واليسار -->
<div style="
    box-shadow: -10px 10px 5px gray;
    padding: 20px;
    margin: 20px;
    background: white;
">
    Shadow Down-Left
</div>

<!-- ظل منتشر في كل الاتجاهات -->
<div style="
    box-shadow: 0 0 20px pink;
    padding: 20px;
    margin: 20px;
    background: white;
">
    Glowing Effect
</div>
```

<div class="arabic">
تخيل أنك تضع مصباحاً:
- القيمة الأولى (0): موقع المصباح يميناً أو يساراً
- القيمة الثانية (0): موقع المصباح أعلى أو أسفل
- القيمة الثالثة (20px): قوة إضاءة المصباح
- القيمة الرابعة (pink): لون الضوء
</div>

---

## Topic 4: Playing with Text

<div class="arabic">
شرح حول كيفية تغيير شكل وحجم ونوع الخط.
</div>

### 1. Font Family

**font-family: لاختيار نوع الخط.**

```html
<div style="font-family: 'Comic Sans MS'; margin: 10px;">
    Fun Comic Sans Text!
</div>

<div style="font-family: Arial; margin: 10px;">
    Clean Arial Text
</div>
```

### 5. Fun Font Families

**font-family: أمثلة لخطوط جميلة وسهلة القراءة:**

```html
<!-- خط مرح للأطفال -->
<div style="font-family: 'Comic Sans MS'; font-size: 20px; margin: 10px;">
    Hello! I'm fun and friendly! 😊
</div>

<!-- خط رسمي وأنيق -->
<div style="font-family: 'Georgia'; font-size: 20px; margin: 10px;">
    Hello! I'm elegant and formal!
</div>

<!-- خط بسيط وواضح -->
<div style="font-family: 'Arial'; font-size: 20px; margin: 10px;">
    Hello! I'm clean and simple!
</div>

<!-- خط يشبه الكتابة باليد -->
<div style="font-family: 'Segoe Script', cursive; font-size: 20px; margin: 10px;">
    Hello! I'm handwritten!
</div>
```

<div class="arabic">
أنواع الخطوط مثل الملابس:
- Comic Sans MS: مثل ملابس اللعب - مرح وودود
- Georgia: مثل الملابس الرسمية - أنيق ورسمي
- Arial: مثل الملابس اليومية - بسيط وواضح
- Segoe Script: مثل الكتابة باليد - شخصي وفني
</div>

### 2. Font Size

**font-size: لتغيير حجم الخط.**

```html
<div style="font-size: 12px; margin: 5px;">Small text</div>
<div style="font-size: 24px; margin: 5px;">Big text</div>
<div style="font-size: 36px; margin: 5px;">Bigger text!</div>
```

### 3. Font Style

**font-style: لجعل النص مائل.**

```html
<div style="font-style: italic; margin: 5px;">
    Italic text looks fancy!
</div>
```

### 4. Font Weight

**font-weight: لجعل النص سميك.**

```html
<div style="font-weight: bold; margin: 5px;">
    Bold text is strong!
</div>
```

---

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها
</div>

1. **Background Image**: Adding pictures as backgrounds  
   <div class="arabic">خلفية الصورة: إضافة صور كخلفيات</div>

2. **Background Repeat**: Controlling image repetition  
   <div class="arabic">تكرار الخلفية: التحكم في تكرار الصور</div>

3. **Border Styles**: Different types of borders  
   <div class="arabic">أنماط الحدود: أنواع مختلفة من الحدود</div>

4. **Border Shorthand**: Quick way to set borders  
   <div class="arabic">اختصار الحدود: طريقة سريعة لتعيين الحدود</div>

5. **Box Shadow**: Adding floating effects  
   <div class="arabic">ظل العنصر: إضافة تأثيرات الظل</div>

6. **Font Family**: Choosing text style  
   <div class="arabic">نوع الخط: اختيار نمط النص</div>

7. **Font Size**: Making text bigger or smaller  
   <div class="arabic">حجم الخط: تكبير أو تصغير النص</div>

8. **Font Style**: Making text italic  
   <div class="arabic">نمط الخط: جعل النص مائل</div>

9. **Font Weight**: Making text bold  
   <div class="arabic">سمك الخط: جعل النص سميك</div>





margin 
padding 
border
background-image 
font-size
font-family
image width , height

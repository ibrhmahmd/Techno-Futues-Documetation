---
title: "CSS Box Model - Session 2"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: CSS Box Model

<div class="arabic">
نموذج الصندوق في CSS وكيفية التحكم في المساحات حول العناصر
</div>

### Subtopic 1: Border & Border Radius (الحدود وزوايا الحدود)

<div class="arabic">
شرح مبسط عن الحدود وكيفية التحكم في سماكتها وشكلها وزواياها.
</div>

```html
<style>
  .box {
    /* Border shorthand: width style color */
    border: 2px solid black;
    
    /* Individual border properties */
    border-width: 2px;      /* Thickness of the border */
    border-style: solid;    /* Style of the border */
    border-color: black;    /* Color of the border */
    
    /* Border radius for rounded corners */
    border-radius: 20px;    /* Makes corners rounded */
  }
  
</style>





```
---
### Subtopic 2: Margin & Padding (الهامش والحشو)

<div class="arabic">
شرح مبسط عن الهامش والحشو وكيفية استخدامها للتحكم في المسافات داخل وخارج العناصر.
</div>

```html
<style>
  .box {
    /* See tables below for margin and padding syntax */
  }
</style>
```
<div class="arabic">
- `border` يحدد عرض ونمط ولون حدود العنصر
- `border-style` يحدد نمط الحدود (صلب، منقط، متقطع، مزدوج، إلخ)
- `border-radius` يجعل زوايا العنصر دائرية
- يمكن تخصيص كل جانب من جوانب الحدود بشكل منفصل
</div>


**Border Styles Table:**

| Style | Description |
|-------|-------------|
| Solid | خط مستمر - Continuous line |
| Dotted | سلسلة من النقاط - Series of dots |
| Dashed | سلسلة من الخطوط المتقطعة - Series of dashes |
| Double | خطان متوازيان - Two parallel lines |
| Groove | حدود ثلاثية الأبعاد منحوتة - 3D grooved border |
| Ridge | حدود ثلاثية الأبعاد بارزة - 3D ridged border |
| Inset | حدود ثلاثية الأبعاد غائرة - 3D inset border |
| Outset | حدود ثلاثية الأبعاد بارزة للخارج - 3D outset border |
| None | بدون حدود - No border |
| Hidden | حدود مخفية - Hidden border |


**Margin Syntax Table:**

| Syntax | Description | Example |
|--------|-------------|----------|
| `margin: 20px;` | جميع الجهات - All sides | نفس الهامش على الجهات الأربع - Same margin on all 4 sides |
| `margin: 10px 20px;` | أعلى/أسفل يمين/يسار - Top/Bottom Right/Left | عمودي: 10px، أفقي: 20px - Vertical: 10px, Horizontal: 20px |
| `margin: 10px 20px 30px;` | أعلى يمين/يسار أسفل - Top Right/Left Bottom | أعلى: 10px، جوانب: 20px، أسفل: 30px - Top: 10px, Sides: 20px, Bottom: 30px |
| `margin: 5px 10px 15px 20px;` | أعلى يمين أسفل يسار - Top Right Bottom Left | بدءاً من الأعلى باتجاه عقارب الساعة - Clockwise from top |
| `margin-top: 10px;` | جانب فردي - Individual side | الهامش العلوي فقط - Only top margin |
| `margin-right: 20px;` | جانب فردي - Individual side | الهامش الأيمن فقط - Only right margin |
| `margin-bottom: 30px;` | جانب فردي - Individual side | الهامش السفلي فقط - Only bottom margin |
| `margin-left: 20px;` | جانب فردي - Individual side | الهامش الأيسر فقط - Only left margin |

**Padding Syntax Table:**

| Syntax | Description | Example |
|--------|-------------|----------|
| `padding: 15px;` | جميع الجهات - All sides | نفس الحشو على الجهات الأربع - Same padding on all 4 sides |
| `padding: 10px 20px;` | أعلى/أسفل يمين/يسار - Top/Bottom Right/Left | عمودي: 10px، أفقي: 20px - Vertical: 10px, Horizontal: 20px |
| `padding: 10px 20px 30px;` | أعلى يمين/يسار أسفل - Top Right/Left Bottom | أعلى: 10px، جوانب: 20px، أسفل: 30px - Top: 10px, Sides: 20px, Bottom: 30px |
| `padding: 5px 10px 15px 20px;` | أعلى يمين أسفل يسار - Top Right Bottom Left | بدءاً من الأعلى باتجاه عقارب الساعة - Clockwise from top |
| `padding-top: 10px;` | جانب فردي - Individual side | الحشو العلوي فقط - Only top padding |
| `padding-right: 20px;` | جانب فردي - Individual side | الحشو الأيمن فقط - Only right padding |
| `padding-bottom: 15px;` | جانب فردي - Individual side | الحشو السفلي فقط - Only bottom padding |
| `padding-left: 20px;` | جانب فردي - Individual side | الحشو الأيسر فقط - Only left padding |

<div class="arabic">
#### Margin (الهامش)
- المسافة خارج حدود العنصر
- يخلق مساحة بين العنصر والعناصر المحيطة به
- لا يملك لون خلفية
- يمكن أن يكون بقيم سلبية (يقلص المساحة)
- يؤثر على المساحة حول العنصر

#### Padding (الحشو)
- المسافة بين محتوى العنصر وحدوده
- يزيد من حجم العنصر الداخلي
- يظهر بلون الخلفية
- لا يمكن أن يكون بقيم سلبية
- يؤثر على المساحة داخل العنصر
</div>

---

### Subtopic 3: Width & Height (العرض والارتفاع)

<div class="arabic">
شرح مبسط عن خصائص العرض والارتفاع وكيفية تحديد أبعاد العناصر.
</div>

```html
<style>
  .box {
    /* Fixed dimensions */
    width: 200px;
    height: 150px;
    
    /* See table below for width and height properties */
    
    /* Box sizing */
    box-sizing: border-box;  /* Includes padding and border in width/height */
  }
</style>
```

**Width and Height Properties Table:**

| Property | Example | Description |
|----------|---------|-------------|
| `width` | `width: 200px;` | عرض ثابت بالبكسل - Fixed width in pixels |
| `width` | `width: 50%;` | 50% من عرض العنصر الأب - 50% of parent's width |
| `width` | `width: auto;` | المتصفح يحسب العرض - Browser calculates width |
| `min-width` | `min-width: 100px;` | قيد العرض الأدنى - Minimum width constraint |
| `max-width` | `max-width: 500px;` | قيد العرض الأقصى - Maximum width constraint |
| `height` | `height: 150px;` | ارتفاع ثابت بالبكسل - Fixed height in pixels |
| `height` | `height: 25vh;` | 25% من ارتفاع نافذة المتصفح - 25% of viewport height |
| `height` | `height: 100%;` | يأخذ ارتفاع العنصر الأب - Takes parent's height |
| `min-height` | `min-height: 100px;` | قيد الارتفاع الأدنى - Minimum height constraint |
| `max-height` | `max-height: 300px;` | قيد الارتفاع الأقصى - Maximum height constraint |
| `box-sizing` | `box-sizing: border-box;` | يشمل الحشو والحدود في الأبعاد - Includes padding and border in dimensions |

<div class="arabic">
#### Width (العرض)
- يحدد عرض مساحة المحتوى للعنصر
- يمكن تحديده بوحدات ثابتة (بكسل) أو نسب مئوية
- `auto` (افتراضي) - المتصفح يحسب العرض
- `inherit` - يرث قيمة الخاصية من العنصر الأب
- `max-width` و `min-width` للتحكم في أقصى وأقل عرض


## Topic 2: Using Classes and Divs

<div class="arabic">
كيفية استخدام الفئات والعناصر لتطبيق التنسيق
</div>

### Subtopic 4: Classes (الفئات)

**[الفئات في CSS]**

```html
<style>
  .paragraph {
    color: red;
    background-color: blue;
    padding: 5px;
    margin: 20px;
  }
</style>

<p class="paragraph">This is a styled paragraph</p>
```

<div class="arabic">
- الفئات تستخدم لتطبيق أنماط متعددة على عناصر مختلفة
- يتم تعريفها بنقطة قبل اسم الفئة (.)
</div>

---

### Subtopic 5: Div Elements (عناصر التقسيم)

**[عناصر التقسيم]**

```html
<style>
  .container {
    border: 5px solid red;
    border-radius: 20px;
    padding: 15px;
    margin: 10px 0;
  }
</style>

<div class="container">
  <p>This is inside a container</p>
</div>
```

<div class="arabic">
- `div` عنصر حاوية لتجميع العناصر معاً
- مفيد لإنشاء أقسام في الصفحة
- يمكن تنسيقه باستخدام خصائص الصندوق
</div>




---

## Helpful Resources

- [MDN Web Docs - The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [CSS-Tricks - A Complete Guide to the CSS Box Model](https://css-tricks.com/the-css-box-model/)
- [W3Schools - CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
- [CSS Reference - Box Model](https://cssreference.io/box-model/)
- [MDN - Border Style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
- [CSS-Tricks - A Complete Guide to Border](https://css-tricks.com/almanac/properties/b/border/)

---

## 🔨 Practice Task: Style a Mini Card Grid

<div class="arabic">
### مهمة تدريبية
اصنع شبكة (grid) فيها خمس عناصر، وكل عنصر له فئة (class) مختلفة ولون/حدود/حشو مختلف. استخدم أكثر من فئة CSS للتحكم في الأنماط.
</div>

### المتطلبات
1. أنشئ **٨ عناصر HTML** مثل `div` أو `p` أو أي عنصر يناسبك.  
2. استخدم **٣ فئات (class) أو أكثر** – مثال: `.card`، `.highlight`، `.special`.  
3. Assign at least one unique property to each element: **border color/style, margins, padding, width, or background**.  
4. رتِّب العناصر في عمود أو شبكة (grid) بسيطة لعرضها بشكل منظم.



💡 **Hint / تلميح**:  
Apply multiple classes by separating them with a space, e.g., `<div class="card special">` to combine styles!  
استخدم أكثر من فئة في نفس العنصر عن طريق مسافة بين أسماء الفئات.


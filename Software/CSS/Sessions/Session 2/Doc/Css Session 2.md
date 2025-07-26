---
title: "CSS - Session 2: Box Model & Basic Styling"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---
## Topic 1: The CSS Box Model (نموذج الصندوق في CSS)

<div class="arabic">
شرح فكرة نموذج الصندوق في CSS وكيفية التحكم في المساحات حول العناصر.
</div>

### Subtopic 1: Understanding the Box Model (فهم نموذج الصندوق)

- كل عنصر في HTML عبارة عن صندوق (box) يتكون من:
  - المحتوى (Content)
  - الحشوة (Padding)
  - الحدود (Border)
  - الهامش (Margin)
- مثال توضيحي:

```css
.box {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
```

### Subtopic 2: Using DevTools to Inspect Box Model

- كيفية فحص نموذج الصندوق في أدوات المطورين
- قراءة قياسات العناصر بدقة
- التعديل المباشر على القيم لمشاهدة التغييرات

---

## Topic 2: Width, Height & Box-Sizing (العرض، الارتفاع وتحديد الحجم)

### Subtopic 1: Setting Dimensions (تحديد الأبعاد)

- استخدام `width` و`height`
- القيم المطلقة (px) والنسبية (%)
- `min-width` و `max-width`
- `min-height` و `max-height`

### Subtopic 2: Box-Sizing Property (خاصية تحديد الحجم)

- `content-box` (الافتراضي)
- `border-box` (الأكثر استخداماً)
- مثال:

```css
* {
    box-sizing: border-box; /* يجعل الحسابات أسهل */
}
```

---

## Topic 3: Display Property (خاصية العرض)

### Subtopic 1: Display Values (قيم خاصية العرض)

- `block` (كتابة من سطر جديد)
- `inline` (في نفس السطر)
- `inline-block` (دمج المميزات)
- `none` (إخفاء العنصر)

### Subtopic 2: Practical Examples (أمثلة عملية)

```css
.inline-example {
    display: inline;
    width: 100px; /* لن يعمل مع display: inline */
}

.inline-block-example {
    display: inline-block;
    width: 100px; /* سيعمل مع inline-block */
}
```

---

## Topic 4: CSS Color Systems (أنظمة الألوان في CSS)

<div class="arabic">
شرح لأنظمة الألوان المختلفة في CSS وكيفية استخدامها.
</div>

### Subtopic 1: Color Formats (تنسيقات الألوان)

- **Hexadecimal** (سداسي عشري)
  - الصيغة: `#RRGGBB` أو `#RGB`
  - مثال: `#ff0000` (أحمر), `#0f0` (أخضر فاتح)
  - تدعم 16,777,216 لون

- **RGB** (أحمر، أخضر، أزرق)
  - الصيغة: `rgb(red, green, blue)`
  - كل قيمة من 0 إلى 255
  - مثال: `rgb(255, 0, 0)` (أحمر)

- **RGBA** (RGB مع الشفافية)
  - الصيغة: `rgba(red, green, blue, alpha)`
  - قيمة alpha من 0 (شفاف) إلى 1 (معتم)
  - مثال: `rgba(255, 0, 0, 0.5)` (أحمر شفاف)

- **HSL** (درجة اللون، التشبع، الإضاءة)
  - الصيغة: `hsl(hue, saturation%, lightness%)`
  - hue: 0-360 (درجة اللون)
  - saturation: 0%-100% (التشبع)
  - lightness: 0%-100% (الإضاءة)
  - مثال: `hsl(120, 100%, 50%)` (أخضر نقي)

### Subtopic 2: Comparison & Best Practices (مقارنة وأفضل الممارسات)

| Format     | When to Use                      | Example                     |
|------------|----------------------------------|-----------------------------|
| Hex        | ألوان ثابتة بدون شفافية         | `#1a73e8` (أزرق جوجل)      |
| RGB        | عند الحاجة إلى ديناميكية الألوان | `rgb(66, 133, 244)`        |
| RGBA       | عند الحاجة إلى الشفافية         | `rgba(66, 133, 244, 0.7)`  |
| HSL        | عند تعديل درجات اللون بسهولة    | `hsl(217, 89%, 61%)`       |

### Practical Example (مثال عملي)

```css
/* استخدام أنظمة الألوان المختلفة */
.primary {
    color: #1a73e8;                /* هيكس */
    background-color: rgb(26, 115, 232);  /* RGB */
}

.overlay {
    background-color: rgba(0, 0, 0, 0.5); /* خلفية شفافة */
}

.button {
    background-color: hsl(217, 89%, 61%);  /* HSL */
    transition: background-color 0.3s;
}

.button:hover {
    background-color: hsl(217, 89%, 71%);  /* لون أفتح */
}
```

---

## Table: Box Model Properties (خصائص نموذج الصندوق)

| Property       | Example Value        | What it Does (English)        | شرح بالعربي                |
|----------------|----------------------|-------------------------------|----------------------------|
| width          | 200px, 50%           | Element width                 | عرض العنصر                 |
| height         | 100px, auto          | Element height                | ارتفاع العنصر              |
| padding        | 10px, 10px 20px      | Space inside border           | المسافة الداخلية           |
| margin         | 20px, 0 auto         | Space outside border          | المسافة الخارجية           |
| border         | 1px solid black      | Border style                  | إطار العنصر                |
| box-sizing     | border-box           | Box model calculation method  | طريقة حساب أبعاد العنصر    |
| display        | block, inline, none  | How element is displayed      | كيفية عرض العنصر           |

---

## Practical Exercise (تدريب عملي)

1. قم بإنشاء 3 صناديق (divs) بمواصفات مختلفة:
   - الأول: عرض 200px، ارتفاع 100px، حدود حمراء
   - الثاني: عرض 50% من الصفحة، حشوة 20px
   - الثالث: عرض 300px، هامش 20px، حدود منقطة

2. استخدم `box-sizing: border-box` ولاحظ الفرق

3. جرب تغيير `display` للعناصر وشاهد التغيير

---

## Homework (الواجب المنزلي)

1. أنشئ صفحة تحتوي على:
   - رأس (header) بعرض كامل الصفحة
   - عمود جانبي (sidebar) بعرض 25%
   - محتوى رئيسي (main content) بعرض 75%
   - تذييل (footer) بعرض كامل الصفحة

2. استخدم `box-sizing: border-box` لجميع العناصر

3. أضف هوامش وحشوات مناسبة

4. استخدم `margin: 0 auto` لمركزة المحتوى الرئيسي

---

## Useful Resources (مصادر مفيدة)

- [MDN Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [CSS Tricks - Box Sizing](https://css-tricks.com/box-sizing/)
- [W3Schools Display Property](https://www.w3schools.com/cssref/pr_class_display.asp)

---

## Next Session Preview (معاينة الجلسة القادمة)

في الجلسة القادمة سنتعلم عن:
- الألوان والخلفيات
- التدرجات اللونية
- تأثيرات الحدود
- الظلال
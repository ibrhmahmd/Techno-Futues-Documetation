---
title: "CSS Layout Basics - Session 5 (Part 2)"
author: "---"
date: "2025-08-09"
---

## Topic 1: Hover Effect

<div class="arabic">
تأثير الـ Hover لتغيير مظهر العنصر عند مرور مؤشر الفأرة عليه
</div>

### مثال

```html
<button class="btn">TEST</button>
<img src="https://placehold.co/600x400" class="image" />
```

```css
.btn:hover {
  background-color: blue;
  width: 150px;
  height: 50px;
  color: red;
}

.image:hover {
  box-shadow: 0 0 8px #3498db, 0 0 16px #3498db;
}
```

<div class="arabic">
عند مرور المؤشر على الزر أو الصورة يتغير اللون أو يُضاف ظل مميز لإبراز العنصر.
</div>

---

## Topic 2: Flexbox Basics

<div class="arabic">
مقدمة عن Flexbox لتنظيم العناصر داخل الحاويات بسهولة والتحكم باتجاهها ومحاذاتها.
</div>

### Subtopic 1: `display: flex;`

**English**: Turns the parent into a flex-container enabling flexbox layout.

<div class="arabic">
يحوِّل العنصر الأب إلى حاوية Flex بحيث يمكن تطبيق خصائص Flexbox على عناصره.
</div>

```css
.u-list1,
.u-list2,
.u-list3,
.u-list4 {
  display: flex;
}
```

### Subtopic 2: `flex-direction`

| Value | Effect |
|-------|--------|
| row *(default)* | Items flow horizontally left → right |
| column | Items flow vertically top → bottom |

<div class="arabic">
تحدد اتجاه تدفق العناصر أفقيًا أو عموديًا.
</div>

```css
.u-list4 {
  display: flex;
  flex-direction: row; /* يمكن تغييرها إلى column */
}
```

### Subtopic 3: `justify-content`

`justify-content` controls horizontal distribution (main-axis) of flex items.

| Class   | Rule                         | Visual Result |
|---------|-----------------------------|---------------|
| `.u-list1` | `justify-content: space-between;` | أكبر مسافة بين العناصر | 
| `.u-list2` | `justify-content: space-around;`  | مسافات متساوية حول كل عنصر |
| `.u-list3` | `justify-content: center;`        | جميع العناصر في الوسط |

```css
.u-list1 { justify-content: space-between; }
.u-list2 { justify-content: space-around;  }
.u-list3 { justify-content: center;        }
```

### Subtopic 4: `align-items`

Aligns items on the cross-axis (vertical when `flex-direction: row`).

```css
.u-list4 {
  height: 700px;
  display: flex;
  align-items: center; /* يوسّط العناصر عموديًا */
}
```

<div class="arabic">
تسمح `align-items` بالتحكم في محاذاة العناصر عموديًا داخل الحاوية.
</div>

---

## Practical Exercise

<div class="arabic">
طبّق الخصائص السابقة على قائمة من العناصر وجرّب تغيير القيم لملاحظة الفرق.
</div>

```html
<ul class="u-list2">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```

1. بدّل بين قيم `justify-content` لرؤية تغيّر توزيع العناصر.
2. غيّر `flex-direction` إلى `column` ولاحظ تغيّر اتجاه القائمة.

---

## Key Concepts Covered

<div class="arabic">
المفاهيم الأساسية التي تم تناولها في هذه الجلسة:
</div>

1. **Hover Effect** – تغيير مظهر العنصر عند المرور عليه.
2. **display: flex** – تفعيل وضع Flexbox.
3. **flex-direction** – تحديد اتجاه العناصر.
4. **justify-content** – توزيع العناصر على المحور الرئيسي.
5. **align-items** – محاذاة العناصر على المحور المتقاطع.

---

## Advanced Notes

<div class="arabic">
يمكن دمج خصائص Flexbox مع تأثيرات Hover لإنشاء واجهات تفاعلية وأنيقة.
</div>

---

## Your Task

<div class="arabic">
استخدم الخصائص التي تعلمناها لبناء صفحة بسيطة تعرض ثلاث بطاقات في صف واحد.
</div>

1. أنشئ حاوية رئيسية وتطبق عليها `display: flex`.
2. استخدم `justify-content: space-between` و `align-items: center` لمحاذاة البطاقات.
3. اجعل لكل بطاقة **تأثير Hover** (مثل تغيير اللون أو إضافة ظل).
4. غيّر اتجاه البطاقات إلى عمودي عند عرض الشاشة أقل من 600px باستخدام `flex-direction: column` داخل media query.

> حاول تنفيذ المهمة ثم شاركنا النتيجة!

---

## Resources

<div class="arabic">
مصادر إضافية للتعمق في خصائص Flexbox و تأثيرات Hover:
</div>

| Topic | Link |
|-------|------|
| CSS `:hover` | https://developer.mozilla.org/en-US/docs/Web/CSS/:hover |
| Flexbox Guide | https://css-tricks.com/snippets/css/a-guide-to-flexbox/ |
| `justify-content` | https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content |
| `align-items` | https://developer.mozilla.org/en-US/docs/Web/CSS/align-items |
| `flex-direction` | https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction |
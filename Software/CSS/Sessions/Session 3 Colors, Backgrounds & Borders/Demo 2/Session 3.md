# CSS Session 3 : Shadows & Spacing

## Topic 1: Shadows (الظلال)

<div class="arabic">
الظلال بتخلي الحاجات على الصفحة تبان كأنها حقيقية. كمان بتساعدنا نعرف إيه أهم وإيه أقل.
</div>

### 1️⃣ Box Shadow (ظل الصندوق)

<div class="arabic">
box-shadow بيضيف ظل حوالين مربع العنصر.  
الظل ممكن يكون:
- **خارجي** (برا العنصر)
- **داخلي** (جوه العنصر باستخدام `inset`)
</div>

```css
/* مثال بسيط */
.box {
  box-shadow: 3px 3px 5px blue; /* ازاحة X، ازاحة Y، ضبابية، اللون */
}
````

* **ماذا يعمل:**
  بيضيف ظل حوالين المربع عشان يبان مرتفع أو 3D.
  ممكن تضيف أكتر من ظل واحد.

* **نصائح:**
  الظلال الخفيفة شكلها حلو.
  الظلال الكبيرة ممكن تخلي الصفحة تقيلة.

* **أمثلة:**

```css
/* ظل خفيف */
.card {
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

/* ظل داخلي */
.input {
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.2);
}
```

---

### 2️⃣ Text Shadow (ظل النص)

<div class="arabic">
text-shadow بيضيف ظل للنص.  
ممكن يخلي النص يلمع أو يبان أوضح.
</div>

```css
/* مثال */
.title {
  text-shadow: 1px 1px 2px gray;
}
```

* **ماذا يعمل:**
  بيخلي النص يبان فوق الخلفية وأوضح.

* **نصائح:**
  استعمل ظل صغير للنصوص الكبيرة.
  الظلال الكبيرة ممكن تخلي القراءة صعبة.

* **أمثلة:**

```css
/* نص سهل يقراه */
.heading {
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

/* تأثير توهج */
.neon {
  color: #39f;
  text-shadow: 0 0 6px rgba(51,153,255,0.7);
}
```

---

## Topic 2: Typographic Spacing (تباعد النص)

<div class="arabic">
تباعد النص يعني المسافة بين السطور والحروف والكلمات.  
بيخلي القراءة أسهل والصفحة مرتبة.
</div>

### 3️⃣ Line Height (ارتفاع السطر)

<div class="arabic">
line-height بيحدد المسافة بين سطر وسطر.
</div>

```css
p {
  line-height: 1.5; /* المسافة بين السطور */
}
```

* **نصائح:**
  النص العادي: 1.4–1.7
  العناوين: 1.1–1.4
  ما تخليش السطور ضيقة أوي أو بعيدة أوي.

---

### 4️⃣ Letter Spacing (تباعد الحروف)

<div class="arabic">
letter-spacing بيحدد المسافة بين الحروف.
</div>

```css
h1 {
  letter-spacing: 0.05em; /* زيادة صغيرة بين الحروف */
}
```

* **نصائح:**
  العناوين الكبيرة تبان أحلى مع شوية تباعد.
  النصوص العادية تسيبها قريبة من بعضها.

---

### 5️⃣ Word Spacing (تباعد الكلمات)

<div class="arabic">
word-spacing بيحدد المسافة بين الكلمات.
</div>

```css
p {
  word-spacing: 0.1em;
}
```

* **نصائح:**
  تباعد صغير بين الكلمات كويس للنصوص الطويلة.
  تباعد كبير جدًا يصعب القراءة.

---

## Quick Reference (الأساسيات)

| الخاصية        | القيمة الافتراضية | ملاحظات |
| -------------- | ----------------- | ------- |
| box-shadow     | none              | لا يرث  |
| text-shadow    | none              | يرث     |
| line-height    | normal (\~1.2)    | يرث     |
| letter-spacing | normal            | يرث     |
| word-spacing   | normal (\~0)      | يرث     |

---

## Practice Task (مهمة تدريبية)

<div class="arabic">
خلي عنوانك وفقرته أحلى بالظلال والتباعد:
</div>

```html
<header class="hero">
  <h1 class="hero-title">عنوان جميل وواضح</h1>
  <p class="hero-lede">فقرة قصيرة تبين الفرق مع التباعد والظل.</p>
</header>
```

```css
.hero {
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

.hero-title {
  text-shadow: 0 1px 2px rgba(0,0,0,0.25);
  letter-spacing: 0.04em;
  line-height: 1.2;
}

.hero-lede {
  line-height: 1.6;
  word-spacing: 0.08em;
}
```

* جرب تغير القيم وشوف الفرق قبل وبعد.

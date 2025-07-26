---
title: "CSS - Session 4: Typography & Text Styling"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: Web Fonts (خطوط الويب)

<div class="arabic">
تعلم كيفية استخدام وتطبيق الخطوط في CSS مع التركيز على خطوط الويب.
</div>

### Subtopic 1: Font Properties (خصائص الخط)

- **Font Family** (عائلة الخط):
  ```css
  body {
    font-family: 'Cairo', Arial, sans-serif;
  }
  ```

- **Font Size** (حجم الخط):
  ```css
  /* Absolute sizes */
  h1 { font-size: 2em; }    /* 2x parent element */
  p { font-size: 16px; }    /* Pixels */
  small { font-size: 80%; } /* Percentage */
  
  /* Relative sizes */
  .large { font-size: 1.5rem; }  /* Relative to root */
  .small { font-size: 0.8em; }   /* Relative to parent */
  ```

- **Font Weight** (سمك الخط):
  ```css
  .light { font-weight: 300; }    /* Light */
  .normal { font-weight: 400; }   /* Normal */
  .bold { font-weight: 700; }     /* Bold */
  .bolder { font-weight: 900; }   /* Bolder */
  ```

### Subtopic 2: Using Web Fonts (استخدام خطوط الويب)

- **Google Fonts**:
  ```html
  <!-- In HTML head -->
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
  
  /* In CSS */
  body {
    font-family: 'Cairo', sans-serif;
  }
  ```

- **Self-hosted Fonts** (الخطوط المضمنة):
  ```css
  @font-face {
    font-family: 'MyFont';
    src: url('myfont.woff2') format('woff2'),
         url('myfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* Optional: Controls font loading behavior */
  }
  ```

---

## Topic 2: Text Styling (تنسيق النصوص)

### Subtopic 1: Text Properties (خصائص النص)

- **Text Color** (لون النص):
  ```css
  .text-primary { color: #3498db; }
  .text-muted { color: #7f8c8d; }
  .text-light { color: #ecf0f1; }
  .text-dark { color: #2c3e50; }
  ```

- **Text Alignment** (محاذاة النص):
  ```css
  .left { text-align: left; }      /* اليمين للغة العربية */
  .center { text-align: center; }  /* توسيط */
  .right { text-align: right; }    /* اليسار للغة العربية */
  .justify { text-align: justify; } /* محاذاة للطرفين */
  ```

- **Text Decoration** (تزيين النص):
  ```css
  .underline { text-decoration: underline; }       /* تحته خط */
  .line-through { text-decoration: line-through; } /* يتوسطه خط */
  .no-underline { text-decoration: none; }         /* إزالة التزيين */
  ```

### Subtopic 2: Advanced Text Effects (تأثيرات نصية متقدمة)

- **Text Shadow** (ظل النص):
  ```css
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    /* أفقية | رأسية | تمويه | لون */
  }
  
  .text-glow {
    text-shadow: 0 0 10px #3498db, 0 0 20px #3498db;
  }
  ```

- **Text Overflow** (تجاوز النص):
  ```css
  .truncate {
    white-space: nowrap;      /* منع الانتقال للسطر التالي */
    overflow: hidden;         /* إخفاء النص الزائد */
    text-overflow: ellipsis; /* إظهار علامة ... */
    max-width: 100%;         /* تحديد عرض العنصر */
  }
  ```

---

## Topic 3: Line Height & Spacing (ارتفاع السطر والمسافات)

### Subtopic 1: Line Height (ارتفاع السطر)

```css
/* بدون وحدة (مضاعف حجم الخط) */
p { line-height: 1.6; }  /* 1.6 * font-size */

/* بقيمة ثابتة */
h1 { line-height: 1.2em; }

/* بالنقاط أو البكسل */
blockquote { line-height: 24px; }
```

### Subtopic 2: Letter & Word Spacing (المسافات بين الحروف والكلمات)

```css
/* المسافة بين الحروف */
.tracking-wide { letter-spacing: 0.1em; }  /* متباعدة */
.tracking-tight { letter-spacing: -0.05em; } /* متقاربة */

/* المسافة بين الكلمات */
.word-spacing { word-spacing: 0.5em; }

/* المسافة البادئة */
.indent { text-indent: 2em; }
```

---

## Practical Exercise (تمرين عملي)

1. إنشاء صفحة ويب تستخدم خط Google Fonts
2. تطبيق أنماط نصية مختلفة على العناوين والفقرات
3. إضافة تأثيرات ظل وتنسيق متقدم للنصوص
4. ضبط المسافات بين الأسطر والحروف لتحسين إمكانية القراءة

## Homework (الواجب المنزلي)

1. قم بإنشاء صفحة سيرة ذاتية تحتوي على:
   - عنوان رئيسي بخط مميز
   - أقسام للخبرات والمهارات
   - تنسيق النصوص بشكل مناسب
   - استخدام خطوط ويب مناسبة

2. جرب:
   - تغيير اتجاه النص للغة العربية
   - إضافة تأثيرات ظل متعددة للنصوص
   - تطبيق أنماط مختلفة للروابط

## Resources (المراجع)
- [Google Fonts](https://fonts.google.com/)
- [CSS Fonts - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts)
- [CSS Text - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text)

## Next Session Preview (معاينة الجلسة القادمة)

في الجلسة القادمة سنتعلم عن:
- خصائص العرض والارتفاع
- النموذج الصندوقي (Box Model)
- الهوامش والحشو
- العناصر العائمة (Float)

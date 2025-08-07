---
title: "Advanced JavaScript - Session 8"
author: "---"
date: "2025"
---
c
## Introduction

In this session, we learned about **CDNs (Content Delivery Networks)**, how to use them for CSS, and how to work with CDN-powered styles using JavaScript.

<div class="arabic">
في السيشن دي، اتعلمنا يعني إيه CDN (شبكة توصيل المحتوى)، وازاي نستخدمها في CSS، وازاي نتحكم في الكلاسات بتاعتها بالجافاسكريبت.
</div>

---

## 1. What is a CDN?

A **CDN** (Content Delivery Network) is a network of servers around the world that delivers files (like CSS, JS, images) quickly to users, no matter where they are.

- **Why use a CDN?**
  - Faster loading (files come from a server near you)
  - Less load on your own server
  - Easy to use, no need to download files

<div class="arabic">
CDN يعني شبكة سيرفرات في العالم كله بتوصّل الملفات (زي CSS أو صور أو جافاسكريبت) بسرعة لأي حد في أي مكان. ليه نستخدمها؟ عشان التحميل يبقى أسرع، والسيرفر بتاعك يرتاح، وكمان سهلة في الاستخدام.
</div>

---

## 2. How to Use a CDN in CSS

### a) Add a CDN link in HTML `<head>`

```html
<!-- Bootstrap CSS via CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
```

<div class="arabic">
ضيف لينك الـ CDN في الـ head زي كده.
</div>

### b) Add a CDN link with JavaScript (dynamically)

You can also add a CDN link using JavaScript:

```js
// Inject Font Awesome CDN if not present
let faLink = document.querySelector('link[href*="font-awesome"]');
if (!faLink) {
  let fa = document.createElement('link');
  fa.rel = 'stylesheet';
  fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  fa.crossOrigin = 'anonymous';
  fa.referrerPolicy = 'no-referrer';
  document.head.appendChild(fa);
}
```

<div class="arabic">
ممكن تضيف لينك الـ CDN بالجافاسكريبت لو مش موجود.
</div>

---

## 3. Examples of CSS CDNs

- **Bootstrap:**
  - `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
- **Font Awesome:**
  - `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css`
- **Google Fonts:**
  - `https://fonts.googleapis.com/css?family=Roboto`

<div class="arabic">
أشهر أمثلة للـ CDN في CSS: Bootstrap, Font Awesome, Google Fonts.
</div>

---

## 4. When and Where to Use a CDN

**Use a CDN when:**

- You want fast, easy styling
- You're building a quick project or prototype
- You want to use popular styles (like Bootstrap)

**Don't use a CDN when:**

- You need your site to work offline
- You have privacy/security concerns
- You want full control over your styles

<div class="arabic">
استخدم الـ CDN لو عايز شغل سريع وسهل، أو بتجرب حاجة جديدة. متستخدموش لو عايز الموقع يشتغل من غير نت، أو عندك مشاكل خصوصية، أو عايز تتحكم في كل حاجة بنفسك.
</div>

---

## 5. Demo: Using Bootstrap CDN with JS classList

### Example: Toggle Bootstrap Button Styles

```html
<!-- HTML -->
<button id="myBtn" class="btn btn-primary">Bootstrap Button</button>
```

```js
// JS: Toggle Bootstrap classes
const btn = document.getElementById('myBtn');
btn.addEventListener('click', function() {
  // Toggle between primary and danger
  btn.classList.toggle('btn-primary'); // يضيف أو يشيل اللون الأزرق
  btn.classList.toggle('btn-danger');  // يضيف أو يشيل اللون الأحمر
});
```

<div class="arabic">
مثال: زرار بيتغير لونه بين أزرق وأحمر باستخدام كلاس من Bootstrap.
</div>

### Example: Inject Font Awesome CDN and Show Icon

```js
// Inject Font Awesome CDN if not present
let faLink = document.querySelector('link[href*="font-awesome"]');
if (!faLink) {
  let fa = document.createElement('link');
  fa.rel = 'stylesheet';
  fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  fa.crossOrigin = 'anonymous';
  fa.referrerPolicy = 'no-referrer';
  document.head.appendChild(fa);
}
// Add icon to the page
document.getElementById('myBtn').innerHTML += ' <i class="fas fa-thumbs-up"></i>';
```

<div class="arabic">
مثال: نضيف أيقونة من Font Awesome باستخدام الجافاسكريبت.
</div>

---

## Key Concepts Covered

<div class="arabic">
الحاجات المهمة اللي اتعلمناها في السيشن:
</div>

1. **CDN** (Content Delivery Network)
2. **Using CSS CDNs in HTML and JS**
3. **Bootstrap & Font Awesome examples**
4. **classList with CDN classes**
5. **متى تستخدم الـ CDN ومتى لا**

---

## Useful Bootstrap & Font Awesome Class Names (With Live Demo)

| Class Name(s)                        | Description (English / Arabic)                | Demo |
|--------------------------------------|-----------------------------------------------|-------|
| `btn btn-primary`                    | Blue Bootstrap button / زر أزرق               | <button class="btn btn-primary">Primary</button> |
| `btn btn-success`                    | Green Bootstrap button / زر أخضر              | <button class="btn btn-success">Success</button> |
| `btn btn-danger`                     | Red Bootstrap button / زر أحمر                | <button class="btn btn-danger">Danger</button> |
| `btn btn-warning`                    | Yellow Bootstrap button / زر أصفر             | <button class="btn btn-warning">Warning</button> |
| `btn btn-info`                       | Light blue Bootstrap button / زر أزرق فاتح    | <button class="btn btn-info">Info</button> |
| `btn btn-lg`                         | Large button / زر كبير                        | <button class="btn btn-primary btn-lg">Large</button> |
| `btn btn-sm`                         | Small button / زر صغير                        | <button class="btn btn-primary btn-sm">Small</button> |
| `m-2`                                | Margin on all sides / هامش صغير               | <button class="btn btn-primary m-2">With Margin</button> |
| `my-2`                               | Vertical margin / هامش رأسي                   | <div class="alert alert-success my-2">Margin Y</div> |
| `my-4`                               | Larger vertical margin / هامش رأسي كبير        | <div class="my-4" style="background:#eee;display:inline-block;">my-4</div> |
| `bg-light`                           | Light background / خلفية فاتحة                | <div class="bg-light p-2">bg-light</div> |
| `text-center`                        | Centered text / نص في المنتصف                 | <div class="text-center">Centered</div> |
| `p-5`                                | Padding / مسافة داخلية كبيرة                  | <div class="bg-light p-5">p-5</div> |
| `fas fa-thumbs-up text-success`      | Thumbs up icon, green / أيقونة لايك خضراء     | <i class="fas fa-thumbs-up text-success"></i> |
| `fas fa-star text-warning`           | Star icon, yellow / أيقونة نجمة صفراء         | <i class="fas fa-star text-warning"></i> |
| `fas fa-heart text-danger`           | Heart icon, red / أيقونة قلب أحمر             | <i class="fas fa-heart text-danger"></i> |
| `fab fa-facebook text-primary`       | Facebook icon, blue / فيسبوك أزرق             | <i class="fab fa-facebook text-primary"></i> |
| `fab fa-instagram text-danger`       | Instagram icon, red / انستجرام أحمر           | <i class="fab fa-instagram text-danger"></i> |
| `fab fa-twitter text-info`           | Twitter icon, light blue / تويتر أزرق فاتح    | <i class="fab fa-twitter text-info"></i> |
| `fab fa-youtube text-danger`         | YouTube icon, red / يوتيوب أحمر               | <i class="fab fa-youtube text-danger"></i> |
| `fab fa-google text-success`         | Google icon, green / جوجل أخضر                | <i class="fab fa-google text-success"></i> |
| `alert alert-warning`                | Yellow alert box / صندوق تحذير أصفر           | <div class="alert alert-warning" role="alert">Warning!</div> |
| `alert alert-success`                | Green alert box / صندوق نجاح أخضر              | <div class="alert alert-success" role="alert">Success!</div> |
| `spinner-border text-primary`        | Blue spinner / سبينر أزرق                     | <div class="spinner-border text-primary" role="status"></div> |
| `spinner-border text-success`        | Green spinner / سبينر أخضر                    | <div class="spinner-border text-success" role="status"></div> |
| `spinner-border text-danger`         | Red spinner / سبينر أحمر                      | <div class="spinner-border text-danger" role="status"></div> |
| `spinner-border text-warning`        | Yellow spinner / سبينر أصفر                   | <div class="spinner-border text-warning" role="status"></div> |
| `spinner-border text-info`           | Light blue spinner / سبينر أزرق فاتح          | <div class="spinner-border text-info" role="status"></div> |

---

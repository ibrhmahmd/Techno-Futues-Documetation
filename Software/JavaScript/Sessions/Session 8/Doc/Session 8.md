---
title: "Forms & Input Validation - Session 8"
author: "---"
date: "2025"
---

## Topic 1: Form Element Selection

<div class="arabic">
اختيار عناصر النماذج في جافاسكريبت
</div>

### Subtopic 1

**[الوصول لعناصر النموذج]**

```javascript
let form = document.getElementById('registrationForm');
let nameInput = document.querySelector('input[name="username"]');
```

<div class="arabic">
يمكنك اختيار عناصر النموذج باستخدام getElementById أو querySelector.
</div>

---

### Subtopic 2

**[الوصول للقيم]**

```javascript
let username = nameInput.value;
let isChecked = document.getElementById('agreeTerms').checked;
```

<div class="arabic">
يمكنك الوصول لقيم الإدخال باستخدام خاصية value.
</div>

## Topic 2: Form Submission Handling

<div class="arabic">
التعامل مع إرسال النموذج
</div>

```javascript
form.addEventListener('submit', function(event) {
  event.preventDefault(); // منع الإرسال التلقائي
  validateForm();
});
```

<div class="arabic">
preventDefault() يمنع إرسال النموذج التلقائي للتحقق من البيانات أولاً.
</div>

## Topic 3: Basic Input Validation

<div class="arabic">
التحقق من صحة الإدخال
</div>

```javascript
function validateForm() {
  let username = nameInput.value.trim();
  let errorMsg = document.getElementById('errorMsg');

  if (username === '') {
    errorMsg.textContent = 'الرجاء إدخال اسم المستخدم';
    return false;
  }

  if (username.length < 3) {
    errorMsg.textContent = 'يجب أن يكون الاسم أطول من 3 أحرف';
    return false;
  }

  errorMsg.textContent = '';
  return true;
}
```

<div class="arabic">
التحقق من صحة الإدخال يتضمن فحص الحقول وعرض رسائل الخطأ.
</div>

## Topic 4: Regular Expressions

<div class="arabic">
التعبيرات العادية للتحقق من الإدخال
</div>

```javascript
function validateEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

<div class="arabic">
التعبيرات العادية تساعد في التحقق من صيغة الإدخال مثل البريد الإلكتروني.
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: أكمل دالة التحقق من كلمة المرور
</div>

```javascript
function validatePassword(password) {
  // التحقق من طول كلمة المرور
  if (password.length < 8) {
    return false;
  }
  
  // التحقق من وجود حرف كبير
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  
  // التحقق من وجود رقم
  if (!/[0-9]/.test(password)) {
    return false;
  }
  
  return true;
}
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **Form Selection**: Accessing form elements
2. **Event Handling**: Form submission
3. **Input Validation**: Checking input values
4. **Regular Expressions**: Pattern matching

## Advanced: Custom Validation

### Validation Strategies

<div class="arabic">
استراتيجيات متقدمة للتحقق من الإدخال
</div>

| Strategy | Description | Example |
|----------|-------------|---------|
| Real-time | التحقق أثناء الكتابة | onInput event |
| Submit | التحقق عند الإرسال | form submit event |
| Server-side | التحقق على الخادم | Backend validation |

<div class="arabic">
هناك عدة طرق للتحقق من صحة الإدخال تختلف حسب الاحتياج.
</div>

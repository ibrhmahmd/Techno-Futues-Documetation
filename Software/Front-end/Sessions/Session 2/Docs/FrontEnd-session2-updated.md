---
title: "Login Page & ES6 Modules - Session 2"
author: "---"
date: "2025"
---

## Topic 1: Login Flow Overview

Login Process Flow
------------------
```
User              
  |
  v
Click "Login" button
  |
  v
form.onsubmit  (preventDefault)
  |
  v
Validate email & password
  |\
  | \__ Success?  -->  [Yes] ------------------------------.
  |                                   (Store user in sessionStorage)
  |                                     setItem('UserName', user)
  |                                     setItem('UserImg', img)
  |                                     |
  |                                     v
  |                               Redirect to index.html
  | 
  '---- [No] -->  Alert "Invalid credentials" & clear password field
```

<div class="arabic">
مخطط انسيابي يوضح خطوات تسجيل الدخول من ضغط الزر حتى إعادة التوجيه أو عرض رسالة الخطأ.
</div>

---

## Topic 2: Simple Authentication & `sessionStorage`

<div class="arabic">
مقدمة عن كيفية تقسيم الكود باستخدام وحدات ES6 (`import` / `export`) كما في الملفات `Data.js` و`login.js`.
</div>

### Subtopic 1

**Exporting Static Data (`Data.js`)**

```javascript
// Data.js
export const Data = {
  accounts: [
    { email: 'user1@example.com', password: 'password1' },
    // ...الخ
  ]
};
```

<div class="arabic">
يتم استخدام `export` لجعل الكائن متاحاً في ملفات أخرى.
</div>

### Subtopic 2

**Importing & Using the Data (`login.js`)**

```javascript
// login.js
import { Data } from './Data.js';

const { accounts } = Data;
```

<div class="arabic">
استخدم `import` لجلب البيانات ثم فك التعاقد إلى متغيرات محلية.
</div>

---

## Topic 4: Dynamic DOM Construction

<div class="arabic">
بناء عناصر النموذج (Form) بالكامل عبر JavaScript باستخدام `document.createElement` بدلاً من HTML ثابت.
</div>

```javascript
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.className = 'form-control';
```

> Tip: Keeping markup in JS allows full re-usability & component thinking.

---

<!-- heading moved above as Topic 2, handled earlier -->

1. **Validation**: ابحث في `accounts` عن تطابق البريد وكلمة المرور.
2. **Persistence**: خزّن اسم المستخدم في `sessionStorage` لتذكر الجلسة.

```javascript
sessionStorage.setItem('UserName', user.username);
```

<div class="arabic">
`sessionStorage` يخزّن البيانات حتى يتم غلق التبويب.
</div>

### Form Submission Flow (`login.js`)

```javascript
form.onsubmit = e => {
  e.preventDefault();                     // 1️⃣ Stop browser default
  const email = emailInput.value.trim();  // 2️⃣ Read inputs
  const password = passwordInput.value;
  const user = accounts.find(
      acc => acc.email === email && acc.password === password); // 3️⃣ Lookup

  if (user) {
    sessionStorage.setItem('UserName', user.username); // 4️⃣ Persist
    sessionStorage.setItem('UserImg', user.img);
    window.location.href = 'index.html';               // 5️⃣ Redirect
  } else {
    alert('Invalid email or password.');
    passwordInput.value = '';
  }
};
```

**Step-by-step explanation**
1. `preventDefault()` يمنع إعادة تحميل الصفحة.
2. تُقرأ القيم من حقول الإدخال.
3. تستخدم `Array.find()` للبحث عن حساب مطابق.
4. يتم تخزين بيانات المستخدم في `sessionStorage` لاستعمالها في الصفحات الأخرى.
5. إعادة توجيه أو إظهار رسالة خطأ.

### What is `sessionStorage`?
* تخزين مفتاح/قيمة داخل المتصفح خاص بعلامة التبويب.
* يُمسح تلقائياً عند إغلاق التبويب.
* يخضع لقاعدة **Same-Origin**.
* مثالي للبيانات المؤقتة مثل حالة تسجيل الدخول.

#### Using `setItem` & `getItem`

```javascript
// Store data
sessionStorage.setItem('UserName', 'ibrahim'); // key, value (both strings)

// Retrieve data
const name = sessionStorage.getItem('UserName'); // returns 'ibrahim' or null

// Remove data
sessionStorage.removeItem('UserName');
```

<div class="arabic">
`setItem(key, value)` يأخذ **مفتاحاً نصياً** و**قيمة نصية** ليُخزنها. 
`getItem(key)` يرجع القيمة المخزنة أو `null` إذا لم توجد. 
يمكنك استخدام `removeItem(key)` لمسح المفتاح.
</div>

---

## Topic 5: Bootstrap 5 Form Utilities

| Utility | Purpose |
|---------|---------|
| `form-control` | نمط موحّد لمجالات الإدخال |
| `btn btn-primary w-100` | زر ملون يعرض بعرض كامل |
| `card`, `card-body` | حاوية أنيقة للنموذج |

<div class="arabic">
تساعد هذه الفئات في تصميم سريع ومتجاوب.
</div>

---

## Topic 6: Running the Demo Locally & on Mobile

### 1. Using Live Server (VS Code)

1. Install the *Live Server* extension.
2. Right-click `login.html` → *Open with Live Server*.
3. المتصفح سيفتح على عنوان مثل:
   ```
   http://localhost:5500/login.html
   ```

### 2. Opening on Your Phone

1. تأكد أن الحاسوب والهاتف على نفس شبكة Wi-Fi.
2. احصل على عنوان IP المحلي للحاسوب (مثلاً `192.168.1.15`).
3. افتح على الهاتف:
   ```
   http://<YOUR_PC_IP>:5500/login.html
   ```
4. سيُحمَّل الموقع مباشرة من الحاسوب.

> Tip: Keep Live Server running; it auto-reloads on file save.

---

## Practical Exercise

<div class="arabic">
تمرين عملي: أنشئ صفحة **Sign-Up** تتحقق من عدم تكرار البريد الإلكتروني ثم تحفظ المستخدم الجديد.
</div>

### Requirements
1. إنشاء `signup.html` و`signup.js` مع نموذج (Email, Username, Password, Confirm Password).
2. تحقق من عدم تكرار البريد باستخدام الدالة أدناه.
3. عند النجاح أضف الحساب إلى `Data.accounts` ثم عد إلى صفحة تسجيل الدخول.
4. استعمل نفس أسلوب ES6 Modules.

```javascript
function isEmailTaken(email) {
  return Data.accounts.some(acc => acc.email === email);
}

// مثال إضافة مستخدم جديد
Data.accounts.push({ email, password, username, img: 'default.jpg' });
window.location.href = 'login.html';
```

---

## ES6 Modules vs Global `window`

| الميزة | `import` / `export` | خصائص `window` العالمية |
|--------|--------------------|--------------------------|
| نطاق معزول | ✅ | ❌ |
| ترتيب التحميل | يديره المتصفح | يعتمد على ترتيب `<script>` |
| دعم Tree-shaking | ✅ | ❌ |
| التكامل مع TypeScript/IDE | قوي | محدود |
| مناسب لـ | تطبيقات حديثة | أكواد سريعة / قديمة |

---

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية :
</div>

1. **ES6 Modules (import / export)**
2. **Dynamic DOM Construction**
3. **Client-Side Auth & sessionStorage**
4. **Bootstrap 5 Utilities**
5. **Live Server & Mobile Testing**
6. **Modules vs Global `window`**

---

## References & Further Reading

1. **MDN Web Docs**
   - [sessionStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
   - [Form Submission](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
   - [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

2. **Bootstrap 5**
   - [Forms Documentation](https://getbootstrap.com/docs/5.0/forms/overview/)
   - [Utilities API](https://getbootstrap.com/docs/5.0/utilities/api/)

3. **JavaScript**
   - [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
   - [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

<div class="arabic">
### مراجع إضافية
- [شرح sessionStorage بالعربية](https://wiki.hsoub.com/JavaScript/sessionStorage)
- [دليل المبتدئين إلى وحدات JavaScript](https://www.itwosteps.com/2021/javascript-modules/)
</div>

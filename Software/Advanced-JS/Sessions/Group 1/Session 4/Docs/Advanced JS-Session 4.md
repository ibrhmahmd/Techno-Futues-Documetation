---
title: "Advanced JavaScript - Session 4"
author: "---"
date: "2025"
---

## Topic 1: Advanced DOM Selection with querySelectorAll

<div class="arabic">
اختيار مجموعة من العناصر باستخدام querySelectorAll
</div>

```javascript
// HTML:
// <div class="product-card">
//   <h2 class="product-title">Product 1</h2>
//   <span class="price">$99</span>
// </div>
// <div class="product-card">
//   <h2 class="product-title">Product 2</h2>
//   <span class="price">$149</span>
// </div>

// Select all product cards and update their style
const products = document.querySelectorAll('.product-card');
products.forEach(product => {
    product.style.border = '1px solid #ccc';
    const price = product.querySelector('.price');
    if (parseInt(price.textContent.slice(1)) > 100) {
        product.classList.add('premium');
    }
});
```

<div class="arabic">
querySelectorAll يختار كل العناصر التي تطابق المحدد (selector) ويعيد قائمة يمكن التكرار عليها.
</div>

## Topic 2: Creating and Inserting Elements

<div class="arabic">
إنشاء عناصر جديدة وإضافتها للصفحة
</div>

```javascript
// Real-life example: Adding a notification message
function showNotification(message, type = 'info') {
    // Create the notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.className = 'close-btn';
    notification.appendChild(closeBtn);

    // Add to page
    document.body.insertBefore(notification, document.body.firstChild);

    // Remove after 5 seconds
    setTimeout(() => notification.remove(), 5000);

    // Close button click handler
    closeBtn.onclick = () => notification.remove();
}

// Usage
showNotification('Your changes have been saved!', 'success');
showNotification('Please check your input', 'error');
```

<div class="arabic">
مثال عملي لإنشاء نظام إشعارات ديناميكي باستخدام createElement و appendChild
</div>

## (Previewed) Advanced Event Handling

<div class="arabic">
تمت مناقشة فكرة التعامل مع الأحداث (event handling) بشكل متقدم، مع الإشارة إلى أهمية delegation في التطبيقات الديناميكية.
</div>

### Simple Example: Event Listener

A basic example of using `addEventListener` to handle a button click:

```javascript
// HTML: <button id="myBtn">Click me</button>

document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button was clicked!');
});
```

<div class="arabic">
مثال بسيط لاستخدام addEventListener للتعامل مع حدث النقر على زر:
</div>

## Session Demo: DOM Manipulation and Event Handling

This demo shows how to:
- Select and style elements
- Dynamically create and insert a header
- Add a click event listener to a button for simple form validation

<div class="arabic">
هذا المثال يوضح كيفية:
- اختيار وتنسيق العناصر
- إنشاء رأس الصفحة ديناميكياً
- إضافة مستمع حدث (event listener) لزر للتحقق من صحة النموذج
</div>

```javascript
// Style a paragraph
let paragraph = document.getElementById('test');
paragraph.style.borderWidth= '5px';
paragraph.style.borderColor = 'blue';
paragraph.style.padding= '10px';
paragraph.style.borderStyle= 'solid';

// Create and insert a header
enlet header = document.createElement('header');
header.style.width = '100%';
header.style.border = '5px solid black';
let h1 = document.createElement('h1');
h1.innerText='mywebsite';
header.appendChild(h1);
document.body.insertBefore(header, document.body.firstChild);

// Add event listener to a button for form validation
let btn = document.getElementById('submit');
btn.addEventListener('click', function(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if (password.value == '' ){
        alert("password can not be empty");
    }
    else if (username.value === ''){
        alert("username can not be empty")
    }
});
```

---

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **querySelectorAll**: Selecting multiple elements at once
2. **Dynamic Element Creation**: Creating and inserting new DOM elements
3. **(Preview)**: The idea of advanced event handling and event delegation

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

## Topic 3: Working with Attributes

<div class="arabic">
التعامل مع خصائص العناصر وتعديلها
</div>

```javascript
// Real-life example: Toggle button with disabled state
function setupToggleButton() {
    // HTML: <button id="submitBtn" class="btn">Submit</button>
    const button = document.getElementById('submitBtn');
    
    // Get and check attributes
    console.log(button.getAttribute('class')); // Output: "btn"
    console.log(button.hasAttribute('disabled')); // Output: false
    
    // Set disabled attribute when clicked
    button.addEventListener('click', () => {
        button.setAttribute('disabled', 'true');
        button.textContent = 'Processing...';
        
        // Simulate process completion after 3 seconds
        setTimeout(() => {
            button.removeAttribute('disabled');
            button.textContent = 'Submit';
        }, 3000);
    });
    
    // Add data attribute to store original text
    button.setAttribute('data-original-text', 'Submit');
    
    // Access data attribute
    console.log(button.dataset.originalText); // Output: "Submit"
}

// HTML Usage:
// <button id="submitBtn" class="btn">Submit</button>
```

<div class="arabic">
مثال عملي للتعامل مع خصائص الزر مثل disabled وdata-attributes
</div>

## Topic 4: CSS Classes and Styles Manipulation

<div class="arabic">
التحكم في الأنماط والفئات CSS
</div>

```javascript
// Real-life example: Interactive form validation
function validateInput(input) {
    const value = input.value.trim();
    const type = input.getAttribute('data-validate');

    // Remove existing states
    input.classList.remove('valid', 'invalid');
    
    // Validate based on type
    switch(type) {
        case 'email':
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            input.classList.add(isValidEmail ? 'valid' : 'invalid');
            break;
        case 'phone':
            const isValidPhone = /^\d{10}$/.test(value);
            input.classList.add(isValidPhone ? 'valid' : 'invalid');
            break;
        case 'required':
            input.classList.add(value !== '' ? 'valid' : 'invalid');
            break;
    }

    // Update styles based on validation
    if (input.classList.contains('invalid')) {
        input.style.borderColor = '#ff3333';
        input.style.backgroundColor = '#fff0f0';
    } else {
        input.style.borderColor = '#33cc33';
        input.style.backgroundColor = '#f0fff0';
    }
}

// HTML Usage:
// <input type="email" data-validate="email" placeholder="Enter email">
// <input type="tel" data-validate="phone" placeholder="Enter phone">
```

<div class="arabic">
مثال عملي للتحقق من صحة المدخلات وتغيير المظهر بناءً على النتيجة
</div>

## Topic 5: Advanced Event Handling

<div class="arabic">
التعامل المتقدم مع الأحداث
</div>

```javascript
// Real-life example: Shopping cart quantity controls
function setupQuantityControls() {
    const cart = document.querySelector('.shopping-cart');
    
    cart.addEventListener('click', function(event) {
        // Event delegation for quantity buttons
        if (event.target.matches('.quantity-btn')) {
            event.preventDefault();
            
            const button = event.target;
            const wrapper = button.closest('.quantity-wrapper');
            const input = wrapper.querySelector('.quantity-input');
            const currentValue = parseInt(input.value) || 0;

            // Increment or decrement based on button type
            if (button.classList.contains('increase')) {
                input.value = currentValue + 1;
            } else if (button.classList.contains('decrease') && currentValue > 1) {
                input.value = currentValue - 1;
            }
            
            // Trigger cart update
            updateCartTotal();
        }
    });
}

// HTML Usage:
// <div class="shopping-cart">
//   <div class="quantity-wrapper">
//     <button class="quantity-btn decrease">-</button>
//     <input class="quantity-input" type="number" value="1" min="1">
//     <button class="quantity-btn increase">+</button>
//   </div>
// </div>
```

<div class="arabic">
مثال عملي للتعامل مع أحداث النقر في سلة التسوق باستخدام event delegation
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: قم بإنشاء نموذج تسجيل مع التحقق من صحة المدخلات مباشرةً وإظهار رسائل الخطأ بشكل ديناميكي
</div>

```javascript
// Exercise skeleton code
function createRegistrationForm() {
    const form = document.createElement('form');
    form.className = 'registration-form';
    
    // Add form fields
    const fields = [
        { type: 'text', name: 'username', validate: 'required' },
        { type: 'email', name: 'email', validate: 'email' },
        { type: 'tel', name: 'phone', validate: 'phone' }
    ];
    
    fields.forEach(field => {
        // Create and append form fields
        // Add validation listeners
        // Show/hide error messages
    });
    
    return form;
}
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **querySelectorAll**: Selecting multiple elements at once
2. **Dynamic Element Creation**: Creating and inserting new DOM elements
3. **Attribute Handling**: Managing element attributes effectively
4. **CSS Manipulation**: Dynamic styling and class management
5. **Event Delegation**: Efficient event handling for dynamic content

## Advanced: Form Validation and Dynamic UI

<div class="arabic">
التحقق من صحة النماذج وتحديث واجهة المستخدم بشكل ديناميكي
</div>

| Feature | Example Usage | Common Use Case |
|---------|--------------|-----------------|
| classList | .add/.remove | State management |
| setAttribute | data attributes | Custom metadata |
| createElement | Dynamic content | Notifications |
| querySelectorAll | Bulk updates | List operations |
| Event delegation | Parent listeners | Dynamic elements |

<div class="arabic">
استخدام هذه الميزات يساعد في إنشاء واجهات مستخدم تفاعلية وديناميكية
</div>



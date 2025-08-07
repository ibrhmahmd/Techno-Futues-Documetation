---
title: "Advanced JavaScript - Session 9"
author: "---"
date: "2025"
---

## Introduction

In this session, we'll explore how to effectively use Bootstrap classes and manipulate the DOM with JavaScript. We'll learn how to read Bootstrap documentation, use utility classes, and create interactive components.

<div class="arabic">
في السيشن ده، هنعرف نستخدم كلاسات Bootstrap بكفاءة ونتحكم في عناصر الصفحة باستخدام الجافاسكريبت. هنتعلم نقرأ دوكيومنتيشن Bootstrap، ونستخدم الكلاسات المساعدة، ونعمل كومبوننتس تفاعلية.
</div>

---

## 1. Understanding Bootstrap's Class System

Bootstrap uses a utility-first approach with consistent naming patterns:

- **Component classes**: `btn`, `card`, `alert`, `modal`
- **Style modifiers**: `btn-primary`, `alert-success`,`alert-failed`, `bg-light`
- **Responsive prefixes**: `col-md-6`, `d-none d-md-block`
- **Spacing utilities**: `m-*`, `p-*`, `mx-*`, `my-*`

<div class="arabic">
نظام الكلاسات في Bootstrap بيتكون من:
- كلاسات أساسية للعناصر
- معدلات للشكل
- بادئات للشاشات المختلفة
- كلاسات المسافات
</div>

---

## 2. Essential Bootstrap Utilities

### a) Spacing Utilities
```html
<div class="m-3 p-2">Margin and padding</div>
<div class="mt-4 mb-2">Top and bottom margin</div>
<div class="px-3 py-2">Horizontal and vertical padding</div>
```

### b) Display Utilities
```html
<div class="d-none d-md-block">Visible on medium screens and up</div>
<div class="d-flex justify-content-between">Flex container</div>
```

### c) Text Utilities
```html
<p class="text-center text-primary fw-bold">Centered primary bold text</p>
<p class="text-uppercase">uppercase text</p>
```

<div class="arabic">
أهم الكلاسات المساعدة في Bootstrap:
- المسافات: m للهوامش، p للبادنج
- العرض: d-none للاخفاء، d-flex للفليكس
- النصوص: text-center للوسط، fw-bold للعريض
</div>

---

## 3. DOM Manipulation with Bootstrap

### a) Toggling Classes
```js
// Toggle a class
const button = document.querySelector('.my-button');
button.classList.toggle('btn-primary');

// Add/Remove classes
button.classList.add('active');
button.classList.remove('disabled');

// Check if element has a class
if (button.classList.contains('active')) {
  console.log('Button is active!');
}
```

### b) Creating Bootstrap Components
```js
// Create a new alert
document.getElementById('alertContainer').innerHTML = `
  <div class="alert alert-success alert-dismissible fade show">
    Operation successful!
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>
`;
```

### c) Handling Bootstrap Events
```js
// Modal events
const myModal = new bootstrap.Modal('#myModal');

myModal._element.addEventListener('show.bs.modal', () => {
  console.log('Modal is about to show');
});

myModal._element.addEventListener('shown.bs.modal', () => {
  console.log('Modal is now visible');});
```

<div class="arabic">
التحكم في عناصر Bootstrap بالجافاسكريبت:
- إضافة وحذف الكلاسات
- إنشاء عناصر جديدة
- التعامل مع الأحداث
</div>

---

## 4. Practical Examples

### Example 1: Dynamic Todo List
```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Todo List</h5>
    <div class="input-group mb-3">
      <input type="text" id="todoInput" class="form-control" placeholder="Add new task">
      <button class="btn btn-primary" id="addTodo">Add</button>
    </div>
    <ul class="list-group" id="todoList">
      <!-- Todos will be added here -->
    </ul>
  </div>
</div>

<script>
document.getElementById('addTodo').addEventListener('click', () => {
  const input = document.getElementById('todoInput');
  if (input.value.trim()) {
    const todoItem = document.createElement('li');
    todoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    todoItem.innerHTML = `
      ${input.value}
      <button class="btn btn-sm btn-danger">×</button>
    `;
    
    todoItem.querySelector('button').addEventListener('click', (e) => {
      e.target.closest('li').remove();
    });
    
    document.getElementById('todoList').appendChild(todoItem);
    input.value = '';
  }
});
</script>
```

### Example 2: Theme Switcher
```html
<button id="themeToggle" class="btn btn-secondary">
  <i class="fas fa-moon"></i> Toggle Theme
</button>

<script>
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  html.setAttribute('data-bs-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  if (html.getAttribute('data-bs-theme') === 'dark') {
    html.removeAttribute('data-bs-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-bs-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
    localStorage.setItem('theme', 'dark');
  }
});
</script>
```

<div class="arabic">
أمثلة عملية:
1. قائمة مهام تفاعلية
2. زر تغيير السمة (فاتح/غامق)
</div>

---

## 5. Common Bootstrap Components with JS

### Modal Example
```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Modal content goes here
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Trigger with JavaScript -->
<script>
const myModal = new bootstrap.Modal('#exampleModal');
// Show the modal
myModal.show();
</script>
```

### Tooltip Example
```html
<button type="button" class="btn btn-secondary" 
        data-bs-toggle="tooltip" 
        data-bs-placement="top" 
        title="Tooltip on top">
  Hover over me
</button>

<script>
// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
</script>
```

<div class="arabic">
أمثلة على مكونات Bootstrap مع الجافاسكريبت:
- المودال (النافذة المنبثقة)
- التلميحات
</div>

---

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية اللي اتعلمناها في السيشن:
</div>

1. **Understanding Bootstrap's class system**
2. **Essential utility classes**
3. **DOM manipulation with JavaScript**
4. **Creating dynamic components**
5. **Working with Bootstrap's JavaScript**

<div class="arabic">
1. فهم نظام الكلاسات في Bootstrap
2. الكلاسات المساعدة الأساسية
3. التحكم في عناصر الصفحة
4. إنشاء عناصر تفاعلية
5. التعامل مع جافاسكريبت Bootstrap
</div>

---

## Practice Exercise

Create a simple dashboard with the following features:
1. A navigation bar with a theme toggle button
2. A form to add new cards
3. Cards that can be deleted or marked as completed
4. A counter showing the number of active tasks

<div class="arabic">
تمرين عملي:
اعمل لوحة تحكم بسيطة فيها:
1. شريط تنقل مع زر تغيير السمة
2. فورم لإضافة كروت جديدة
3. إمكانية حذف أو تعليم الكروت كمكتملة
4. عداد للمهام النشطة
</div>

---

## Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [MDN Web Docs - classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

<div class="arabic">
مصادر إضافية:
- دوكيومنتيشن Bootstrap
- أيقونات Bootstrap
- وثائق MDN عن classList
</div>
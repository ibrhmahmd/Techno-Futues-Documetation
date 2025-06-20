---
title: "Advanced JavaScript - Session 3"
author: "---"
date: "2025"
---

## Topic 1: DOM Selectors and Manipulation

<div class="arabic">
طرق اختيار العناصر من الصفحة وتغيير محتواها
</div>

### Subtopic 1: Selecting Elements by Class and ID

**اختيار العناصر باستخدام ال Class, ID**

```javascript
// HTML: <input id="mass">
document.getElementById('mass').textContent = "1";

// HTML: <button class="bgBtnclass">Click me</button>
let btn = document.querySelector(".bgBtnclass").innerHTML;
console.log(btn);
```

<div class="arabic">
getElementById يختار عنصرًا بال ID ويغير محتواه. querySelector يختار أول عنصر يطابق ال Class .
</div>

---

### Subtopic 2: Event Listeners and Theme Switching

**إضافة أحداث لتغيير ألوان الصفحة (الوضع الليلي والنهاري)**

```javascript
let darkmode = document.getElementById("darkmode");
let whitemode = document.getElementById("whitemode");

darkmode.addEventListener("click", function(event){
  event.preventDefault();
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});

whitemode.addEventListener("click", function(event){
  event.preventDefault();
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
});
```

<div class="arabic">
نستخدم addEventListener لإضافة أحداث للأزرار لتغيير ألوان الصفحة.
</div>

## Topic 2: Functions for Calculations

<div class="arabic">
استخدام functions لإجراء العمليات الحسابية
</div>

```javascript
function force(m, a){
  return m * a;
}
// مثال: حساب القوة
console.log(force(2, 5)); // Output: 10
```

<div class="arabic">
الدوال تساعدنا في إعادة استخدام الكود، مثل حساب القوة من الكتلة والتسارع.
</div>

## Topic 3: Simple Form Structure (HTML)

<div class="arabic">
 نموذج بسيط لإدخال القيم
</div>

```html
<form id="form">
  <label for="mass">Mass </label>
  <input type="number" id="mass">
  <label for="Acceleration">Acceleration </label>
  <input type="number" id="Acceleration">
  <button type="submit" id="SubmitBtn">Calculate</button>
</form>
<button id="darkmode">dark mode</button>
<button id="whitemode">white mode</button>
```

<div class="arabic">
نموذج لإدخال الكتلة والتسارع مع أزرار لتغيير لون الصفحة.
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: أضف زرًا يغير لون الخلفية، ودالة لحساب القوة من الكتلة والتسارع.
</div>

```javascript
// Exercise skeleton code
function force(m, a) {
  return m * a;
}

document.getElementById("darkmode").onclick = function() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
};

document.getElementById("whitemode").onclick = function() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
};
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **DOM Selectors**: Selecting elements by ID and class
2. **Event Listeners**: Adding click events to elements
3. **Theme Switching**: Changing page colors dynamically
4. **Functions**: Writing and using functions for calculations
5. **Simple Forms**: Basic HTML form structure

## Advanced: Event Handling and Dynamic Styling

### Advanced Topic: Preventing Default Form Actions

<div class="arabic">
كيفية منع السلوك الافتراضي للنماذج عند الضغط على زر
</div>

| Feature         | Example Code                  | Purpose                        |
|-----------------|------------------------------|---------------------------------|
| preventDefault  | event.preventDefault()        | Prevents form submission reload |
| addEventListener| element.addEventListener(...) | Attach event to element         |
| style changes   | element.style.property        | Change CSS dynamically          |

<div class="arabic">
شرحنا كيف نمنع إعادة تحميل الصفحة عند الضغط على زر في النموذج، وكيف نغير الأنماط ديناميكيًا.
</div>

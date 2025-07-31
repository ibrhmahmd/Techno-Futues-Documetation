
## **🔹 CSS Level 1 (Basics)**

### **1️⃣ Introduction to CSS**

---

### **2️⃣ Three Ways to Apply CSS**

#### **✅ Inline CSS** (Applied directly inside an HTML element)

```html
<p style="color: blue; font-size: 20px;">This is inline CSS</p>
```

#### **✅ Internal CSS** (Defined inside `<style>` in the `<head>` section)

```html
<style>
  p {
    color: red;
    font-size: 18px;
  }
</style>
<p>This is internal CSS</p>
```

#### **✅ External CSS** (Defined in a separate `.css` file and linked using `<link>`)

```css
/* styles.css */
p {
  color: green;
  font-size: 16px;
}
```

```html
<link rel="stylesheet" href="styles.css">
<p>This is external CSS</p>
```

**🔹 Explanation:**

- **Inline CSS** applies to a single element.
- **Internal CSS** applies styles within the same document.
- **External CSS** is the preferred method for large projects.

---

### **3️⃣ Difference Between ID (`#id`) and Class (`.class`)**

- **`#id`** is unique and used for a single element.
- **`.class`** can be applied to multiple elements.

📌 **Example:**

```css
#unique {
  color: blue;
}

.common {
  font-weight: bold;
}
```

```html
<p id="unique">This is styled using an ID</p>
<p class="common">This is styled using a class</p>
<p class="common">This is another element with the same class</p>
```

---

### **4️⃣ Background Color**

📌 **Example:**

```css
body {
  background-color: lightblue;
}
```

---

### **5️⃣ Text Styling**

#### **✅ Text Color**

```css
p {
  color: red;
}
```

#### **✅ Width & Height**

```css
div {
  width: 200px;
  height: 100px;
  background-color: yellow;
}
```

#### **✅ Font Styling**

```css
p {
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  font-family: Arial, sans-serif;
}
```

#### **✅ Text Alignment & Transformation**

```css
h1 {
  text-align: center;
  text-transform: uppercase;
}
```

---

### **6️⃣ Spacing**

#### **✅ Padding & Margin**

```css
div {
  padding: 20px;
  margin: 30px;
  background-color: lightgray;
}
```

#### **✅ Border & Border Radius**

```css
div {
  border: 2px solid black;
  border-radius: 10px;
}
```

---

### **7️⃣ Background Images**

```css
body {
  background-image: url("background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
```

---

### **8️⃣ Display Property**

#### **✅ `inline`, `block`, `inline-block`**

```css
span {
  display: inline;
}

div {
  display: block;
}

button {
  display: inline-block;
  width: 100px;
  height: 40px;
}
```

---

### **9️⃣ Positioning**

#### **✅ `relative`, `absolute`, `fixed`, `static`**

```css
.relative {
  position: relative;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 50px;
  left: 100px;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  color: white;
}

.static {
  position: static;
}
```

---

## **🔹 CSS Level 2 (Advanced Topics)**

### **1️⃣ Flexbox**

Flexbox is used for layout alignment.

#### **✅ `display: flex`**

```css
.container {
  display: flex;
}
```

#### **✅ `justify-content`** (Aligns items horizontally)

```css
.container {
  justify-content: center;
}
```

#### **✅ `align-items`** (Aligns items vertically)

```css
.container {
  align-items: center;
}
```

📌 **Example:**

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

```html
<div class="container">
  <div>Box 1</div>
  <div>Box 2</div>
  <div>Box 3</div>
</div>
```

---

### **2️⃣ Building a Header & Navbar**

```css
nav {
  background-color: black;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 10px;
}
```

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

---

### **3️⃣ `z-index` (Layer Control)**

```css
.box1 {
  position: absolute;
  z-index: 2;
}

.box2 {
  position: absolute;
  z-index: 1;
}
```

---

### **4️⃣ Creating a Footer**

```css
footer {
  background-color: gray;
  text-align: center;
  padding: 20px;
}
```

---

### **5️⃣ Box Shadows**

```css
.box {
  width: 200px;
  height: 100px;
  box-shadow: 5px 5px 10px gray;
}
```

---

### **6️⃣ Full Page Layout (Header, Body, Footer)**

```css
header, footer {
  background-color: darkblue;
  color: white;
  text-align: center;
  padding: 20px;
}

.content {
  padding: 20px;
}
```

```html
<header>Header</header>
<div class="content">Main Content</div>
<footer>Footer</footer>
```

---

### **7️⃣ Animations**

#### **✅ `@keyframes` Example**

```css
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 2s;
}
```

---

### **8️⃣ Responsive Design**

```css
@media (max-width: 600px) {
  body {
    background-color: lightgray;
  }
}
```

---


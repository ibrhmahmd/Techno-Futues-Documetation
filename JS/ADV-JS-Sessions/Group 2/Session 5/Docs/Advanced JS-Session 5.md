---
title: "Advanced JavaScript - Session 5"
author: "---"
date: "2025"
---

## Topic 1: Advanced Attribute Manipulation

<div class="arabic">
التعامل المتقدم مع خصائص العناصر
</div>

```javascript
// Real-life example: Interactive image gallery with data attributes
function setupImageGallery() {
    const gallery = document.querySelector('.image-gallery');
    const mainImage = document.querySelector('.main-image');
    const imageInfo = document.querySelector('.image-info');
    
    // Using event delegation for all thumbnail clicks
    gallery.addEventListener('click', (event) => {
        // Check if a thumbnail was clicked
        if (event.target.hasAttribute('data-full-img')) {
            // Get data attributes from the clicked thumbnail
            const fullImageSrc = event.target.getAttribute('data-full-img');
            const imageTitle = event.target.getAttribute('data-title');
            const imageDesc = event.target.getAttribute('data-description');
            
            // Update main image source
            mainImage.setAttribute('src', fullImageSrc);
            mainImage.setAttribute('alt', imageTitle);
            
            // Update image information
            imageInfo.querySelector('h3').textContent = imageTitle;
            imageInfo.querySelector('p').textContent = imageDesc;
            
            // Mark the active thumbnail
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.removeAttribute('data-active');
            });
            event.target.setAttribute('data-active', 'true');
        }
    });
}

// HTML Usage:
// <div class="image-gallery">
//   <img class="thumbnail" src="thumb1.jpg" data-full-img="image1.jpg" data-title="Mountain View" data-description="Beautiful mountain landscape">
//   <img class="thumbnail" src="thumb2.jpg" data-full-img="image2.jpg" data-title="Ocean Sunset" data-description="Stunning sunset over the ocean">
// </div>
// <div class="main-image-container">
//   <img class="main-image" src="image1.jpg" alt="Mountain View">
//   <div class="image-info">
//     <h3>Mountain View</h3>
//     <p>Beautiful mountain landscape</p>
//   </div>
// </div>
```

<div class="arabic">
مثال عملي لاستخدام خصائص البيانات (data attributes) لإنشاء معرض صور تفاعلي
</div>

## Topic 2: Custom Attributes for Enhanced Functionality

<div class="arabic">
استخدام خصائص مخصصة لتحسين وظائف العناصر
</div>

```javascript
// Real-life example: Tooltip system using custom attributes
function initializeTooltips() {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);
    
    // Find all elements with tooltip attribute
    const elementsWithTooltips = document.querySelectorAll('[data-tooltip]');
    
    elementsWithTooltips.forEach(element => {
        // Show tooltip on mouse enter
        element.addEventListener('mouseenter', () => {
            // Get tooltip text and position
            const tooltipText = element.getAttribute('data-tooltip');
            const position = element.getAttribute('data-tooltip-position') || 'top';
            
            // Set tooltip content and show it
            tooltip.textContent = tooltipText;
            tooltip.setAttribute('data-position', position);
            tooltip.style.display = 'block';
            
            // Position the tooltip relative to the element
            const rect = element.getBoundingClientRect();
            
            if (position === 'top') {
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            } else if (position === 'bottom') {
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.bottom + 10 + 'px';
            }
        });
        
        // Hide tooltip on mouse leave
        element.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
}

// HTML Usage:
// <button data-tooltip="Save your changes" data-tooltip-position="top">Save</button>
// <a href="#" data-tooltip="View more information" data-tooltip-position="bottom">More info</a>
```

<div class="arabic">
مثال عملي لإنشاء نظام تلميحات (tooltips) باستخدام خصائص مخصصة
</div>

## Topic 3: Advanced CSS Class Manipulation

<div class="arabic">
التعامل المتقدم مع فئات CSS
</div>

```javascript
// Real-life example: Interactive tabbed interface
function setupTabbedInterface() {
    const tabContainer = document.querySelector('.tabs');
    const contentPanels = document.querySelectorAll('.tab-content');
    
    tabContainer.addEventListener('click', (event) => {
        // Check if a tab was clicked
        if (event.target.classList.contains('tab')) {
            const targetId = event.target.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.tab').forEach(tab => {
                // Toggle the active class
                if (tab === event.target) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            // Show the corresponding content panel
            contentPanels.forEach(panel => {
                if (panel.id === targetId) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        }
    });
}

// HTML Usage:
// <div class="tabs">
//   <button class="tab active" data-tab="tab1">Tab 1</button>
//   <button class="tab" data-tab="tab2">Tab 2</button>
//   <button class="tab" data-tab="tab3">Tab 3</button>
// </div>
// <div class="tab-content-container">
//   <div id="tab1" class="tab-content active">Content for Tab 1</div>
//   <div id="tab2" class="tab-content">Content for Tab 2</div>
//   <div id="tab3" class="tab-content">Content for Tab 3</div>
// </div>
```

<div class="arabic">
مثال عملي لإنشاء واجهة تبويب تفاعلية باستخدام التلاعب بفئات CSS
</div>

## Topic 4: Dynamic Styling with JavaScript

<div class="arabic">
تغيير الأنماط بشكل ديناميكي باستخدام جافاسكريبت
</div>

```javascript
// Real-life example: Theme switcher with style manipulation
function createThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        // Toggle between light and dark themes
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        setTheme(newTheme);
        
        // Save preference
        localStorage.setItem('theme', newTheme);
    });
    
    function setTheme(theme) {
        // Set theme attribute on root element
        root.setAttribute('data-theme', theme);
        
        // Update toggle button text
        themeToggle.textContent = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
        
        // Update specific styles dynamically
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#222';
            document.body.style.color = '#eee';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#333';
        }
    }
}

// HTML Usage:
// <button id="theme-toggle">Switch to Dark Mode</button>
```

<div class="arabic">
مثال عملي لإنشاء مبدل للسمات (الوضع الفاتح والداكن) باستخدام التلاعب بالأنماط
</div>

## Topic 5: CSS Variables Manipulation with JavaScript

<div class="arabic">
التعامل مع متغيرات CSS باستخدام جافاسكريبت
</div>

```javascript
// Real-life example: Interactive color customizer
function setupColorCustomizer() {
    const colorPickers = document.querySelectorAll('.color-picker');
    const root = document.documentElement;
    
    colorPickers.forEach(picker => {
        // Get the CSS variable name from the data attribute
        const cssVariable = picker.getAttribute('data-css-var');
        
        // Set initial color picker value from current CSS variable
        const initialColor = getComputedStyle(root).getPropertyValue(`--${cssVariable}`).trim();
        picker.value = initialColor;
        
        // Update CSS variable when color is changed
        picker.addEventListener('input', () => {
            root.style.setProperty(`--${cssVariable}`, picker.value);
            
            // Update related elements
            const previewElement = document.querySelector(`[data-preview="${cssVariable}"]`);
            if (previewElement) {
                previewElement.textContent = picker.value;
            }
            
            // Save preferences
            saveColorPreferences();
        });
    });
    
    function saveColorPreferences() {
        const preferences = {};
        colorPickers.forEach(picker => {
            preferences[picker.getAttribute('data-css-var')] = picker.value;
        });
        localStorage.setItem('colorPreferences', JSON.stringify(preferences));
    }
    
    // Load saved preferences
    const savedPreferences = JSON.parse(localStorage.getItem('colorPreferences') || '{}');
    Object.entries(savedPreferences).forEach(([variable, value]) => {
        root.style.setProperty(`--${variable}`, value);
        const picker = document.querySelector(`[data-css-var="${variable}"]`);
        if (picker) picker.value = value;
    });
}

// HTML Usage:
// <div class="color-customizer">
//   <div class="color-control">
//     <label>Primary Color</label>
//     <input type="color" class="color-picker" data-css-var="primary-color">
//     <span data-preview="primary-color">#3498db</span>
//   </div>
//   <div class="color-control">
//     <label>Accent Color</label>
//     <input type="color" class="color-picker" data-css-var="accent-color">
//     <span data-preview="accent-color">#e74c3c</span>
//   </div>
// </div>
```

<div class="arabic">
مثال عملي لإنشاء أداة تخصيص الألوان باستخدام متغيرات CSS
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: قم بإنشاء بطاقة منتج تفاعلية مع خيارات تخصيص (اللون، الحجم) باستخدام الخصائص المخصصة وفئات CSS
</div>

```javascript
// Exercise skeleton code
function createInteractiveProductCard() {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // Add product image, title, price
    // Add color options using data attributes
    // Add size options using class manipulation
    // Add to cart button with dynamic styling
    
    return productCard;
}
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **Advanced Attribute Manipulation**: Using custom data attributes for enhanced functionality
2. **CSS Class Management**: Dynamic class addition and removal for state changes
3. **Style Manipulation**: Direct style property changes for dynamic visual effects
4. **CSS Variables**: Manipulating CSS custom properties with JavaScript
5. **Theme Switching**: Creating light/dark mode and custom themes

## Advanced: Interactive UI Components

<div class="arabic">
مكونات واجهة المستخدم التفاعلية
</div>

| Feature | Example Usage | Common Use Case |
|---------|--------------|------------------|
| data-* attributes | data-tooltip | Custom metadata |
| classList.toggle | .toggle('active') | State toggling |
| style properties | element.style.color | Dynamic styling |
| CSS variables | --primary-color | Theme customization |
| localStorage | Saving preferences | Persistent settings |

<div class="arabic">
استخدام هذه الميزات يساعد في إنشاء مكونات واجهة مستخدم متقدمة وقابلة للتخصيص
</div>
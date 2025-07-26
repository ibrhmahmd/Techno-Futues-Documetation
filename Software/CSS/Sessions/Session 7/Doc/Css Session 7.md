---
title: "CSS - Session 7: Transitions & Animations"
author: "Ibrahim Ahmed/Techno Future"
date: "2025"
---

## Topic 1: CSS Transitions (الانتقالات في CSS)

<div class="arabic">
شرح كيفية استخدام خصائص الانتقال لإنشاء تأثيرات حركية سلسة.
</div>

### What are CSS Transitions?
- Definition and purpose
- When to use transitions
- Browser support and performance considerations

### Transition Properties
```css
/* Shorthand */
transition: property duration timing-function delay;

/* Individual properties */
transition-property: all | property-name;
transition-duration: time (e.g., 0.3s, 500ms);
transition-timing-function: ease | linear | ease-in | ease-out | cubic-bezier();
transition-delay: time;
```

### Practical Examples
```css
/* Basic button hover effect */
.button {
  background: #3498db;
  transition: background 0.3s ease;
}
.button:hover {
  background: #2980b9;
}

/* Multiple properties */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
```

---

## Topic 2: CSS Animations (الحركات في CSS)

<div class="arabic">
شرح كيفية إنشاء حركات متقدمة باستخدام CSS Animations.
</div>

### @keyframes Rule
```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### Animation Properties
```css
/* Shorthand */
animation: name duration timing-function delay iteration-count direction fill-mode play-state;

/* Individual properties */
animation-name: slideIn;
animation-duration: 1s;
animation-timing-function: ease-in-out;
animation-delay: 0.5s;
animation-iteration-count: infinite | number;
animation-direction: normal | reverse | alternate | alternate-reverse;
animation-fill-mode: none | forwards | backwards | both;
animation-play-state: running | paused;
```

### Practical Examples
```css
/* Bouncing loader */
.loader {
  width: 20px;
  height: 20px;
  background: #3498db;
  border-radius: 50%;
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-20px); }
}

/* Fade in on load */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.5s ease-in forwards;
}
```

---

## Topic 3: Performance & Best Practices (الأداء وأفضل الممارسات)

<div class="arabic">
نصائح لتحسين أداء الحركات والانتقالات.
</div>

### Performance Considerations
- Use `transform` and `opacity` for smooth animations
- Avoid animating properties that trigger reflow (width, height, margin, etc.)
- Use `will-change` property for optimization
- Consider `prefers-reduced-motion` for accessibility

### Accessibility
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Best Practices
1. Keep animations subtle and purposeful
2. Maintain 60fps performance
3. Test on different devices and browsers
4. Provide fallbacks for non-supporting browsers

---

## Topic 4: Advanced Techniques (تقنيات متقدمة)

### Animation Libraries
- Animate.css
- GSAP (GreenSock Animation Platform)
- Motion One

### Scroll-based Animations
```css
/* Using Intersection Observer API */
.fade-in-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### SVG Animations
```css
/* Simple SVG animation */
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s ease-out forwards;
}
```

---

## Homework (الواجب المنزلي)

1. Create a button with hover and active states using transitions
2. Build a loading spinner using CSS animations
3. Implement a simple image gallery with fade/slide transitions
4. Create an animated navigation menu
5. (Advanced) Build a storytelling animation that triggers on scroll

### Resources
- [MDN CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS-Tricks: A Complete Guide to CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/)
- [CSS Animation for Beginners](https://www.smashingmagazine.com/2021/09/guide-animations-css/)

---

## Next Session Preview: CSS Preprocessors

<div class="arabic">
في الجلسة القادمة، سنتعرف على معالجات CSS مثل SASS و LESS.
</div>

- Variables and nesting
- Mixins and functions
- Modular CSS architecture
- Setting up a preprocessor in your workflow

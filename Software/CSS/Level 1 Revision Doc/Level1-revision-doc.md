CSS Level 1 — Sessions 1–4 Revision (EN + AR)

1) How CSS is added (ways) طرق إضافة CSS
- Inline: Style on the element itself.
  - داخل الوسم نفسه باستخدام الخاصية style.
  - Example:
    `<h1 style="color: red; background-color: yellow;">Title</h1>`

- Internal: `style` in the head.
  - كتابة CSS داخل `<style>` في رأس الصفحة.
  - Example:
    `p { color: green; }`
- External: link to .css file.
  - ربط ملف CSS خارجي بالصفحة.
  - Example:
    `<link rel="stylesheet" href="styles.css">`

2) Selectors (basic) المنتقيات الأساسية
- Element selector: targets all tags by name.
  - منتقي العنصر: يختار كل العناصر من نفس النوع.
  - Example:
    `p { color: blue; }`
- Class selector: targets elements with a class.
  - منتقي الكلاس: يختار العناصر التي تحمل نفس الكلاس.
  - Example:
    `.note { background-color: #f9f9f9; }`

3) Core visual properties خصائص الشكل الأساسية
- color
  - EN: Text color.
  - AR: لون النص.
  - Example:
    `p { color: #333; }`
- background-color
  - EN: Element background color.
  - AR: لون خلفية العنصر.
  - Example:
    `div { background-color: rgb(240,240,240); }`
- border (width style color)
  - EN: Adds an outline with width, style, color.
  - AR: يضيف إطاراً يحدد السمك والنمط واللون.
  - Example:
    `p { border: 2px solid black; }`
- border-radius
  - EN: Rounds corners.
  - AR: تدوير زوايا العنصر.
  - Example:
    `div { border-radius: 12px; }`
    div { border-radius: 12px; }
    ```
- width / height
  - EN: Element dimensions.
  - AR: أبعاد العنصر.
  - Example:
    ```css
    div { width: 300px; height: 150px; }
    ```
- min-width / max-width / min-height / max-height
  - EN: Constrain size ranges.
  - AR: تحديد الحدود الدنيا والعظمى للأبعاد.
  - Example:
    ```css
    img { max-width: 100%; }
    ```
- padding
  - EN: Space inside border.
  - AR: مسافة داخلية حول المحتوى.
  - Example:
    ```css
    div { padding: 16px; }
    ```
- margin
  - EN: Space outside border.
  - AR: مسافة خارجية حول العنصر.
  - Example:
    ```css
    div { margin: 20px 0; }
    ```
- text-align
  - EN: Horizontal alignment of inline content.
  - AR: محاذاة أفقية للنص.
  - Example:
    ```css
    h1 { text-align: center; }
    ```
- font-size
  - EN: Size of text (px, em, rem, %).
  - AR: حجم الخط (px, em, rem, %).
  - Example:
    ```css
    p { font-size: 16px; }
    ```
- font-family
  - EN: Typeface stack fallback.
  - AR: عائلة الخط وسلسلة البدائل.
  - Example:
    ```css
    body { font-family: Arial, sans-serif; }
    ```
- text-decoration (+ text-decoration-color)
  - EN: Underline/line-through/overline and its color.
  - AR: خطوط تزيين النص ولونها.
  - Example:
    ```css
    a { text-decoration: underline; text-decoration-color: red; }
    ```

4) Box model نموذج الصندوق
- Concept: content + padding + border + margin.
  - الفكرة: المحتوى + الحشوة + الحدود + الهامش.
- box-sizing
  - EN: How width/height are calculated.
  - AR: طريقة حساب الأبعاد.
  - Example:
    ```css
    * { box-sizing: border-box; }
    ```

5) Display العرض
- block | inline | inline-block | none
  - EN: Controls layout behavior and line breaks.
  - AR: يتحكم في سلوك العرض وكسر الأسطر.
  - Example:
    ```css
    span { display: inline; }
    div  { display: block; }
    img  { display: inline-block; }
    .hide { display: none; }
    ```

6) Color systems أنظمة الألوان
- Hex, RGB, RGBA, HSL, HSLA
  - EN: Different ways to define colors (RGBA/HSLA add alpha/opacity).
  - AR: طرق متنوعة لتعريف الألوان (RGBA/HSLA تضيف الشفافية).
  - Example:
    ```css
    h2 { color: #1a73e8; }
    p  { color: rgb(66,133,244); }
    div{ background-color: rgba(0,0,0,.5); }
    small { color: hsl(217,89%,61%); }
    ```

7) Backgrounds الخلفيات
- background-image / background-repeat / background-position / background-size / background (shorthand)
  - EN: Control solid, gradient, or image backgrounds.
  - AR: التحكم بخلفيات لون ثابت أو تدرج أو صورة.
  - Examples:
    ```css
    section { background-color: #f0f0f0; }

    header {
      background: linear-gradient(to right, #ff9966, #ff5e62);
    }

    main {
      background-image: url('pattern.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    ```

8) Borders & effects الحدود والتأثيرات
- border-width / border-style / border-color + per-side
  - EN: Customize each side or use shorthand.
  - AR: تخصيص كل جانب أو استخدام المختصر.
  - Example:
    ```css
    p { border-top: 1px dashed #999; }
    ```
- box-shadow
  - EN: Shadow around elements.
  - AR: ظل خارجي للعناصر.
  - Example:
    ```css
    div { box-shadow: 4px 6px 12px rgba(0,0,0,.2); }
    ```
- text-shadow
  - EN: Shadow behind text.
  - AR: ظل للنص.
  - Example:
    ```css
    h1 { text-shadow: 2px 2px 4px rgba(0,0,0,.3); }
    ```

9) Typography & text styling الطباعة وتنسيق النص
- font-weight
  - EN: Thickness (300, 400, 700...).
  - AR: سمك الخط (قِيَم رقمية).
  - Example:
    ```css
    strong { font-weight: 700; }
    ```
- line-height
  - EN: Line spacing (unitless recommended).
  - AR: ارتفاع السطر (يُفضّل بدون وحدة).
  - Example:
    ```css
    p { line-height: 1.6; }
    ```
- letter-spacing
  - EN: Space between letters.
  - AR: المسافة بين الحروف.
  - Example:
    ```css
    h2 { letter-spacing: 0.05em; }
    ```
- word-spacing
  - EN: Space between words.
  - AR: المسافة بين الكلمات.
  - Example:
    ```css
    p { word-spacing: 0.3em; }
    ```
- text-indent
  - EN: Indent first line.
  - AR: مسافة بادئة لأول سطر.
  - Example:
    ```css
    p { text-indent: 2em; }
    ```
- text-overflow (with white-space and overflow)
  - EN: Show ellipsis (…) when clipped.
  - AR: إظهار … عند قطع النص.
  - Example:
    ```css
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 300px;
    }
    ```

10) DevTools أدوات المطوّر
- EN: Inspect elements, live-edit CSS, view box model.
- AR: فحص العناصر، تعديل CSS مباشرة، رؤية نموذج الصندوق.

Mini practice تمارين قصيرة
- Style a card with padding, border-radius, box-shadow, and centered title.
- صمّم بطاقة تحتوي على حشوة، زوايا دائرية، ظل، وعنوان بمحاذاة وسط.


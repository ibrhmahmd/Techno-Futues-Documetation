
## Session 4 — Passing Data via URL + Footer Component
English — العربية

### 1) Why each item needs an ID
- The ID links the list item to its detail page.  
  يربط المعرّف العنصر في القائمة بصفحة التفاصيل.
- In [Data.js](cci:7://file:///e:/iCloud~md~obsidian/Cloud%20Notes/Techno/Software/Front-end/Sessions/Session%204/Demo/Data.js:0:0-0:0), every card has `id`, and `cardDetails` is keyed by that same `id`.  
  في [Data.js](cci:7://file:///e:/iCloud~md~obsidian/Cloud%20Notes/Techno/Software/Front-end/Sessions/Session%204/Demo/Data.js:0:0-0:0)، كل بطاقة لديها `id`، وكائن `cardDetails` يستخدم نفس المعرّف كمفتاح.

Code from `Software/Front-end/Sessions/Session 4/Demo/Data.js`:
```javascript
export const cards = [
    {
      id: 1,
      title: 'Travel Deals',
      content: 'Explore amazing flight discounts for your next adventure.',
      buttonText: 'Book Now',
      buttonClass: 'btn-primary',
      iconClass: 'bi-airplane'
    },
```

```javascript
// Additional details for each card, keyed by id
export const cardDetails = {
  1: {
    imageUrl: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200',
    seller: 'SkyWay Travels',
    price: 499.99,
    rating: 4.6,
    reviewsCount: 321,
    stock: 'Available',
    soldCount: 1200,
    longDescription: 'Exclusive travel deals to top destinations. Save big on flights and hotels for your next journey.'
  },
```

— So, clicking a card with `id = 1` should open details for the entry under key `1`.  
— عند الضغط على بطاقة `id = 1` يتم عرض تفاصيل المفتاح `1` في `cardDetails`.

---

### 2) Navigate by putting the ID in the URL
- On click, redirect to `Item.html?id=<ID>`.  
  عند الضغط، ننتقل إلى `Item.html?id=<ID>`.

Provided demo snippet:
```javascript
cardButton.addEventListener('click', function () {
            const id = cardInfo.id;
            
            if (typeof id === 'number') {
                // index.html and Item.html are in the same folder
                window.location.href = 'Item.html?id=' + id;
            } else {
                console.warn('Missing id for card', cardInfo);
            }
        });
```

- We pass the `id` as a query string parameter.  
  نُمرّر `id` كـ query string في رابط الصفحة.

---

### 3) Read the ID from the URL on the details page
- Use `URLSearchParams` to get `id`, then convert to a number.  
  استخدم `URLSearchParams` للحصول على `id` ثم حوّله لرقم.

Code from `Software/Front-end/Sessions/Session 4/Demo/Item.js`:
```javascript
const params = new URLSearchParams(window.location.search);
const idRaw = params.get('id');
const id = idRaw ? Number(idRaw) : NaN;
```

- If needed, validate `id` before loading data.  
  عند الحاجة، تحقّق من صحة `id` قبل تحميل البيانات.

---


## Footer Component — Step by Step

### A) Ensure Bootstrap CSS
- Inject Bootstrap stylesheet so the footer uses Bootstrap classes.  
  أضِف ملف أنماط Bootstrap حتى يستفيد الفوتر من كلاسّات Bootstrap.

Code from `Software/Front-end/Sessions/Session 4/Demo/Footer.js`:
```javascript
// Match Header.js approach: ensure Bootstrap CSS
let CdnLink = document.createElement('link');
CdnLink.rel = 'stylesheet';
CdnLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
document.head.appendChild(CdnLink);
```

---

### B) Wait for DOM and set page layout
- Run after DOM is ready and make body full height/flex so footer sticks to bottom.  
  شغّل الكود بعد جاهزية DOM واجعل الجسم بطول كامل وبنمط flex ليظهر الفوتر في الأسفل.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Ensure page stretches full height and footer sticks to bottom
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
```

---

### C) Create the footer wrapper
- Create `<footer>` and apply background, color, padding, and auto margin-top.  
  أنشئ عنصر `<footer>` وأضف كلاسّات الخلفية واللون والمسافات و`mt-auto`.

```javascript
    // Footer wrapper
    const footerEl = document.createElement('footer');
    footerEl.classList.add('bg-primary', 'text-white', 'py-3', 'mt-auto');
```

---

### D) Build the inner container
- Add a fluid container with flex layout and alignment.  
  أضف حاوية بعرض كامل مع تخطيط flex ومحاذاة مناسبة.

```javascript
    // Container like Header.js
    const container = document.createElement('div');
    container.classList.add(
        'container-fluid',
        'd-flex',
        'justify-content-between',
        'align-items-center'
    );
```

---

### E) Left text (branding)
- Small text on the left (e.g., app name/year).  
  نص صغير يسار الفوتر (مثل اسم التطبيق/السنة).

```javascript
    // Left text
    const leftText = document.createElement('small');
    leftText.classList.add('mb-0');
    leftText.textContent = ' 2025 Front App';
```

---

### F) Right links (navigation)
- Create a links wrapper and add “Home” and “Contact” links.  
  أنشئ حاوية روابط وأضف روابط “Home” و“Contact”.

```javascript
    // Right links
    const linksWrap = document.createElement('div');

    const homeLink = document.createElement('a');
    homeLink.href = 'Home.html';
    homeLink.textContent = 'Home';
    homeLink.classList.add('text-white', 'text-decoration-none', 'me-3');

    const contactLink = document.createElement('a');
    contactLink.href = '#';
    contactLink.textContent = 'Contact';
    contactLink.classList.add('text-white', 'text-decoration-none');

    linksWrap.appendChild(homeLink);
    linksWrap.appendChild(contactLink);
```

---

### G) Fun facts area (interactive)
- Facts array, text placeholder, and a button to cycle facts on click.  
  مصفوفة “حقائق”، ونص مبدئي، وزر يبدّل الحقائق عند النقر.

```javascript
    // Simple Fun Facts embedded inside footer
    const facts = ['Fact One 1', 'Fact Two 2', 'Fact Three 3', 'Fact Four 4', 'Fact Five 5'];
    const funWrap = document.createElement('div');
    funWrap.classList.add('d-flex', 'align-items-center', 'gap-2');

    const factPara = document.createElement('small');
    factPara.id = 'footer-fact';
    factPara.classList.add('mb-0');
    factPara.textContent = 'Click for a fun fact!';

    const factBtn = document.createElement('button');
    factBtn.type = 'button';
    factBtn.id = 'footerFactBtn';
    factBtn.classList.add('btn', 'btn-light', 'btn-sm');
    factBtn.textContent = 'Next Fact >';

    funWrap.appendChild(factPara);
    funWrap.appendChild(factBtn);

    factBtn.addEventListener('click', () => {
        const random = facts[Math.floor(Math.random() * facts.length)];
        factPara.textContent = random;
    });
```

---

### H) Assemble and inject into the page
- Append all parts to the container and footer, then attach to body.  
  اجمع الأجزاء داخل الحاوية والفوتر، ثم أضِف الفوتر لنهاية `body`.

```javascript
    // Assemble
    container.appendChild(leftText);
    container.appendChild(funWrap);
    container.appendChild(linksWrap);
    footerEl.appendChild(container);

    // Inject at end of body
    document.body.appendChild(footerEl);
});
```

---

### Quick usage
- Include [Footer.js](cci:7://file:///e:/iCloud~md~obsidian/Cloud%20Notes/Techno/Software/Front-end/Sessions/Session%204/Demo/Footer.js:0:0-0:0) on pages that need a footer; it auto-renders on load.  
  أدرج [Footer.js](cci:7://file:///e:/iCloud~md~obsidian/Cloud%20Notes/Techno/Software/Front-end/Sessions/Session%204/Demo/Footer.js:0:0-0:0) في الصفحات التي تحتاج فوتر؛ سيتم توليده تلقائيًا عند التحميل.

---

### Quick Hints — تلميحات سريعة
- Keep `id` numeric and unique in `cards`; use it to index `cardDetails`.  
  اجعل `id` رقميًا وفريدًا في `cards`؛ واستخدمه للوصول إلى `cardDetails`.
- Always convert URL `id` to `Number` and check it before rendering.  
  حوّل `id` القادم من الرابط إلى رقم وتحقق منه قبل العرض.
- Include the footer script on pages where you need it.  
  أضِف سكربت الفوتر في الصفحات التي تحتاجه فيها.
CSS Level 1 — Revision Assessment (EN + AR)

Instructions
- Answer in English or Arabic. إجِب بالعربية أو الإنجليزية.
- Multiple choice unless stated. اختيار من متعدد إلا إذا ذُكر غير ذلك.

Section 1: Adding CSS (طرق إضافة CSS) — 10 pts
1) Which adds CSS directly on an element? أي طريقة تضيف CSS داخل العنصر؟
- A) External
- B) Internal
- C) Inline ✓
- D) Import

2) Where does internal CSS live? أين نكتب CSS الداخلي؟
- A) In <footer>
- B) In <style> inside <head> ✓
- C) In a .css file
- D) In <script>

3) Complete the link tag to load styles.css أكمل وسم الربط:
<link rel="stylesheet" href="_____"> → styles.css ✓

Section 2: Selectors (المنتقيات) — 10 pts
4) Select all <p> tags: اختر جميع فقرات p:
- A) #p
- B) .p
- C) p ✓
- D) *p

5) Select elements with class note: اختر عناصر كلاس note:
- A) #note
- B) .note ✓
- C) note
- D) *note

6) Short answer: Write a rule to make all h1 blue. اكتب قاعدة تجعل h1 باللون الأزرق.
Expected: h1 { color: blue; } ✓

Section 3: Core Visual Properties (خصائص الشكل) — 15 pts
7) Text color property is: الخاصية التي تغيّر لون النص:
- A) background-color
- B) color ✓
- C) fill
- D) stroke

8) Rounded corners: الزوايا الدائرية:
- A) border
- B) border-radius ✓
- C) box-shadow
- D) outline

9) What does this set? ماذا يحدد هذا السطر؟
div { margin: 20px 0; }
- A) Inside spacing
- B) Outside spacing top/bottom 20 ✓
- C) Border width
- D) Height

10) Fill in: أكمل
div { padding: 16px; } → inside spacing ✓

Section 4: Box Model (نموذج الصندوق) — 15 pts
11) Order of layers: الترتيب الصحيح:
- A) margin → border → padding → content ✓
- B) padding → content → border → margin
- C) border → content → margin → padding
- D) content → margin → padding → border

12) box-sizing: border-box means: معناه:
- A) width excludes padding and border
- B) width includes padding and border ✓
- C) ignores margin
- D) removes border

13) Short answer: Make all elements use border-box. اجعل كل العناصر border-box.
Expected: * { box-sizing: border-box; } ✓

Section 5: Display (العرض) — 10 pts
14) Default display for div: العرض الافتراضي لـ div:
- A) inline
- B) block ✓
- C) inline-block
- D) none

15) Hide element visually and from layout: إخفاء العنصر تماماً:
- A) visibility: hidden
- B) display: none ✓
- C) opacity: 0
- D) z-index: -1

Section 6: Color Systems (أنظمة الألوان) — 10 pts
16) Which includes alpha/opacity? أي صيغة تحتوي على الشفافية؟
- A) HEX
- B) RGB
- C) RGBA ✓
- D) HSB

17) Short answer: Write HSL color for a saturated blue tone. اكتب لون أزرق مشبع بـ HSL.
Example: hsl(217, 89%, 61%) ✓ (accept reasonable)

Section 7: Backgrounds (الخلفيات) — 15 pts
18) Make a full-cover hero image: اجعل الصورة تغطي بالكامل:
- A) background-size: contain
- B) background-size: cover ✓
- C) background-repeat: repeat
- D) background-position: left

19) Prevent repeating: منع التكرار:
- A) background-repeat: no-repeat ✓
- B) background-repeat: auto
- C) background-size: none
- D) background-clip: padding-box

20) Code completion: إكمال كود
Set a gradient left→right:
header { background: linear-gradient(to right, #ff9966, #ff5e62); } ✓

Section 8: Borders & Effects (الحدود والتأثيرات) — 10 pts
21) Add a shadow around a box: إضافة ظل للصندوق:
- A) text-shadow
- B) box-shadow ✓
- C) filter: shadow
- D) border-shadow

22) Per-side border example picks which side? هذا المثال يحدد أي جانب؟
p { border-top: 1px dashed #999; }
- A) All sides
- B) Top only ✓
- C) Left only
- D) Bottom and top

Section 9: Typography (الطباعة) — 10 pts
23) Good unit for line-height in body text: وحدة مناسبة لـ line-height:
- A) px
- B) em
- C) unitless (e.g., 1.6) ✓
- D) %

24) Short answer: Center h1 text. توسيط عنوان h1.
Expected: h1 { text-align: center; } ✓

Section 10: DevTools (أدوات المطوّر) — 5 pts
25) DevTools lets you: أدوات المطوّر تتيح لك:
- A) Compile CSS
- B) Inspect and live-edit styles ✓
- C) Export images
- D) Minify automatically

Bonus Practice (اختياري)
- Design a card with padding, border-radius, box-shadow, and a centered title. صمّم بطاقة بحشوة، زوايا دائرية، ظل، وعنوان بمحاذاة الوسط.

Google Form Settings (اقتراحات)
- Limit to 1 response per person. حدِّد ردًا واحدًا لكل شخص.
- Collect emails if needed. جمع البريد الإلكتروني عند الحاجة.
- Shuffle question order for fairness. خلط ترتيب الأسئلة.
- Use required on most questions. جعل الأسئلة إلزامية.

Grading Guide (دليل التصحيح)
- Total: 100 pts.
- MCQs: 1 point each unless marked; shorts: 2–3 points based on completeness.
- Accept equivalent color values and reasonable HSL/RGBA answers.

Want me to save this into `Software/CSS/Level 1 Revision Doc/Assesment.md` and adjust point weights or add more code-completion items?
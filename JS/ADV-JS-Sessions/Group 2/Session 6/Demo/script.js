// 1. إنشاء صورة بالجافاسكريبت
const showImgBtn = document.getElementById('showImgBtn');
showImgBtn.addEventListener('click', function() {
  let img = document.createElement('img');
  img.src = 'wiggling-birb.png'; // حط صورة عندك بنفس الاسم أو غيره
  img.alt = 'Demo Image';
  document.getElementById('imgContainer').appendChild(img);
  showImgBtn.disabled = true; // عشان الصورة متتكررش
});












let footer_container = document.getElementById('footer_container');

document.getElementById('footer_container').appendChild(image_footer);






// 2. التحكم في الكلاسات
const colorBtn = document.getElementById('colorBtn');
// استخدم classList.toggle عشان تضيف أو تشيل كلاس
colorBtn.addEventListener('click', function() {
  this.classList.toggle('red');
});









let btn = document.createElement('button');
btn.textContent = 'Click me';
btn.classList.add('red');
document.body.appendChild(btn);





btn.addEventListener('click', function() {



btn.classList.toggle('blue');

})


// ممكن كمان تكتب كل الكلاسات مرة واحدة
// colorBtn.className = 'red big-btn';









// 3. التعامل مع الخصائص (attributes)
const disableBtn = document.getElementById('disableBtn');
disableBtn.addEventListener('click', function() {
  this.setAttribute('disabled', 'true'); // خلي الزرار مقفول
  this.textContent = 'Disabled'; // غير الكلام
});
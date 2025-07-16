// 1. التعامل مع الأحداث وتغيير الكلاسات
const highlightBtn = document.getElementById('highlightBtn');
const myBox = document.getElementById('myBox');
highlightBtn.addEventListener('click', function() {
  myBox.classList.toggle('highlight'); // لما تدوس الزرار، البوكس يتلون أو يرجع عادي
});





// 2. الهوفر: لما تعدي الماوس على الزرار
const hoverBtn = document.getElementById('hoverBtn');
const hoverBox = document.getElementById('hoverBox');

hoverBtn.addEventListener('mouseenter', function() {
  hoverBox.classList.add('hovered'); // لما تعدي الماوس، البوكس يتلون
});

hoverBtn.addEventListener('mouseleave', function() {
  hoverBox.classList.remove('hovered'); // لما تخرج بالماوس، البوكس يرجع عادي
});






// 3. التنقل بين عناصر الليست
const list = document.getElementById('myList');
const nextBtn = document.getElementById('nextBtn');

let current = list.firstElementChild;
current.classList.add('selected'); // أول عنصر متلون في الأول

nextBtn.addEventListener('click', function() {
  current.classList.remove('selected');
  current = current.nextElementSibling || list.firstElementChild;
  current.classList.add('selected');
});





// 4. المشروع الصغير: لون العنصر اللي تدوس عليه وأخوه اللي بعده
const miniItems = document.querySelectorAll('#miniList li');
miniItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // شيل الكلاسات من الكل
    miniItems.forEach(li => {
      li.classList.remove('selected');
      li.classList.remove('next-selected');
    });
    // ضيف الكلاس على العنصر اللي اتداس عليه
    this.classList.add('selected');
    // ولو فيه أخ بعده، ضيف له كلاس كمان
    if (this.nextElementSibling) {
      this.nextElementSibling.classList.add('next-selected');
    }
  });
});













let btn = document.createElement('button');
btn.textContent = 'Click me';
btn.classList.add('red');
document.body.appendChild(btn);





btn.addEventListener('mouseenter', function() {

  btn.classList.toggle('blue');
})

btn.addEventListener('mouseleave', function() {

  btn.classList.toggle('blue');
})
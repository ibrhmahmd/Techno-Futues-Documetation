// 1. JS Objects Demo / مثال الكائنات
// -------------------------------
document.getElementById('objDemoBtn').onclick = function() {
  // Create object / اعمل كائن
  // English: Create a student object
  // Arabic: هنعمل كائن طالب
  let student = {
    name: 'Omar', // الاسم
    age: 15,      // السن
    grade: 'A'    // التقدير
  };

  // Access property / اعرض خاصية
  let name = student.name; // English: Access name / Arabic: اعرض الاسم

  // Add property / ضيف خاصية
  student.school = 'Techno School'; // English: Add school / Arabic: ضيف المدرسة

  // Delete property / امسح خاصية
  delete student.grade; // English: Delete grade / Arabic: امسح التقدير

  // Show result / اعرض النتيجة
  document.getElementById('objOutput').textContent =
    'Student: ' + JSON.stringify(student) + '\nName: ' + name +
    '\n(الكائن بعد التعديلات: ' + JSON.stringify(student) + ')';
};

















// ---------------------------------------------
const demoList = document.getElementById('demoList');
const domOutput = document.getElementById('domOutput');

document.getElementById('firstChildBtn').onclick = function() {
  let first = demoList.firstElementChild;
  domOutput.textContent = 'First Child: ' + first.textContent + ' / أول عنصر: ' + first.textContent;
};


document.getElementById('lastChildBtn').onclick = function() {
  let last = demoList.lastElementChild;
  domOutput.textContent = 'Last Child: ' + last.textContent + ' / آخر عنصر: ' + last.textContent;
};


document.getElementById('nextSiblingBtn').onclick = function() {
  let first = demoList.firstElementChild;
  let next = first.nextElementSibling;
  domOutput.textContent = next ? ('Next Sibling: ' + next.textContent + ' / العنصر اللي بعده: ' + next.textContent) : 'No next sibling / مفيش عنصر بعده';
};



// Show parent / العنصر الأب
// English: Show parent of the list
// Arabic: اعرض العنصر الأب لليست

document.getElementById('parentBtn').onclick = function() {
  let parent = demoList.parentElement;
  domOutput.textContent = 'Parent tag: ' + parent.tagName + ' / العنصر الأب: ' + parent.tagName;
};











// 3. Storing in JSON (localStorage) Demo / مثال التخزين في جيسون
// ----------------------------------------------------------
const studentObj = { name: 'Omar', age: 15, school: 'Techno School' };
const jsonOutput = document.getElementById('jsonOutput');

// Save object to localStorage / احفظ الكائن
// English: Save studentObj as JSON
// Arabic: احفظ الكائن في localStorage

document.getElementById('saveJsonBtn').onclick = function() {
  localStorage.setItem('student', JSON.stringify(studentObj));
  jsonOutput.textContent = 'Saved! / اتحفظ!';
};

// Load object from localStorage / اعرض الكائن
// English: Load studentObj from JSON
// Arabic: اعرض الكائن من localStorage

document.getElementById('loadJsonBtn').onclick = function() {
  let data = localStorage.getItem('student');
  if (data) {
    let obj = JSON.parse(data);
    jsonOutput.textContent = 'Loaded: ' + JSON.stringify(obj) + ' / الكائن: ' + JSON.stringify(obj);
  } else {
    jsonOutput.textContent = 'Nothing saved / مفيش حاجة محفوظة';
  }
};

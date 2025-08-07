// // Practical exercise solution

// document.addEventListener("DOMContentLoaded", function() {
//   const bgBtn = document.getElementById("bgBtn");
//   const textBtn = document.getElementById("textBtn");
//   const demoText = document.getElementById("demoText");


//   // Object to track button click counts
//   const clickTracker = {
//     bgBtn: 0,
//     textBtn: 0
//   };

//   // Function to validate new text is not empty
//   function isValidText(text) {
//     return text.trim() !== "";
//   }





  

//   bgBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor =
//       document.body.style.backgroundColor === "rgb(255, 224, 102)";
//   });







//   textBtn.addEventListener("click", function() {
//     const newText = demoText.textContent === "نص تجريبي" ? "تم تغيير النص!" : "نص تجريبي";
//     if (isValidText(newText)) {
//       demoText.textContent = newText;
//     }
//     clickTracker.textBtn++;
//     demoText.textContent =
//       demoText.textContent === "نص تجريبي" ? "تم تغيير النص!" : "نص تجريبي";
//   });






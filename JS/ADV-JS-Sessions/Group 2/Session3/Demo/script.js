

let btn = document.querySelector(".bgBtnclass").innerHTML;

console.log(btn)


document.getElementById('mass').textContent= "1";






function force(m, a){
  return m * a;
}

let darkmode = document.getElementById("darkmode");
let whitemode =  document.getElementById("whitemode");


darkmode.addEventListener("click", function(event){
  event.preventDefault();

  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});


whitemode.addEventListener("click", function(event){
  event.preventDefault();

  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
})
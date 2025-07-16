const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 4;
let randomNumber = 0;

myButton.onclick = function () {
  randomNumber = Math.floor(Math.random() * max) + min;
  myLabel.innerHTML = " This is Your Random Number " + randomNumber;
};

// function changeColor() {
//   let colors = ["pink", "blue", "brown", "green", "lavender", "peachpuff"];
//   let randomColor = Math.floor(Math.random() * colors.length);
//   // document.body.style.backgroundColor = colors[randomColor];
//   document.body.style.backgroundColor = colors[randomColor];
// }

// function changeContent() {
//   document.getElementById("paraChanged").innerHTML = "ya content changed krdo";
//   document.getElementById("clickMe").innerHTML = "button text changed";
// }

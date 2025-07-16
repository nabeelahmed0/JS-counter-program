const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 100) {
    result.innerHTML = "Your Are Too big for this profile";
  } else if (age >= 18) {
    result.innerHTML = "You are an adult";
  } else if (age >= 13) {
    result.innerHTML = "You are an adult";
  } else if (age >= 0) {
    result.innerHTML = "You are a child";
  } else {
    result.innerHTML = "Please enter a valid age";
  }
};



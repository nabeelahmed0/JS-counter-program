const counterLabel = document.getElementById("counterLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let counter = 0;

increaseBtn.onclick = function () {
 counter += 1
  counterLabel.innerText = counter;
};

decreaseBtn.onclick = function () {
  counter--
  counterLabel.innerText = counter;
};

resetBtn.onclick = function () {
  counter = 0;
  counterLabel.innerText = counter;
};

console.log("hello");

let number = 0,
  num = document.querySelector("#number"),
  incBtn = document.querySelector("#increase"),
  decBtn = document.querySelector("#decrease"),
  resetBtn = document.querySelector("#reset");

incBtn.addEventListener("click", () => {
  number++;
  num.innerHTML = number;
});
decBtn.addEventListener("click", () => {
  number--;
  num.innerHTML = number;
});
resetBtn.addEventListener("click", () => {
  number = 0;
  num.innerHTML = 0;
});

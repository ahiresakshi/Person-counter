//document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById("count-el");
let saveE1 = document.getElementById("save-el");
let count = 0;
console.log(saveE1);
function increment() {
  count = count + 1;
  countEl.innerText = count;
}
increment();

function save() {
  let countstr = count + " - ";
  saveE1.innerText += countstr;
  console.log(count);
  countEl.innerText = 0;
  count = 0;
}

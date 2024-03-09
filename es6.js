import { renderHtml } from "./taskComponant.js";
const body = document.body;
body.innerHTML = "hello";
//Template literals
const arr = ["mohamed", "montassar", "ibtihel"];
const y = 9;
//body.innerHTML =
//Functions
const testFunction = (x) => console.log(x);

testFunction("bye");
//Array
const render = arr.map(
  (v) => ` <div class="single-task flex between">
<div class="flex">
  <input type="checkbox" class="state" />
  <p>${v}</p>
</div>
<button class="delete">
  <img src="./images/icon-cross.svg" alt="icon-cross" />
</button>
</div>`
);

console.log(render);
const filterByfirst = (v) => {
  return v[0] == "m";
};
const filtered = arr.filter((v) => filterByfirst(v));
console.log(filtered);
//Destructuring
const person = {
  name: "ibtihel",
  tel: 98498498498,
};
const { tel, name } = person;
//console.log(name, tel);
const addresse = "dededed";

//Spread operator
console.log({ ...person, addresse });
//object literals
const newPerson = {
  tel,
  name,
};
console.log(newPerson);
//Ternary operator
if (arr[0].length > 5) {
  console.log("sup à 5");
} else {
  console.log("inf à 5");
}
arr[2].length > 5 ? console.log("sup") : console.log("inf");
//Modules
console.log(renderHtml);

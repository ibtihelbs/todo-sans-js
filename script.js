let tasks = [];

const addInput = document.querySelector("#add");
const form = document.querySelector("#todo-form");
const tasksWrap = document.querySelector("#tasks-wrap");
const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const completedBtn = document.querySelector(".completed");
const clear = document.querySelector(".clear-completed");
const checkedFn = (i) => {
  const { completed } = tasks[i];
  tasks[i].completed = !completed;
  displayTask(tasks);
};
clear.addEventListener("click", () => {
  tasks = tasks.filter((v) => !v.completed);
  displayTask(tasks);
});
completedBtn.addEventListener("click", (e) => {
  console.log("first");
  const completedArr = tasks.filter((v) => v.completed);
  displayTask(completedArr);
});
activeBtn.addEventListener("click", (e) => {
  const activeArr = tasks.filter((v) => !v.completed);

  displayTask(activeArr);
});
allBtn.addEventListener("click", (e) => {
  displayTask(tasks);
});
const displayTask = (arr) => {
  let taskDisplay = "";
  taskDisplay += arr.map(
    (v, i) => `
  <div class="single-task flex between">
              <div class="flex">
                <form class="checked">
                  <input type="checkbox" ${
                    v.completed ? "checked" : ""
                  }  class="state" onchange="checkedFn(${i})"  />
                </form>
                <p class="${v.completed ? "lined" : "not-lined"}">${v.task}</p>
              </div>
              <button class="delete">
                <img src="./images/icon-cross.svg" alt="icon-cross" />
              </button>
            </div>
  `
  );
  tasksWrap.innerHTML = taskDisplay;
  const activeArr = tasks.filter((v) => !v.completed);
  const activeNumber = document.querySelector("#active-number");
  activeNumber.innerHTML = activeArr.length;
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = addInput.value;
  const completed = false;
  tasks.push({ task, completed });
  addInput.value = "";
  displayTask(tasks);
});

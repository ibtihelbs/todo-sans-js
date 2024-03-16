const addInput = document.querySelector("#add");
const form = document.querySelector("#todo-form");
const tasksWrap = document.querySelector("#tasks-wrap");
const activeBtn = document.querySelector(".active");
const completedBtn = document.querySelector(".completed");
const clear = document.querySelector(".clear-completed");
const allBtn = document.querySelector(".all");

class TaskManager {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push({ task, completed: false });

    this.html(this.tasks);
  }
  displayTask(v) {
    return `
    <div class="single-task flex between">
                <div class="flex">
                  <form class="checked">
                    <input type="checkbox" ${
                      v.completed ? "checked" : ""
                    }  class="state"   />
                  </form>
                  <p class="${v.completed ? "lined" : "not-lined"}">${
      v.task
    }</p>
                </div>
                <button class="delete">
                  <img src="./images/icon-cross.svg" alt="icon-cross" />
                </button>
              </div>
    `;
  }

  html(arr) {
    const tasksToDisplay = arr
      .map((v, i) => {
        return this.displayTask(v, i);
      })
      .join("");
    tasksWrap.innerHTML = tasksToDisplay;
    const checkbox = document.querySelectorAll(".state");
    checkbox.forEach((v, i) => {
      v.addEventListener("change", function (ev) {
        taskManager.edit(i);
      });
    });
    this.done = this.tasks.filter((v) => v.completed == true);
    this.active = this.tasks.filter((v) => v.completed !== true);
  }
  filterDone() {
    console.log(this.done);
    this.html(this.done);
  }
  filterActive() {
    //console.log(this.done);
    this.html(this.active);
  }
  edit(i) {
    this.tasks[i].completed = !this.tasks[i].completed;
    this.active = this.tasks.filter((v) => v.completed !== true);

    this.html(this.tasks);
    this.count();
  }
  count() {
    const activeNumber = document.querySelector("#active-number");
    activeNumber.innerHTML = this.active.length;
  }
}

const taskManager = new TaskManager();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = addInput.value;
  taskManager.addTask(val);
  addInput.value = "";
  completedBtn.addEventListener("click", function (ev) {
    e.stopPropagation();
    taskManager.filterDone();
  });
  activeBtn.addEventListener("click", function (f) {
    e.stopPropagation();
    taskManager.filterActive();
  });
  allBtn.addEventListener("click", function () {
    e.stopPropagation();
    taskManager.html(taskManager.tasks);
  });
  taskManager.count();
});

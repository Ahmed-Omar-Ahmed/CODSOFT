const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const displayItems = () => {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="task">
                <div class="content">
                  <input class="text" type="text" readonly="readonly" value="${itemsArray[i]}">
                </div>
                <div class="actions">
                  <button class="edit">Edit</button>
                  <button class="save hidden">Save</button>
                  <button class="delete">Delete</button>
                </div>
              </div>`;
  }
  document.querySelector("#tasks").innerHTML = items;
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
};

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const tasksContainer = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Gets the task's name
  const taskName = input.value;

  //Creates the task container
  const task = document.createElement("div");
  task.classList.add("task");

  //Creats the task's content container
  const taskContent = document.createElement("div");
  taskContent.classList.add("content");
  task.appendChild(taskContent);

  //Creates the task's content
  const taskInput = document.createElement("input");
  taskInput.classList.add("text");
  taskInput.type = "text";
  taskInput.value = taskName;
  taskInput.setAttribute("readonly", "readonly");
  taskContent.appendChild(taskInput);

  //Creates the task's actions container
  const taskActions = document.createElement("div");
  taskActions.classList.add("actions");

  //Creates the edit action
  const editAction = document.createElement("button");
  editAction.classList.add("edit");
  editAction.innerText = "Edit";
  taskActions.appendChild(editAction);

  //Creates the save action
  const saveAction = document.createElement("button");
  saveAction.classList.add("save");
  saveAction.classList.add("hidden");
  saveAction.innerText = "Save";
  taskActions.appendChild(saveAction);

  //Creates the delete action
  const deleteAction = document.createElement("button");
  deleteAction.classList.add("delete");
  deleteAction.innerText = "Delete";
  taskActions.appendChild(deleteAction);

  task.appendChild(taskActions);

  tasksContainer.appendChild(task);

  input.value = "";

  addItem(taskName);
});

const activateDeleteListeners = () => {
  let deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => {
      deleteItem(i);
    });
  });
};

const activateEditListeners = () => {
  const editBtn = document.querySelectorAll(".edit");
  const input = document.querySelectorAll("input.text");
  const saveBtn = document.querySelectorAll(".save");
  editBtn.forEach((eB, i) => {
    eB.addEventListener("click", () => {
      input[i].removeAttribute("readonly");
      input[i].focus();
      editBtn[i].classList.add("hidden");
      saveBtn[i].classList.remove("hidden");
    });
  });
};

const activateSaveListeners = () => {
  const saveBtn = document.querySelectorAll(".save");
  const inputs = document.querySelectorAll("input.text");
  saveBtn.forEach((sB, i) => {
    sB.addEventListener("click", () => {
      updateItem(inputs[i].value, i);
    });
  });
};

const addItem = (task) => {
  itemsArray.push(task);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems();
};

const deleteItem = (i) => {
  itemsArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems();
};

const updateItem = (text, i) => {
  itemsArray[i] = text;
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems();
};

window.addEventListener("load", () => {
  displayItems();
});

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

  //Creates the delete action
  const deleteAction = document.createElement("button");
  deleteAction.classList.add("delete");
  deleteAction.innerText = "Delete";
  taskActions.appendChild(deleteAction);

  task.appendChild(taskActions);

  tasksContainer.appendChild(task);

  input.value = "";

  editAction.addEventListener("click", (e) => {
    if (editAction.innerText.toLowerCase() == "edit") {
      editAction.innerText = "Save";
      taskInput.removeAttribute("readonly");
      taskInput.focus();
    } else {
      editAction.innerText = "Edit";
      taskInput.setAttribute("readonly", "readonly");
    }
  });

  deleteAction.addEventListener("click", (e) => {
    tasksContainer.removeChild(task);
  });
});

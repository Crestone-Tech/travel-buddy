// DEPENDENCIES
// Task Creation Modal elements
//const addTaskModal = $("#addTaskModal");
//const addTaskBtnEl = $("#add-task-btn");
//const saveTaskBtn = $("#saveTaskBtn");
//const taskTitleInput = $("#taskTitleInput");
//const taskDueDateInput = $("#taskDueDateInput");
//const taskDescriptionInput = $("#taskDescriptionInput");

for (reservation of document.querySelectorAll(".taxi"))
  reservation.children[0].children[0].classList.add("fa-taxi");

for (reservation of document.querySelectorAll(".airline"))
  reservation.children[0].children[0].classList.add("fa-plane");

for (reservation of document.querySelectorAll(".ferry"))
  reservation.children[0].children[0].classList.add("fa-ship");

for (reservation of document.querySelectorAll(".lodging"))
  reservation.children[0].children[0].classList.add("fa-bed");

for (reservation of document.querySelectorAll(".diving"))
  reservation.children[0].children[0].classList.add("fa-fish");

for (reservation of document.querySelectorAll(".free"))
  reservation.children[0].children[0].classList.add(
    "fa-solid",
    "fa-face-smile"
  );

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();
  //addTask();
  $("#addTaskModal").modal("hide");
  //clearInputFields();
  //renderTaskList();
}

$(document).ready(function () {
  $("#saveTaskBtn").on("click", handleAddTask);
  $("#taskDueDateInput").datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

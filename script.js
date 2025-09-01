document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  let taskText = document.getElementById("task").value;
  let dateTime = document.getElementById("datetime").value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  let taskContent = document.createElement("span");
  taskContent.textContent = `${taskText} ${dateTime ? "- " + dateTime : ""}`;
  li.appendChild(taskContent);

  // Complete Button
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = function () {
    taskContent.classList.toggle("completed");
  };

  // Edit Button
  let editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.onclick = function () {
    let newTask = prompt("Edit task:", taskText);
    if (newTask !== null && newTask.trim() !== "") {
      taskContent.textContent = `${newTask} ${dateTime ? "- " + dateTime : ""}`;
      taskText = newTask;
    }
  };

  // Delete Button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  document.getElementById("task").value = "";
  document.getElementById("datetime").value = "";
}

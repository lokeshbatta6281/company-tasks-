const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addBtn = document.getElementById("addBtn");

  // Add task on button click
  addBtn.addEventListener("click", addTask);

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }
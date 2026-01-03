/* ===== MAP ===== */
function toggleMap() {
  document.querySelectorAll("iframe").forEach((m) => {
    m.style.display = m.style.display === "none" ? "block" : "none";
  });
}

/* ===== TODO ===== */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const list = document.getElementById("taskList");

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    list.innerHTML += `<li>${t}
      <button onclick="removeTask(${i})">Remove</button>
    </li>`;
  });
}
function addTask() {
  const val = taskInput.value.trim();
  if (val) {
    tasks.push(val);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    renderTasks();
  }
}
function removeTask(i) {
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
function clearTasks() {
  tasks = [];
  localStorage.clear();
  renderTasks();
}
renderTasks();

/* ===== TIMER ===== */
let sec = 0;
let run = true;
setInterval(() => {
  if (run) {
    sec++;
    let h = String(Math.floor(sec / 3600)).padStart(2, "0");
    let m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    let s = String(sec % 60).padStart(2, "0");
    time.textContent = `${h}:${m}:${s}`;
  }
}, 1000);

function pauseTimer() {
  run = !run;
}
function resetTimer() {
  sec = 0;
}

function validateForm() {
  let valid = true;

  nameErr.style.display = "none";
  emailErr.style.display = "none";
  passErr.style.display = "none";
  successMsg.textContent = "";

  if (name.value.trim() === "") {
    nameErr.style.display = "block";
    valid = false;
  }
  if (!email.value.includes("@")) {
    emailErr.style.display = "block";
    valid = false;
  }
  if (password.value.length < 6) {
    passErr.style.display = "block";
    valid = false;
  }

  if (valid) {
    localStorage.setItem(
      "contactData",
      JSON.stringify({
        name: name.value,
        email: email.value,
      })
    );
    successMsg.textContent = "Your information is saved in this browser!";
  }

  return false;
}
function openMap() {
  // Address in JS format
  const address =
    "108/43 Vijaya Lakshmi Enclave 1st Floor H No 2 PJR Enclave Rd Gangaram ICRISAT Colony Hyderabad Telangana 500050";

  // Convert address to Google Maps URL
  const mapURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  // Redirect to Google Maps
  window.open(mapURL, "_blank"); // opens in new tab
}

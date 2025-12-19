let timeLeft = 120; // 2 minutes
let timer;
let started = false;

const input = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");

input.addEventListener("input", () => {
  if (!started) {
    started = true;
    timer = setInterval(updateTime, 1000);
  }

  let words = input.value.trim().split(/\s+/).length;
  let minutes = (120 - timeLeft) / 60;
  let wpm = minutes > 0 ? Math.round(words / minutes) : 0;
  wpmEl.innerText = wpm;
});

function updateTime() {
  if (timeLeft > 0) {
    timeLeft--;
    timeEl.innerText = timeLeft;
  } else {
    clearInterval(timer);
    input.disabled = true;
    alert("Time is up!");
  }
}

function restartTest() {
  clearInterval(timer);
  timeLeft = 120;
  started = false;
  input.value = "";
  input.disabled = false;
  timeEl.innerText = timeLeft;
  wpmEl.innerText = 0;
}

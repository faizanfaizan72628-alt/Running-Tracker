const timerDisplay = document.getElementById("timer");
const stepsDisplay = document.getElementById("steps");
const distanceDisplay = document.getElementById("distance");
const speedDisplay = document.getElementById("speed");
const caloriesDisplay = document.getElementById("calories");
const statusDisplay = document.getElementById("status");
const progress = document.getElementById("progress");
const goalText = document.getElementById("goalText");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let seconds = 0;
let steps = 0;
let distance = 0;
let calories = 0;
let timerInterval = null;
let running = false;
startBtn.addEventListener("click", function () {
    if (running === true) {
        return;
    }
    running = true;
    statusDisplay.textContent = "🏃 Running...";
    statusDisplay.style.background = "#dcfce7";
    statusDisplay.style.color = "#15803d";
    timerInterval = setInterval(function () {
        seconds++;
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        secs = secs < 10 ? "0" + secs : secs;
        timerDisplay.textContent =
            hours + ":" + minutes + ":" + secs;
        steps += 2;
        stepsDisplay.textContent = steps;
        distance = (steps * 0.75) / 1000;
        distanceDisplay.textContent =
            distance.toFixed(2);
        if (seconds > 0) {
            speed =
                (distance / seconds) * 3600;
            speedDisplay.textContent =
                speed.toFixed(2);
        }
        calories = Math.floor(distance * 60);
        caloriesDisplay.textContent = calories;
        let percentage = (distance / 5) * 100;
        if (percentage > 100) {
            percentage = 100;
        }
        progress.style.width = percentage + "%";
        goalText.textContent =
            Math.floor(percentage) + "%";
    }, 1000);
});
stopBtn.addEventListener("click", function () {
    if (running === false) {
        return;
    }
    running = false;
    clearInterval(timerInterval);
    statusDisplay.textContent = "⏸ Run Paused";
    statusDisplay.style.background = "#fef3c7";
    statusDisplay.style.color = "#92400e";

});
resetBtn.addEventListener("click", function () {
    clearInterval(timerInterval);
    running = false;
    seconds = 0;
    steps = 0;
    distance = 0;
    calories = 0;
    timerDisplay.textContent = "00:00:00";
    stepsDisplay.textContent = "0";
    distanceDisplay.textContent = "0.00";
    speedDisplay.textContent = "0.00";
    caloriesDisplay.textContent = "0";
    progress.style.width = "0%";
    goalText.textContent = "0%";
    statusDisplay.textContent = "Ready to Run";
    statusDisplay.style.background = "#e2e8f0";
    statusDisplay.style.color = "#475569";
});

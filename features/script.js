const textBox = document.getElementById("text");

const timer = document.getElementById("time");

const start = document.getElementById("start");

let duration = 60;

let textString;
let fullHTML = "";

let words;

let array;
function elementString() {
  textString = words.text.split("");

  array = textString.map((value) => {
    return `<span>${value}</span>`;
  });
  fullHTML = array.join("");
  textBox.innerHTML = fullHTML;
}

let easy;
let medium;
let hard;

function defaultSetting() {
  words = easy[Math.floor(Math.random() * easy.length)];
  elementString();
}

function difficulty(e) {
  if (!e.target.matches("button")) return; // Check which difficulty was selected

  if (e.target.id === "easy") {
    words = easy[Math.floor(Math.random() * easy.length)];
  } else if (e.target.id === "medium") {
    words = medium[Math.floor(Math.random() * medium.length)];
  } else {
    words = hard[Math.floor(Math.random() * hard.length)];
  }

  elementString();
}

fetch("./typing-speed-test-main/data.json")
  .then((response) => response.json())
  .then((data) => {
    easy = data.easy;
    medium = data.medium;
    hard = data.hard;

    defaultSetting();
  })
  .catch((error) => console.error("Error:", error));

document.getElementById("btn").addEventListener("click", difficulty);

function timeStart() {
  if (duration === "0") return;
  setInterval(() => {
    duration--;
    timer.innerText = duration;
  }, 1000);
}

let currentIndex = 0;

start.addEventListener("click", () => {
  timeStart();
  start.disabled = true;
  let span = textBox.querySelectorAll("span");

  span[currentIndex].classList.add("current");
});

const ignore = ["Shift", "Backspace", "Ctrl", "Enter", "Alt"];

document.addEventListener("keyup", (e) => {
  if (ignore.includes(e.key)) return;
  current = document.querySelector(".current");

  if (e.key === current.innerText) {
    current.classList.add("correct");
  } else {
    current.classList.add("incorrect");
  }
});

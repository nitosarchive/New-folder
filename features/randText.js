const textBox = document.getElementById("text");

const timer = document.getElementById("time");

const start = document.getElementById("start");

let duration = 60;

fetch("./typing-speed-test-main/data.json")
  .then((response) => response.json())
  .then((data) => {
    const easy = data.easy;
    const medium = data.medium;
    const hard = data.hard;

    function defaultSetting() {
      let difficultyText = easy[Math.floor(Math.random() * easy.length)];
      textBox.innerText = difficultyText.text;
    }

    document.getElementById("btn").addEventListener("click", (e) => {
      if (!e.target.matches("button")) return; // Check which difficulty was selected

      if (e.target.id === "easy") {
        difficultyText = easy[Math.floor(Math.random() * easy.length)];
      } else if (e.target.id === "medium") {
        difficultyText = medium[Math.floor(Math.random() * medium.length)];
      } else {
        difficultyText = hard[Math.floor(Math.random() * hard.length)];
      }

      textBox.innerText = difficultyText.text;
    });

    defaultSetting();
  })
  .catch((error) => console.error("Error:", error));

function timeStart() {
  setInterval(() => {
    duration--;

    timer.innerText = duration;
  }, 1000);
}

start.addEventListener("click", () => {
  timeStart();
  start.disabled = true;
});

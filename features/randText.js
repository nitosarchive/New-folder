const textBox = document.getElementById("text");

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

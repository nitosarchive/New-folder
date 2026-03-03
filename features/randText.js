const textBox = document.getElementById("text");

fetch("./typing-speed-test-main/data.json")
  .then((response) => response.json())
  .then((data) => {
    const easy = data.easy;
    const medium = data.medium;
    const hard = data.hard;

    let difficultyText = easy[Math.floor(Math.random() * easy.length)];

    textBox.innerText = difficultyText.text;
  })
  .catch((error) => console.error("Error:", error));

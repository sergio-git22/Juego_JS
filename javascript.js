const buttons = document.querySelectorAll(".choice");
const playerChoiceText = document.getElementById("playerChoice").querySelector("span");
const computerChoiceText = document.getElementById("computerChoice").querySelector("span");
const resultText = document.getElementById("gameResult").querySelector("span");

const options = ["piedra", "papel", "tijera"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "¡Empate!";
  } else if (
    (player === "piedra" && computer === "tijera") ||
    (player === "papel" && computer === "piedra") ||
    (player === "tijera" && computer === "papel")
  ) {
    return "¡Has ganado!";
  } else {
    return "¡Has perdido!";
  }
}

const optionIcons = {
    piedra: "💎",
    papel: "📄",
    tijera: "✂️",
  };

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    playerChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computerChoice;
    computerIcon.textContent = optionIcons[computerChoice];
    resultText.textContent = result;
  });
});
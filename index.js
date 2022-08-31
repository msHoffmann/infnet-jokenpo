const prompt = require('prompt-sync')();

const options = {
  "1": {
    name: "rock",
    icon: "🗿",
    code: 1,
  },
  "2": {
    name: "paper",
    icon: "📄",
    code: 2,
  },
  "3": {
    name: "scissors",
    icon: "✂️ ",
    code: 3,
  }
};

function start() {
  let optionYou = "";
  let scoreCpu = 0;
  let scoreYou = 0;
  let gameOver = false;

// start the game
  while (!gameOver) {
    while (!["1", "2", "3"].includes(optionYou)) {
      //Perguntar a opção
      optionYou = prompt("Choose wisely: (1)Rock, (2)Paper or (3)Scissors? ");
    }

// random cpu choice
    const optionCpu = (Math.floor(Math.random() * 3) + 1).toString();
    const user = options[optionYou];
    const cpu = options[optionCpu];

    console.log(`You: ${user.icon} vs CPU: ${cpu.icon}`)

 // validate victory
    if (optionCpu === optionYou) {
      console.log("It a tie");
    } else if ((optionYou === "1" && optionCpu === "2") || (optionYou === "2" && optionCpu === "3") || (optionYou === "3" && optionCpu === "1")) {
      console.log("CPU won");
      scoreCpu++;
    } else if ((optionYou === "2" && optionCpu === "1") || (optionYou === "1" && optionCpu === "3") || (optionYou === "3" && optionCpu === "2")) {
      //mostrar na tela
      console.log("User won");
      scoreYou++;
    }

    if (scoreCpu === 2 || scoreYou === 2) {
      gameOver = true;
    }
    optionYou = "";
    console.log(`You: ${scoreYou} vs CPU: ${scoreCpu}`)
  }

  if (scoreYou === 2) {
    console.log(`Congratulations, you won :)`);
  } else {
    console.log(`You lost :()`);
  }

}

start();
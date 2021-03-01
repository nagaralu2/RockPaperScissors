const choices = ['rock', 'paper', 'scissors'];
const results = ['its a tie', 'player wins', 'computer wins'];

//playGame Function
const playGame = () => {
  let tie = 0,
    playerWins = 0,
    computerWins = 0;

  // Number of Rounds and Input Validation
  let rounds = parseInt(prompt('Enter the number of Rounds to play:'));
  let regexNum = /^[1-9]\d*$/g;
  if (rounds <= 0) return console.log('Enter a positive number for Rounds');
  if (!regexNum.test(rounds)) return console.log('Enter only positive numbers for Rounds to play');

  for (let i = 1; i <= rounds; i++) {
    // Display Current Round
    console.log(`Round: ${i}`);

    // Display Score Before each Round (except First and Last Rounds)
    if (i > 1)
      console.log(`score: ${playerWins} player wins ${computerWins} computer wins ${tie} ties`);

    // Display Player and Computer Choices
    let playerChoice = player();
    let computerChoice = getRandomInt(3);
    console.log(
      `Player Selected: ${choices[playerChoice]} and Computer Selected: ${choices[computerChoice]}`
    );

    // Result Calcs
    let result = roundResult(playerChoice, computerChoice);
    console.log(`result: ${results[result]}`);
    if (result == 0) tie++;
    if (result == 1) playerWins++;
    if (result == 2) computerWins++;

    //Display Final Score
    if (i == rounds)
      console.log(
        `final score: ${playerWins} player wins ${computerWins} computer wins ${tie} ties`
      );
  }
};

// Player Choice Function and Input Validation
const player = () => {
  let choice = prompt(
    'Make your Selection: Rock, Paper or Scissors (all other input defaults to "Rock"):'
  );
  if (choice === null) console.log('No Selection! Game stopped');
  let regexChoice = /\b(rock|paper|scissors)\b/;
  //Player Choice: 0 for Rock, 1 for Paper, 2 for Scissors
  //Bad choice: Default to Rock
  if (!regexChoice.test(choice.toLowerCase())) return 0;
  if (choice.toLowerCase() === 'rock') return 0;
  if (choice.toLowerCase() === 'paper') return 1;
  if (choice.toLowerCase() === 'scissors') return 2;
};

// Computer Choice using Math.random()
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Result Function
const roundResult = (player_choice, computer_choice) => {
  //Results: 0 for tie, 1 for player wins, 2 for computer wins
  if (computer_choice == player_choice) return 0;
  else if (computer_choice == player_choice + 1) return 2;
  else if (computer_choice == 0 && player_choice == 2) return 2;
  else return 1;
};

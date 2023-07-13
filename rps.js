/*let computerscore=0;
let playerscore=0;

function game(){
const rockImg= document.querySelector('.rock')
const paperImg= document.querySelector('.paper')
const scissorsImg= document.querySelector('.scissors')
const spockImg= document.querySelector('spock')
const playerchoices=[rockImg,paperImg,scissorsImg,spockImg];
const computerchoices=['rock','paper','scissors','spock']

playerchoices.forEach //performs for each element in the array
}*/

const playerText = document.querySelector("#playerText"); //SELECTS ELEMENT WITH CORRECT ID #
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn"); //SELECTS ELEMNT WITH CORRECT CLASS.
let player;
let computer;
let result; //VAR

choiceBtns.forEach(
  (
    button // each button  => makes left part input of function and right part output
  ) =>
    button.addEventListener("click", () => {
      // allows you to set up a function so it can be called when a specific event happens
      player = button.textContent;
      computerTurn();
      playerText.textContent = `Player: ${player}`; //place holder insert a variable to a string?
      computerText.textContent = `Computer: ${computer}`;
      resultText.textContent = checkWinner(); //text content is used to set text content (return)
    })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 4); //random number generator
  console.log(randNum);
  switch (
    randNum //executes code depending on different cases
  ) {
    case 0:
      computer = "ROCK"; //if randum num is 1 then case one will be executed meaning rock is thrown
      break; //breaks out of switch
    case 1:
      computer = "PAPER";
      break;
    case 2:
      computer = "SCISSORS";
      break;
  }
}
function checkWinner() {
  //console.log(player);
  //console.log(computer);
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    // if correct you win or you lose
    return player == "PAPER" ? "You Win!" : "You Lose!"; // ? ternary operator. EXECUTES condition followed if true shown by : or if not will show false
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (computer == "SCISSORS") {
    //console.log(player == "ROCK" ? "You Win!" : "You Lose!");
    return player == "ROCK" ? "You Win!" : "You Lose!";
  }
}

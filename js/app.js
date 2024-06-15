/*-------------------------------- Constants --------------------------------*/
let guessDisplay = [];

let board = [
  "","","","","","",
  "","","","","","",
  "","","","","","",
  "","","","","","",
  "","","","","","",
];
// the user needs to get the correct guesses on the board in a line for a win.



const testWordBank = [
  "About","Alert","Beach","Brief","Chart",
  "Curve","Bring","Chase","Cycle","Broad",
  "Cheap","Daily","Broke","Check","Dance",
];

/*-------------------------------- Functions --------------------------------*/
//Upon loading, the game state should be initialized, and a function should be called to render this game state.

function clickHandle(event) {
  let target = event.target;
  // tagName returns all caps, so we search for allCaps.
  if (target.tagName === "BUTTON") {
    board[currentIndex] = target.textContent;
    let square = document.getElementById(currentIndex);
    // since the id's of each box is just their index, we can use that to get the square.
    square.innerHTML = target.textContent;
    letterList.push(target.textContent);

    checkRow();
    joinLetter();
    checkGuess();
    correctGuess();
    if (victory) {
      winnerWinner();
      return;
    } else if (!victory && currentIndex === 29) {
      loserLoser();
      return;
    }
    currentIndex++;
  } else {
    alert("Click inside the button");
  }

  //
}

function checkRow(rowNumber) {
  // each row is made of divs i need to target
  const rowDivs = document.querySelectorAll(`#row${rowNumber} div`);
  for (let div of rowDivs) {
    if (div.textContent === "") {
      console.log("Test failed");
      return false;
    }
  }
  return true;
}

function joinLetter() {
  if (currentGuess.length < 5) {
    console.log(`${currentGuess.length + 1} letters`);
  }
  currentGuess = letterList.join("");
  if (currentGuess.length === 5) {
    currentGuessRebuilt =
      currentGuess.slice(0, 1).toUpperCase() +
      currentGuess.slice(1).toLowerCase();
    console.log(`${currentGuessRebuilt} is our guess!`);
  }
}

function checkGuess() {
  let matchingLetters = 0;
  for (let i = 1; i < 5; i++) {
    if (currentGuessRebuilt[i] === cLetters[i]){
      document.querySelector(`#row${i}``#${currentIndex}`).style.backgroundColor = 'green'
    }
  console.log(`There are ${matchingLetters} matching letters!`);
}}

function correctGuess() {
  if (currentGuessRebuilt === randomWord) {
    console.log("Match found");
    victory = true;
  } else if (currentGuessRebuilt.length === 5) {
    console.log("This is not a match, try again");
    letterList = [];
    currentGuess = "";
    currentGuessRebuilt = "";
  }
}

function winnerWinner() {
  if (victory) {
    console.log(`You won in ${currentIndex + 1} turns`);
    return;
  }
}
function loserLoser() {
  console.log(`You lost! The word was ${randomWord}`);
  return;
}

// function matchingLetters() {
//     cLetters.forEach(letter => {
//         if letter[index]
//     });
// }

/*---------------------------- Variables (state) ----------------------------*/
let victory = false;
let defeat = false;
//  pushed into every click. check if this array content matches the randomWord
let letterList = [];
let currentGuess = "";
let currentGuessRebuilt = "";

let currentIndex = 0;
squareIds = [];
for (let i = 0; i < 29; i++) {
  squareIds.push(document.getElementById(i));
}

const randomWord =
  testWordBank[Math.floor(Math.random() * testWordBank.length)];
// i googled 'how to randomize the selection from an array' NaN was due to the random number being put against literally Not a Number. i relearned .length functions as a counter for array items.

let cLetters = randomWord.split(""); // list of 5
console.log(`the correct letters are ${cLetters}`);

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll("button");
const squares = document.querySelectorAll(".square");
const rowDisplay = document.querySelectorAll(".row");
const keyboard = document.getElementById("keyboard");

columns = []
for (let i = 0; i < 6; i++){
  columns.push(document.getElementsByClassName(`column-${i + 1}`))
}
rows = []
  for (let i = 0; i < 7; i++) {
    rows.push(document.querySelector(`row${i + 1}`))
    
  }

/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach(button => {
//     button.addEventListener('click',clickHandle)
// });
keyboard.addEventListener("click", clickHandle);

// event delegation ??
/*----------------------------- Code -----------------------------*/

/*----------------------------- Code Graveyard -----------------------------*/

// rowIds = [];
// for (let i = 0; i < 29; i++) {
//     rowIds.push(document.getElementById(i));
// }  Im not sure i will need this code anymore but it may be useful

// let targetSquare = squareIds[currentIndex];
// i had a good idea with this but im not at that stage yet

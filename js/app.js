/*-------------------------------- Constants --------------------------------*/
let guessDisplay = [];

let board = [
  "","","","","",
  "","","","","",
  "","","","","",
  "","","","","",
  "","","","","",
  "","","","","",
];




let testWordBank = [
  "About","Alert","Beach","Brief","Chart",
  "Curve","Bring","Chase","Cycle","Broad",
  "Cheap","Daily","Broke","Check","Dance",
];
testWordBank = testWordBank.map((word) =>{
  return word.toUpperCase()
})
/*---------------------------- Variables (state) ----------------------------*/
let victory = false;
let defeat = false;

let letterList = [];
let currentGuess = [];
let corretGuesses = [];


let currentIndex = 0;
squareIds = [];
for (let i = 0; i < 29; i++) {
  squareIds.push(document.getElementById(i));
}

const randomWord =
  testWordBank[Math.floor(Math.random() * testWordBank.length)];

let cLetters = randomWord.split(""); 



/*-------------------------------- Functions --------------------------------*/


function clickHandle(event) {
  let target = event.target;

  if (target.tagName === "BUTTON") {
    board[currentIndex] = target.textContent;
    let square = document.getElementById(currentIndex);

    square.innerHTML = target.textContent;
    letterList.push(target.textContent);

    currentGuess = letterList.join('')

    let rowIndex = Math.floor(currentIndex / 5);
    let colIndex = currentIndex % 6;

    joinLetter();
    checkGuess( rowIndex,colIndex);
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
    console.log("Click inside the button");
  }

  //
}

// 

function joinLetter() {
  if (currentGuess.length < 5) {
    console.log(`${currentGuess.length + 1} letters`) //todo make this appear as a dom element
  }
  if (currentGuess.length === 5) {
    console.log(`${currentGuess} is our guess!`); //todo make this appear as a dom element
  }
}

function checkGuess(rowIndex,colIndex) {
  let matchingLetters = 0;

  for (let i = 0; i < 5; i++) {
    let rowIndex = Math.floor(currentIndex / 5);
    if (board[`${rowIndex}` * 5 + i] === cLetters[i]){
      matchingLetters++
      document.getElementById(rowIndex * 5 + i).classList.add('green');  // this line needs to change
    } 

    else if (cLetters.includes(board[`${rowIndex}` * 5 + i])){
      document.getElementById(rowIndex * 5 + i).classList.add('yellow')
    } 

    else  if (cLetters.includes(board[`${rowIndex}`]) == -1){
      document.getElementById(rowIndex * 5 + i).classList.add('grey')
    }
}

  console.log(`There are ${matchingLetters} matching letters!`);
}

function correctGuess() {
  if (currentGuess === randomWord) {
    document.querySelector('p.alt').textContent = "Match found!";
    victory = true;
  } else if (currentGuess.length === 5) {
    document.querySelector('p.alt').textContent = "This is not a match, try again";
    currentGuess = "";
  }
}

function winnerWinner() {
  if (victory) {
    document.querySelector('p').textContent = 'You won!';
    return;
  }
}
function loserLoser() {
  defeat = true
  document.querySelector('p').textContent = 'Oops... try again?';
  return;
}



/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll("button");
const squares = document.querySelectorAll(".square");
const rowDisplay = document.querySelectorAll(".row");
const keyboard = document.getElementById("keyboard");


/*----------------------------- Event Listeners -----------------------------*/

keyboard.addEventListener("click", clickHandle);


/*----------------------------- Code -----------------------------*/

/*----------------------------- Code Graveyard -----------------------------*/

// rowIds = [];
// for (let i = 0; i < 29; i++) {
//     rowIds.push(document.getElementById(i));
// }  Im not sure i will need this code anymore but it may be useful

// let targetSquare = squareIds[currentIndex];
// i had a good idea with this but im not at that stage yet

// function matchingLetters() {
//     cLetters.forEach(letter => {
//         if letter[index]
//     });
// }

// buttons.forEach(button => {
//     button.addEventListener('click',clickHandle)
// });
    // checkRow();
// function checkRow(rowNumber) {

  //   const rowDivs = document.querySelectorAll(`#row${rowNumber} div`);
  //   for (let div of rowDivs) {
  //     if (div.textContent === "") {
  //       console.log("Test failed");
  //       return false;
  //     }
  //   }
  //   return true;
  // }
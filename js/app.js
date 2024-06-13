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
// the user needs to get the correct guesses on the board in a line for a win.

const winCondition = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 17, 19],
    [20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29],
];

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
    console.log(`We have clicked ${event.target.textContent}`);
    board[currentIndex] = target.textContent;
    let square = document.getElementById(currentIndex);
    // since the id's of each box is just their index, we can use that to get the square.
    square.innerHTML = target.textContent;
    letterList.push(target.textContent)
    
    checkRow()
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
        if (div.textContent === '') {
            console.log('Test complete');
            return false
        }
        //todo code for the correctGuess
    } return true
}

/*---------------------------- Variables (state) ----------------------------*/
let victory = false;
let defeat = false;
//  pushed into every click. check if this array content matches the randomWord
let letterList = []
let currentGuess = "";
let currentIndex = 0;
squareIds = [];
for (let i = 0; i < 29; i++) {
    squareIds.push(document.getElementById(i));
} 



const randomWord = testWordBank[Math.floor(Math.random()*testWordBank.length)]
// i googled 'how to randomize the selection from an array' NaN was due to the random number being put against literally Not a Number. i relearned .length functions as a counter for array items. 
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll("button");
const Squares = document.querySelectorAll(".square");
const rowDisplay = document.querySelectorAll(".row");
const keyboard = document.getElementById("keyboard");
const rows = document.getElementsByClassName("row");
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
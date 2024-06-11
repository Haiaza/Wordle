

/*-------------------------------- Constants --------------------------------*/
let guessDisplay = []

let board =    ['','','','','',
                '','','','','',
                '','','','','',
                '','','','','',
                '','','','','',
                '','','','','',];
// the user needs to get the correct guesses on the board in a line for a win.


const winCondition = [[0,1,2,3,4],
                    [5,6,7,8,9],
                    [10,11,12,13,14],
                    [15,16,17,17,19],
                    [20,21,22,23,24],
                    [25,26,27,28,29]]

const testWordBank = ["About",'Alert','Beach'
                ,"Brief"	,"Chart" ,'Curve'
                ,"Bring" ,"Chase" ,'Cycle'
                ,"Broad" ,"Cheap" ,'Daily'
                ,"Broke" ,"Check" ,'Dance']

/*-------------------------------- Functions --------------------------------*/
//Upon loading, the game state should be initialized, and a function should be called to render this game state.

function clickHandle(Event) {
    console.log(`We have clicked ${Event.target.textContent}`)
    let target = event.target.textContent
    
    // target.textContent
}
// i want to assign the board[idx] to the guessvalue
// how is the question


/*---------------------------- Variables (state) ----------------------------*/
let victory = false;
let defeat = false;

let currentGuess = ''


/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('button')
const guessSquares = document.querySelectorAll('.square')
const rowDisplay = document.querySelectorAll('.row')
const keyboard = document.getElementById('keyboard')
const updateSquare = document.getElementById(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29)
/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach(button => {
//     button.addEventListener('click',clickHandle)
// });
keyboard.addEventListener('click', clickHandle)





// event delegation ??
/*----------------------------- Code -----------------------------*/


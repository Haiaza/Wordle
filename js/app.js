

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

function clickHandle(event) {
    let target = event.target
    // tagName returns all caps, so we search for allCaps.
    if (target.tagName === 'BUTTON') {
        console.log(`We have clicked ${event.target.textContent}`) // still doesnt work atm
        board[currentIndex] = target.textContent

        
    } else {
        alert('Click inside the button')
    }

    currentIndex++
    
    
    // 
}

function checkRow(){
    if (condition) {
        
    }
}


/*---------------------------- Variables (state) ----------------------------*/
let victory = false;
let defeat = false;

let currentGuess = ''
let currentIndex = 0
squareIds = []
for (let i = 0; i < 29; i++) {
    squareIds.push(document.getElementById(i));

}
rowIds = []
for (let i = 0; i < 29; i++) {
    rowIds.push(document.getElementById(i));

}
let targetSquare = squareIds[currentIndex]

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('button')
const guessSquares = document.querySelectorAll('.square')
const rowDisplay = document.querySelectorAll('.row')
const keyboard = document.getElementById('keyboard')
const rows = document.getElementsByClassName('row')
/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach(button => {
//     button.addEventListener('click',clickHandle)
// });
keyboard.addEventListener('click', clickHandle)





// event delegation ??
/*----------------------------- Code -----------------------------*/


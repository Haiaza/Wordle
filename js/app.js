

/*-------------------------------- Constants --------------------------------*/
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



/*-------------------------------- Functions --------------------------------*/
//Upon loading, the game state should be initialized, and a function should be called to render this game state.

function clickHandle(Event) {
    console.log(`We have clicked ${Event.target.textContent}`)
    // target.textContent
}
// issue with the click handler


/*---------------------------- Variables (state) ----------------------------*/
let victory = false;



/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('button')
const guessSquares = document.querySelectorAll('.square')
const display = document.getElementById('display')
const keyboard = document.getElementById('keyboard')
/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach(button => {
//     button.addEventListener('click',clickHandle)
// });
keyboard.addEventListener('click', (event) =>{
    console.log(event.target.textContent)
})


// event delegation ??
/*----------------------------- Code -----------------------------*/

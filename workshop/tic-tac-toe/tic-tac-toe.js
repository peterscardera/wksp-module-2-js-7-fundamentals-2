
//game patterns
const game = [
    0,1,2,
    3,4,5,
    6,7,8,
];

function verifyWin() {
    if (game[0] === game[1] && game[1] === game[2]) {
       console.log(currentPlayer)
    }
    if (game[3] === game[4] && game[4] === game[5]) {
        console.log(currentPlayer)
    }
    if (game[6] === game[7] && game[7] === game[8])
    console.log(currentPlayer)
}

const WIN = [
    "X","X","X",
    null,null,null,
    null,null,null
]


const board = document.getElementById("board");
const player1 = document.getElementById("player-1")
const player2 = document.getElementById("player-2")

const PLAYER_1_ICON = "X";
const PLAYER_2_ICON = "O"


let currentPlayer = "1";
player1.classList.add("active");


function togglePlayer() {
    currentPlayer = (currentPlayer === "1") ? "2" : "1";   
    player1.classList.toggle("active");
    player2.classList.toggle("active");
}

function handleClick() {
    
    const cell = event.target.id;
    const currentCellDiv = document.getElementById(cell);
    let cellId = cell.charAt(cell.length - 1)
    if(typeof game[cellId] === "number") {
        currentCellDiv.innerHTML ===  (currentPlayer === "1") ? PLAYER_1_ICON : PLAYER_2_ICON
        
    } 
        
    
    document.getElementById(cell).innerHTML = (currentPlayer === "1") ? PLAYER_1_ICON : PLAYER_2_ICON
    //add value to game array
    
    game[cellId] = (currentPlayer === "1") ? PLAYER_1_ICON : PLAYER_2_ICON
    verifyWin()
    togglePlayer();
    }
    




board.addEventListener("click",handleClick);
//1. make the board
    //the board div container and inside there is 9 div
    //player 1 / player 2 and indicate whose turn it is
//2. clicking the cells turn into an X or an O
    //clicking adds value (x or O) to the cell
    // **once there is value it cannot be changed
//3  to be able to clear the board (optional)
//4 2 players
    //flag for current player
    // each player is assigned either X or O
//5 create an array of current cell values which should refrsh on each change 
//6 create arrays with multiple win scenarios




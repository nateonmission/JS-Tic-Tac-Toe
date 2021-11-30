
// Initialize Game Variables
let playOn = true;
let gameHistory = [];
let gameCounter = 0;
let turnCounter = 1;


// Grab DOM Componants
const gb = document.querySelector("#game-board");
const sq0 = document.querySelector("#sq0");
const sq1 = document.querySelector("#sq1");
const sq2 = document.querySelector("#sq2");
const sq3 = document.querySelector("#sq3");
const sq4 = document.querySelector("#sq4");
const sq5 = document.querySelector("#sq5");
const sq6 = document.querySelector("#sq6");
const sq7 = document.querySelector("#sq7");
const sq8 = document.querySelector("#sq8");
const statusArea = document.querySelector("#status")

// Initialize Arrays of DOM Componants
let squares = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8];
let availableMoves = [true, true, true, true, true, true, true, true, true];
let moveHistory = ['', '', '', '', '', '', '', '', ''];


// Define Player Class
class Player {
    constructor (sigel, name) {
        this.sigel = sigel;
        this.name = name;
        this.isComputer = name.toLowerCase() === 'computer' ? true: false;
        this.wins = 0;
        this.color = sigel === 'X' ? 'blue' : 'red'
    }

    makeMove(location){
        let sqr = squares[location]
        if(sqr.innerText === ''){
            sqr.setAttribute("class",`${this.color}`);
            sqr.innerHTML = `${this.sigel}`;
            availableMoves[location] = false;
            moveHistory[location] = this.sigel;
            console.log(`${player.sigel} : ${turnCounter}`);
            turnCounter++;
        } else {
            throw "already clicked"
        }
    }
}


// Define Game Functions
const clearBoard = () => {
    sq1.innerText = '';
    sq2.innerText = '';
    sq3.innerText = '';
    sq4.innerText = '';
    sq5.innerText = '';
    sq6.innerText = '';
    sq7.innerText = '';
    sq8.innerText = '';
    sq0.innerText = '';
    availableMoves = [true, true, true, true, true, true, true, true, true];
    moveHistory = ['', '', '', '', '', '', '', '', ''];
} 


const gameEnd = (player) => {
    if (player === "Draw") {
        let playAgain = prompt(`
        Nobody WINS! It's a DRAW!
        Do y'all want to play again! (y/n)
        `).toLowerCase()

        if (playAgain === 'y' || playAgain === 'yes') {
            clearBoard();
        } else {
            playOn = false;
        }
    } else {
        gameCounter++;
        player.wins++;

        let playAgain = prompt(`
        ${player.name} WINS!
        Do y'all want to play again! (y/n)
        `).toLowerCase()

        if (playAgain === 'y' || playAgain === 'yes') {
            clearBoard();
        } else {
            playOn = false;
        }
    }
    p1Div.innerHTML = `${player1.sigel}s = ${player1.name} <br> ${player1.wins} games won`
    p2Div.innerHTML = `${player2.sigel}s = ${player2.name} <br> ${player2.wins} games won`
}


const buildScoreBoard = (player) => {
    let playerDiv = document.createElement('div')
    playerDiv.setAttribute("id",player.sigel);
    playerDiv.setAttribute("class", "player-div");
    statusArea.append(playerDiv);
    playerDiv.innerHTML = `${player.sigel}s = ${player.name} <br> ${player.wins} games won`
}



// Instatiate Players and Build the Scoreboard
let p1Name = prompt("Player 1 with be Xs. What is your name? ");
let p2Name = prompt("Player 2 with be Os. What is your name? [type COMPUTER for an automated opponent] ");

const player1 = new Player('X', p1Name);
buildScoreBoard(player1);

const player2 = new Player('O', p2Name);
buildScoreBoard(player2);


const p1Div = document.querySelector("#X");
const p2Div = document.querySelector("#O");
p1Div.setAttribute("class","activeBlue")

let player = player1;

// Define Logic that needs Player Information
const checkForWinner = (moveHistory) => {
    switch (true) {
        case (
            moveHistory[0] === moveHistory[1] &&
            moveHistory[1] === moveHistory[2] &&
            moveHistory [0] !== ''
        ):
            return (moveHistory [0] === 'X' ? 1 : -1);
        case (
            moveHistory[3] === moveHistory[4] &&
            moveHistory[4] === moveHistory[5] &&
            moveHistory [3] !== '' 
        ):
            return (moveHistory [3] === 'X' ? 1 : -1);
        case (
            moveHistory[6] === moveHistory[7] &&
            moveHistory[7] === moveHistory[8] &&
            moveHistory [6] !== ''
        ):
            return (moveHistory [6] === 'X' ? 1 : -1);
        case (
            moveHistory[0] === moveHistory[3] &&
            moveHistory[3] === moveHistory[6] &&
            moveHistory [0] !== ''
        ):
            return (moveHistory [0] === 'X' ? 1 : -1);
        case (
            moveHistory[1] === moveHistory[4] &&
            moveHistory[4] === moveHistory[7] &&
            moveHistory [1] !== ''
        ):
            return (moveHistory [1] === 'X' ? 1 : -1);
        case (
            moveHistory[2] === moveHistory[5] &&
            moveHistory[5] === moveHistory[8]  &&
            moveHistory [2] !== ''
        ):
            return (moveHistory [2] === 'X' ? 1 : -1);
        case (
            moveHistory[2] === moveHistory[4] &&
            moveHistory[4] === moveHistory[6] &&
            moveHistory [2] !== ''
        ):
            return (moveHistory [2] === 'X' ? 1 : -1);
        case (
            moveHistory[0] === moveHistory[4] &&
            moveHistory[4] === moveHistory[8] &&
            moveHistory [0] !== ''
        ):
            return (moveHistory [0] === 'X' ? 1 : -1);
        case (!moveHistory.some( element => (element === ''))):
            return 0;
            
        default:
            return null;
    }
}


const takeTurns = () => {
    player = turnCounter%2 === 0 ? player2 : player1;
    if (turnCounter%2 === 0) {
        p1Div.setAttribute("class", "player-div");
        p2Div.setAttribute("class", "activeRed");
    } else {
        p1Div.setAttribute("class", "activeBlue");
        p2Div.setAttribute("class", "player-div");
    }
}


// Computer Player Logic
const minMax = (historyCopy, availableMovesCopy, depth, isMax) => {
    let isWinner = checkForWinner(historyCopy);
    console.log(`history ${historyCopy}`)

    let opponent = player.sigel === 'O' ? player1 : player2;
    
    if (isWinner !== null) {
        console.log(`isWinnder ${isWinner}`)
        return isWinner;
    }

    if (isMax) {
        let bestMoveScore = -Infinity;
        for (let i = 0; i < moveHistory.length; i++) {
            if (availableMovesCopy[i]) {
                historyCopy[i] = player.sigel;
                availableMovesCopy[i] = false;
                let moveScore = minMax(historyCopy, (depth + 1), false);
                historyCopy[i] = '';
                availableMovesCopy[i] = true;
                if (moveScore > bestMoveScore) {
                    bestMoveScore = moveScore;
                    move = i;
                }
            }
        }
        console.log(bestMoveScore)
        return bestMoveScore;
    } else {
        let bestMoveScore = Infinity;
        for (let i = 0; i < moveHistory.length; i++) {
            if (availableMovesCopy[i]) {
                historyCopy[i] = opponent.sigel;
                availableMovesCopy[i] = false;
                let moveScore = minMax(historyCopy, (depth + 1), true);
                historyCopy[i] = '';
                availableMovesCopy[i] = true;
                if (moveScore < bestMoveScore) {
                    bestMoveScore = moveScore;
                    move = i;
                }
            }
        }
        console.log(bestMoveScore)
        return bestMoveScore;
    }
}

const aiPlayer = (availableMoves, moveHistory, player) => {
    console.log('aiPlayer called')
    // if (availableMoves.reduce( (acc, b) => acc + b) >= 8) {  // adjust random vs minimax
    //     let move = false;
    //     let index;
    //     while(!move) {
    //         index = Math.floor(Math.random()*availableMoves.length);
    //         move = availableMoves[index];
    //     }
    //     player.makeMove(index);


    //} else {

        let bestMoveScore = -Infinity;
        let move;
        let historyCopy = moveHistory;
        let availableMovesCopy = availableMoves;
    
        for (let i = 0; i < moveHistory.length; i++) {
            if (availableMoves[i]) {
                historyCopy[i] = player.sigel;
                availableMovesCopy[i] = false;
                let moveScore = minMax(historyCopy, availableMovesCopy, 0, false);
                historyCopy[i] = '';
                availableMovesCopy[i] = true;
                if (moveScore > bestMoveScore) {
                    bestMoveScore = moveScore;
                    move = i;
                }
            }
        }
        player.makeMove(move)
    }
//}


// Check State to see if there's a winner
const checkGameState = () => {
    let gameEnded = checkForWinner(moveHistory);

    if (gameEnded === null){
        takeTurns();
    } else if (gameEnded === 0) {
            console.log("DRAW");
            gameEnd('Draw');
            takeTurns();
    } else if (gameEnded === 1 || gameEnded === -1) {
        console.log(`${player.sigel} WINS!!!!`)
        gameEnd(player);
        takeTurns();
    }
}


// Event Listeners for Squares
sq0.addEventListener("click", () => {
    if (playOn) {
        player.makeMove(0);
    }
})

sq1.addEventListener("click", () => {
    if (playOn) {
        player.makeMove(1);
    }
})

sq2.addEventListener("click", () => {
    if (playOn) {
        player.makeMove(2);
    }
})

sq3.addEventListener("click", () => {
    if (playOn) {
        player.makeMove(3);
    }
})

sq4.addEventListener("click", () => {
    if (playOn) {
        player.makeMove(4);
    }
})

sq5.addEventListener("click", () => {
    if (playOn) {
        player.makeMove(5);
    }
})

sq6.addEventListener("click", () => {
    if (playOn) {
        player.makeMove(6);
    }
})

sq7.addEventListener("click", () => {
    if (playOn) {
        player.makeMove(7);
    }
})

sq8.addEventListener("click", () => {
    if (playOn) {
        player.makeMove(8);
    }
})

// Gameboard Listener for Managing Game Logic
gb.addEventListener("click", () => {
    if(playOn){
        
        checkGameState()

        if (player.isComputer === true && playOn) {
            aiPlayer(availableMoves, moveHistory, player);
            checkGameState();
        }
    }
}, false)



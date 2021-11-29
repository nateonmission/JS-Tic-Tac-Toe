
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
            console.log(`${player.sigel} : ${turnCounter}`)
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
let p2Name = prompt("Player 2 with be Os. What is your name? ");

const player1 = new Player('X', p1Name);
buildScoreBoard(player1)

const player2 = new Player('O', p2Name);
buildScoreBoard(player2)


const p1Div = document.querySelector("#X");
const p2Div = document.querySelector("#O");
p1Div.setAttribute("class","activeBlue")

let player = player1;

// Define Logic that needs Player Information
const checkForWinner = (player) => {
    let sigel = player.sigel;
    //console.log(`avaiable: ${availableMoves}`)
    switch (true) {
        case (
            sq0.innerText === sq1.innerText &&
            sq1.innerText === sq2.innerText &&
            sq2.innerText === sigel
        ):
            return 1;
        case (
            sq3.innerText === sq4.innerText &&
            sq4.innerText === sq5.innerText &&
            sq5.innerText === sigel
        ):
            return 1;
        case (
            sq6.innerText === sq7.innerText &&
            sq7.innerText === sq8.innerText &&
            sq8.innerText === sigel
        ):
            return 1;
        case (
            sq0.innerText === sq3.innerText &&
            sq3.innerText === sq6.innerText &&
            sq6.innerText === sigel
        ):
            return 1;
        case (
            sq1.innerText === sq4.innerText &&
            sq4.innerText === sq7.innerText &&
            sq7.innerText === sigel
        ):
            return 1;
        case (
            sq2.innerText === sq5.innerText &&
            sq5.innerText === sq8.innerText &&
            sq8.innerText === sigel
        ):
            return 1;
        case (
            sq2.innerText === sq4.innerText &&
            sq4.innerText === sq6.innerText &&
            sq6.innerText === sigel
        ):
            return 1;
        case (
            sq0.innerText === sq4.innerText &&
            sq4.innerText === sq8.innerText &&
            sq8.innerText === sigel
        ):
            return 1;
        case (sq0.innerHTM !== '' && sq1.innerText !== '' && sq2.innerText !== '' && 
            sq3.innerText !== '' && sq4.innerText !== '' && sq5.innerText !== '' && 
            sq6.innerText !== '' && sq7.innerText !== '' && sq8.innerText !== ''):
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
const minMax = (player, copyAvailableMoves, depth, isMax) => {
    
    return 1;
}

const aiPlayer = (squares, availableMoves, player) => {
    let otherPlayer = player === player1 ? player2 : player1;
    let copyAvailableMoves = availableMoves;
    let move;

    if (availableMoves.every(true)) {
        move = Math.floor(Math.random() * availableMoves.length);
        squares[move].click();
    } else {
        move = miniMax(copyAvailableMoves, player, otherPlayer);
        squares[move].click();
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
        
        let gameEnded = checkForWinner(player);

        if (gameEnded === null){
            takeTurns();
        } else if (gameEnded === 0) {
                console.log("DRAW");
                gameEnd('Draw');
                takeTurns();
        } else if (gameEnded === 1) {
            console.log(`${player.sigel} WINS!!!!`)
            gameEnd(player);
            takeTurns();
        }

        if (player.isComputer === true) {
            aiPlayer(squares, availableMoves, player);
        }

        // let i = 0;
        // squares.forEach( sq => {
        //     if (sq.innerText === '') {
        //         console.log(`${i}`);
                
        //     }
        //     i++
        // })
    }
}, false)



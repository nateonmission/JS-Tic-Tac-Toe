let playOn = true;
let gameHistory = [];
let gameCounter = 0;
let turnCounter = 1;
let availableMoves = [true, true, true, true, true, true, true, true, true];


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
let squares = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8];


class Player {
    constructor (sigel, name) {
        this.sigel = sigel;
        this.name = name;
        this.wins = 0;
        this.color = sigel === 'X' ? 'blue' : 'red'
    }

    getSigel() {
        return this.sigel
    }
}


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
    p1Div.innerText = `${player1.sigel}s played by ${player1.name} >> ${player1.wins} games won`
    p2Div.innerText = `${player2.sigel}s played by ${player2.name} >> ${player2.wins} games won`
}


const buildScoreBoard = (player) => {
    let playerDiv = document.createElement('div')
    playerDiv.setAttribute("id",player.sigel);
    playerDiv.setAttribute("class", "player-div");
    statusArea.append(playerDiv);
    playerDiv.innerText = `${player.sigel}s >> ${player.name} >> ${player.wins} games won`
}


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

const checkForWinner = (player) => {
    let sigel = player.sigel;
    console.log(availableMoves)
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

const gameClick = (sqr, spot) => {
    if(sqr.innerText === ''){
        let sigel = player.getSigel()
        sqr.setAttribute("class",`${player.color}`);
        sqr.innerHTML = `${sigel}`;
        availableMoves[spot] = false;
    } else {
        throw "already clicked"
    }
}

const takeTurns = () => {
    console.log(`${player.sigel} : ${turnCounter}`)
    turnCounter++;
    player = turnCounter%2 === 0 ? player2 : player1;
    if (turnCounter%2 === 0) {
        p1Div.setAttribute("class", "player-div");
        p2Div.setAttribute("class", "activeRed");
    } else {
        p1Div.setAttribute("class", "activeBlue");
        p2Div.setAttribute("class", "player-div");
    }
}




const aiPlayer = (squares, availableMoves, player) => {
    let otherPlayer = player === player1 ? player2 : player1;

    for (let i = 0; i < squares.length; i++){
        if (availableMoves[i]) {

            squares[i].click();

        }
    }
}




sq0.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq0, 0)
    }
})

sq1.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq1, 1)
    }
})

sq2.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq2, 2)
    }
})

sq3.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq3, 3)
    }
})

sq4.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq4, 4)
    }
})

sq5.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq5, 5)
    }
})

sq6.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq6, 6)
    }
})

sq7.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq7, 7)
    }
})

sq8.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq8, 8)
    }
})

gb.addEventListener("click", () => {
    if(playOn){
        console.log('gb')
        let gameEnded = checkForWinner(player, turnCounter);

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

        if (player.name === "Computer") {
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



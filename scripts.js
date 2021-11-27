let playOn = true;
let gameHistory = []
let gameCounter = 0;
let turnCounter = 1;

const sq1 = document.querySelector("#sq1");
const sq2 = document.querySelector("#sq2");
const sq3 = document.querySelector("#sq3");
const sq4 = document.querySelector("#sq4");
const sq5 = document.querySelector("#sq5");
const sq6 = document.querySelector("#sq6");
const sq7 = document.querySelector("#sq7");
const sq8 = document.querySelector("#sq8");
const sq9 = document.querySelector("#sq9");
const statusArea = document.querySelector("#status")


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
    sq9.innerText = '';
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
    
    switch (true) {
        case (
            sq1.innerText === sq2.innerText &&
            sq2.innerText === sq3.innerText &&
            sq3.innerText === sigel
        ):
            console.log(`${sigel} WINS!`);
            takeTurns();
            gameEnd(player);
            break;
        case (
            sq4.innerText === sq5.innerText &&
            sq5.innerText === sq6.innerText &&
            sq4.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            takeTurns();
            gameEnd(player);
            break;
        case (
            sq7.innerText === sq8.innerText &&
            sq8.innerText === sq9.innerText &&
            sq9.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            takeTurns();
            gameEnd(player);
            break;
        case (
            sq1.innerText === sq4.innerText &&
            sq4.innerText === sq7.innerText &&
            sq7.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            takeTurns();
            gameEnd(player);
            break;
        case (
            sq2.innerText === sq5.innerText &&
            sq5.innerText === sq8.innerText &&
            sq8.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            takeTurns();
            gameEnd(player);
            break;
        case (
            sq3.innerText === sq6.innerText &&
            sq6.innerText === sq9.innerText &&
            sq9.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            takeTurns();
            gameEnd(player);
            break;
        case (
            sq3.innerText === sq5.innerText &&
            sq5.innerText === sq7.innerText &&
            sq7.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            takeTurns();
            gameEnd(player);
            break;
        case (
            sq1.innerText === sq5.innerText &&
            sq5.innerText === sq9.innerText &&
            sq9.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            takeTurns();
            gameEnd(player);
            break;
        case (sq1.innerText !== '' && sq2.innerText !== '' && sq3.innerText !== '' && 
            sq4.innerText !== '' && sq5.innerText !== '' && sq6.innerText !== '' && 
            sq7.innerText !== '' && sq8.innerText !== '' && sq9.innerText !== ''):
            console.log("DRAW");
            takeTurns();
            gameEnd('Draw');
            break;
        default:
            takeTurns();
            break;
    }
}

const gameClick = (sqr) => {
    if(sqr.innerText === ''){
        let sigel = player.getSigel()
        sqr.setAttribute("class",`${player.color}`);
        sqr.innerHTML = `${sigel}`;
    } else {
        throw "already clciked"
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

sq1.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq1)
        checkForWinner(player, turnCounter);
    }

})

sq2.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq2)
        checkForWinner(player, turnCounter);
    }
})

sq3.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq3)
        checkForWinner(player, turnCounter);
    }
})

sq4.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq4)
        checkForWinner(player, turnCounter);
    }
})

sq5.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq5)
        checkForWinner(player, turnCounter);
    }
})

sq6.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq6)
        checkForWinner(player, turnCounter);
    }
})

sq7.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq7)
        checkForWinner(player, turnCounter);
    }
})

sq8.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq8)
        checkForWinner(player, turnCounter);
    }
})

sq9.addEventListener("click", () => {
    if (playOn) {
        gameClick(sq9)
        checkForWinner(player, turnCounter);
    }
})
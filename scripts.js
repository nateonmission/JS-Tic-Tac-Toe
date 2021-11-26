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

let gameHistory = []

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
    counter = 0;

} 

gameCounter = 0;
const gameEnd = (player) => {
    if (player === "Draw") {
        let playAgain = prompt(`
        Nobody WINS! It's a DRAW!
        Do y'all want to play again! (y/n)
        `).toLowerCase()

        if (playAgain === 'y' || playAgain === 'yes') {
            clearBoard();
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
        }
    }
}

let p1Name = prompt("Player 1 with be Xs. What is your name? ");
let p2Name = prompt("Player 2 with be Os. What is your name? ");

const player1 = new Player('X', p1Name);
let p1 = document.createElement('p')
p1.setAttribute("id",player1.sigel);
p1.innerText = `Xs - ${player1.name} >> ${player1.wins}`
statusArea.append(p1);

const player2 = new Player('O', p2Name);
let p2 = document.createElement('p')
p2.setAttribute("id",player2.sigel);
p2.innerText = `Os - ${player2.name} >> ${player2.wins}`
statusArea.append(p2);

counter = 1;
let player = player1;

const checkForWinner = (player, counter) => {
    let sigel = player.sigel;
    
    switch (true) {
        case (
            sq1.innerText === sq2.innerText &&
            sq2.innerText === sq3.innerText &&
            sq3.innerText === sigel
        ):
            console.log(`${sigel} WINS!`);
            gameEnd(player);
            break;
        case (
            sq4.innerText === sq5.innerText &&
            sq5.innerText === sq6.innerText &&
            sq4.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            gameEnd(player);
            break;
        case (
            sq7.innerText === sq8.innerText &&
            sq8.innerText === sq9.innerText &&
            sq9.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            gameEnd(player);
            break;
        case (
            sq1.innerText === sq4.innerText &&
            sq4.innerText === sq7.innerText &&
            sq7.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            gameEnd(player);
            break;
        case (
            sq2.innerText === sq5.innerText &&
            sq5.innerText === sq8.innerText &&
            sq8.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            gameEnd(player);
            break;
        case (
            sq3.innerText === sq6.innerText &&
            sq6.innerText === sq9.innerText &&
            sq9.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            gameEnd(player);
            break;
        case (
            sq3.innerText === sq5.innerText &&
            sq5.innerText === sq7.innerText &&
            sq7.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            gameEnd(player);
            break;
        case (
            sq1.innerText === sq5.innerText &&
            sq5.innerText === sq9.innerText &&
            sq9.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            gameEnd(player);
            break;
        case (counter === 9):
            console.log("DRAW");
            gameEnd('Draw');
            break;
        default:
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
    console.log(`${player.sigel} : ${counter}`)
    counter++;
    player = counter%2 === 0 ? player2 : player1;
    

}

sq1.addEventListener("click", () => {
    gameClick(sq1)
    checkForWinner(player, counter);
    takeTurns()

})

sq2.addEventListener("click", () => {
    gameClick(sq2)
    checkForWinner(player, counter);
    takeTurns()
})

sq3.addEventListener("click", () => {
    gameClick(sq3)
    checkForWinner(player, counter);
    takeTurns()
})

sq4.addEventListener("click", () => {
    gameClick(sq4)
    checkForWinner(player, counter);
    takeTurns()
})

sq5.addEventListener("click", () => {
    gameClick(sq5)
    checkForWinner(player, counter);
    takeTurns()
})

sq6.addEventListener("click", () => {
    gameClick(sq6)
    checkForWinner(player, counter);
    takeTurns()
})

sq7.addEventListener("click", () => {
    gameClick(sq7)
    checkForWinner(player, counter);
    takeTurns()
})

sq8.addEventListener("click", () => {
    gameClick(sq8)
    checkForWinner(player, counter);
    takeTurns()
})

sq9.addEventListener("click", () => {
    gameClick(sq9)
    checkForWinner(player, counter);
    takeTurns()
})
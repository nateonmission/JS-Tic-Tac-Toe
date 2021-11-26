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

} 

gameCounter = 0;
const gameEnd = (player) => {
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
    console.log(sigel)
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
            break;
        case (
            sq7.innerText === sq8.innerText &&
            sq8.innerText === sq9.innerText &&
            sq9.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            break;
        case (
            sq1.innerText === sq4.innerText &&
            sq4.innerText === sq7.innerText &&
            sq7.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            break;
        case (
            sq2.innerText === sq5.innerText &&
            sq5.innerText === sq8.innerText &&
            sq8.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            break;
        case (
            sq3.innerText === sq6.innerText &&
            sq6.innerText === sq9.innerText &&
            sq9.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            break;
        case (
            sq3.innerText === sq5.innerText &&
            sq5.innerText === sq7.innerText &&
            sq7.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            break;
        case (
            sq1.innerText === sq5.innerText &&
            sq5.innerText === sq9.innerText &&
            sq9.innerText === sigel
        ):
            console.log(`${sigel} WINS!!!!`)
            break;
        case (counter === 8):
            console.log("DRAW");
            break;

    }
}


sq1.addEventListener("click", () => {
    if(sq1.innerText === ''){
    let sigel = player.getSigel()
    sq1.innerHTML = `${sigel}`;
    sq1.setAttribute("class",`${player.color}`);
    checkForWinner(player, counter);
    player = counter%2 === 0 ? player1 : player2;
    counter++;
    } else {
        throw "already clciked"
    }

})

sq2.addEventListener("click", () => {
    if(sq2.innerText === ''){
        let sigel = player.getSigel()
        sq2.innerHTML = `${sigel}`;
        sq2.setAttribute("class",`${player.color}`);
        checkForWinner(player, counter);
        player = counter%2 === 0 ? player1 : player2;
        counter++;
        } else {
            throw "already clciked"
        }
})

sq3.addEventListener("click", () => {
    if(sq3.innerText === ''){
        let sigel = player.getSigel()
        sq3.innerHTML = `${sigel}`;
        sq3.setAttribute("class",`${player.color}`);
        checkForWinner(player, counter);
        player = counter%2 === 0 ? player1 : player2;
        counter++;
        } else {
            throw "already clciked"
        }
})

sq4.addEventListener("click", () => {
    if(sq4.innerText === ''){
    let sigel = player.getSigel()
    sq4.innerHTML = `${sigel}`;
    sq4.setAttribute("class",`${player.color}`);
    checkForWinner(player, counter);
    player = counter%2 === 0 ? player1 : player2;
    counter++;
    } else {
        throw "already clciked"
    }

})

sq5.addEventListener("click", () => {
    if(sq5.innerText === ''){
        let sigel = player.getSigel()
        sq5.innerHTML = `${sigel}`;
        sq5.setAttribute("class",`${player.color}`);
        checkForWinner(player, counter);
        player = counter%2 === 0 ? player1 : player2;
        counter++;
        } else {
            throw "already clciked"
        }
})

sq6.addEventListener("click", () => {
    if(sq6.innerText === ''){
        let sigel = player.getSigel()
        sq6.innerHTML = `${sigel}`;
        sq6.setAttribute("class",`${player.color}`);
        checkForWinner(player, counter);
        player = counter%2 === 0 ? player1 : player2;
        counter++;
        } else {
            throw "already clciked"
        }
})

sq7.addEventListener("click", () => {
    if(sq7.innerText === ''){
        let sigel = player.getSigel()
        sq7.innerHTML = `${sigel}`;
        sq7.setAttribute("class",`${player.color}`);
        checkForWinner(player, counter);
        player = counter%2 === 0 ? player1 : player2;
        counter++;
        } else {
            throw "already clciked"
        }

})

sq8.addEventListener("click", () => {
    if(sq8.innerText === ''){
        let sigel = player.getSigel()
        sq8.innerHTML = `${sigel}`;
        sq8.setAttribute("class",`${player.color}`);
        checkForWinner(player, counter);
        player = counter%2 === 0 ? player1 : player2;
        counter++;
        } else {
            throw "already clciked"
        }
})

sq9.addEventListener("click", () => {
    if(sq9.innerText === ''){
        let sigel = player.getSigel()
        sq9.innerHTML = `${sigel}`;
        sq9.setAttribute("class",`${player.color}`);
        checkForWinner(player, counter);
        player = counter%2 === 0 ? player1 : player2;
        counter++;
        } else {
            throw "already clciked"
        }
})
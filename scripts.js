class Player {
    constructor (sigel) {
        this.sigel = sigel
    }
}

const player1 = new Player('X');

const sq1 = document.querySelector("#sq1");
const sq2 = document.querySelector("#sq2");
const sq3 = document.querySelector("#sq3");
const sq4 = document.querySelector("#sq4");
const sq5 = document.querySelector("#sq5");
const sq6 = document.querySelector("#sq6");
const sq7 = document.querySelector("#sq7");
const sq8 = document.querySelector("#sq8");
const sq9 = document.querySelector("#sq9");





sq1.addEventListener("click", (player) => {
    if (sq1.innerHTM === "") {
        console.log(`sq1 ${player.sigel}`)
        sq1.innerHTM = `${player.sigel}`;
    }

})
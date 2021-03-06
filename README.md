# Tic-Tac-Toe
*This page uses vanilla JavaScript to impliment a Tic-Tac-Toe game.*

## Basic Information
- Two players can play as many games as they wish and the app will track the number of games won by each player.
- One player can play against the computer.
- In both situations, the loser of one round starts the next round.
- If players elect not to play another game, a button will appear, allowing two new players to play.

## Design Approach
My aim is to build this game app in an Object Oriented way. Currently, each player is represented by a Player object and they make their moves through an associated method called on their object. I intend to move some of the game mechanics into a Board object, at a later time.

The visual aspect of the app is purely CSS, with the main game board being a grid. The score board section is a flex box div. On smaller screens, the score board with flip to a vertical layout and change fonts for readability.

The HTML file is minimal, with nearly all the game being built programatically in the JavaScript.

## Installation
Because this is basic JavaScript, the files can be coppied into the same directory and the `index.html` file dropped into any modern web broweser.

## Picking a Winner
For determining the winner, I simply used a switch statement. It checks for winning compbinations and returns 1 for an X victory, -1 for an O victory, Zero for a tie and null if there is no victor or tie yet. It runs after each trun, including the simulated turns during the Automated Player's turn.

## The Automated Player
Player 2 can be an automated player. The app will select a space based on the MiniMax algorithm. This is a recusive algorithm that simulates game outcomes looking for the best move.
- First, it receives current board information;
- Then it checks for an end game state (winner or tie);
  - If one is found, it returns a score based on what the outcome is;
  - If the game continues, the function is called again with the current simulated move added to the board.
- Once the moves have been scored, a sorted array is then used to grab the location with the best score.
- The move is passed to the player object to execute the move.

Currently, the automated player makes poor decisions when it's the second player to go but does ok when it takes the first turn. Work is still needed.

## Things to Do in the Future
- Tune Automated Player
- Create Board Object
- Move Classes to Seperate Files
- Add Sounds
  - On turn click,
  - On invalid move,
  - On game end.
- Build Final stats modal window at end of match.
- Add More intricate styling.
  
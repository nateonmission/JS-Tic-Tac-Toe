# Tic-Tac-Toe

*This page uses vanilla JavaScript to impliment a Tic-Tac-Toe game.*

- Two players can play as many games as they wish and the app will track the number of games won by each player.
- One player can play against the computer.
- In both situations, the loser of one round starts the next round.
- If players elect not to play another game, a button will appear, allowing two new players to play.

For determining the winner, I simply used a switch statement. It checks for winning compbinations and returns 1 for an X victory, -1 for an O victory, Zero for a tie and null if there is no victor or tie yet. 
// Dice Game (7 / 11)

// OBJECTIVE

/**
 *  ROLL A 7 or 11 to win each round
 *  1 to 4 player game
 * 
 *  # GAME PROCESS
 *  ASK How many players
 *  FIRST PLAYER ROLLS 
 *  -IF 7 or ll add 5 points
 *  IF NOT 7 or 11 next player
 *  NEXT PLAYER..
 * 
 *  TODO ON PLAYER SWITCH:
 *    todo NAME SHOULD BOLDEN AND 
 *     player section should lighten
 */


let players;
let diceRoll;

function choosePlayers(players) {

    // //todo SET PLAYER SCORE TO 0 4
    // console.log('Play Game')


    players = Number(prompt('How many players? (1-4)'));


    if (players === 1 || players === 2 || players === 3 || players === 4) {


        // players = prompt('How many players? 1-4');
        // console.log(`Players: ${players}`);
            
    console.log(`Players: ${players}`);
        return players;
        
    } else {
        
        alert("Invalid Input! (ENTER 1 - 4)");
        
        
    }

    
}


function displayDice(diceOne, diceTwo) {
    
    document.getElementById("diceOne").src = `imgs/dice-${diceOne}.png`;
    document.getElementById("diceTwo").src = `imgs/dice-${diceTwo}.png`;
}


const rollDice = function (diceRoll) {

    const max = 6;
    const min = 1;
    
    
    //roll 1 - 6
    let rollOne = Math.floor(Math.random() * (max - min) + min);
    let rollTwo = Math.floor(Math.random() * (max - min) + min);

    //DISPLAY DICE 
    displayDice(rollOne, rollTwo);
        
    
    return diceRoll = rollOne + rollTwo;

}

function resetScore () {
    
    for (var i = 1; i <= 4; i++){
             document.querySelector(`.player-${i}-score`).textContent = 0;
    }
}

document.getElementById('play').addEventListener("click", playGame);
document.getElementById('roll').addEventListener("click", playerRoll);

function playGame() {

    //# RESET SCORES
    resetScore();
    
    //# SELECT players
    choosePlayers(players);


}



players = 4;
function playerRoll() {
    
    console.log(players);
    let playerScore;
    let gameMessage = document.getElementById('messages').textContent;
    console.log(`Message: ${gameMessage}`)
    for (let i = 1; i <= players; i++){
        
        /*
        ? ASK PLAYER TO CLICK ROLL BTN TO ROLL
        ? PLAYER ROLLS 
        ? DISPLAY ROLL 
        ? CHECK ROLL
        ? NEXT PLAYER ROLL
        
        */

        if (playerScore == 7 || playerScore == 11) {
            
            gameMessage = `Player ${i} has won with ${playerScore}`;

        } else {
            gameMessage = `Player ${i}  CLICK ROLL!`;
            playerScore = rollDice();

            console.log(gameMessage);
            document.querySelector(`.player-${i}-score`).textContent = playerScore;

        }
    }

}
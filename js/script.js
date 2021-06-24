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
let roll;

function choosePlayers(players) {

    // //todo SET PLAYER SCORE TO 0 4
    // console.log('Play Game')


    players = prompt('How many players? (1-4)');

    if (players === 1 || players === 2 || players === 3 || players === 4) {


        // players = prompt('How many players? 1-4');
        console.log(`Players: ${players}`);
    } else {
        return players;
         alert("Invalid Input!");
    }

    
    
}


function displayDice(diceOne, diceTwo) {
    
    document.getElementById("diceOne").src = `imgs/dice-${diceOne}.png`;
    document.getElementById("diceTwo").src = `imgs/dice-${diceTwo}.png`;
}


const rollDice = function (roll) {

    const max = 6;
    const min = 1;
    
    
    //roll 1 - 6
    let rollOne = Math.floor(Math.random() * (max - min) + min);
    let rollTwo = Math.floor(Math.random() * (max - min) + min);

    //DISPLAY DICE 
    displayDice(rollOne, rollTwo);
        
    
    return roll = rollOne + rollTwo;

}

function resetScore () {
    
    for (var i = 1; i <= 4; i++){
             document.querySelector(`.player-${i}-score`).textContent = 0;
    }
}

function playGame() {

    resetScore();
    
    // SELECT players
    choosePlayers(players);

    for (let i = 0; i < players; i++){
        rollDice();
    }

    //  1st PLAYER ROLLS
    roll = rollDice();
    console.log(roll);

    let playerScore = document.querySelector('.player-1-score').textContent;
    console.log(`playerScore: ${document.querySelector('.player-1-score').textContent}`)
    console.log(playerScore);
    playerScore = roll;

}
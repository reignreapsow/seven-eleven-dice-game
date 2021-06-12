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
 */



// let diceOne = document.getElementById('diceOne').src;
// let diceTwo = document.getElementById('diceTwo').src;
// console.log(diceOne);

let players;
let roll;

function choosePlayers() {

    // //todo SET PLAYER SCORE TO 0 4
    // console.log('Play Game')


    // players = alert('How many players? 1-4');

    
    
}


function displayDice(diceOne, diceTwo) {
    
    document.getElementById("diceOne").src = `imgs/dice-${diceOne}.png`;
    document.getElementById("diceTwo").src = `imgs/dice-${diceTwo}.png`;
}


const rollDice = function () {

    const max = 6;
    const min = 1;
    
    
    //roll 1 - 6
    let rollOne = Math.floor(Math.random() * (max - min) + min);
    let rollTwo = Math.floor(Math.random() * (max - min) + min);
    
    
    console.log(`roll: ${rollOne}`)
    console.log(`roll: ${rollTwo}`)

    //DISPLAY DICE 
    displayDice(rollOne, rollTwo);
    
    roll = rollOne + rollTwo;
}

function playGame() {
    
    // SELECT players
    choosePlayers();

    //  1st PLAYER ROLLS
    let roll = rollDice();
    console.log(`Player rolls${roll}`)


}
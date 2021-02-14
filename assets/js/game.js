// variable declarations
let gameChoices = ['rock', 'paper', 'scissors']
let wins = 0;
let ties = 0;
let losses = 0;

//game (added timeout to allow html and css to load properly before alert)
window.setTimeout(function() {
    alert(`Welcome to Michael Rodriguez's rendition of Rock Paper Scissors!`)
    for (i = 0; i < gameChoices.length; i++) {
        // generate computer choice
        let computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
        console.log(`Round ${(i + 1)}... The computer has chosen ${computerChoice}. If you can see this, close the console! Dirty cheater...`);
        // collect user response and convert to all lowercase
        let userChoice = window.prompt("Would you like to choose 'rock', 'paper, or 'scissors'?");
        userChoice = userChoice.toLowerCase();
        // if valid response
        if ((userChoice === 'rock') || (userChoice === 'paper') || (userChoice === 'scissors')) {
            // win
            if ((userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')) {
                alert(`The computer has chosen ${computerChoice}. You have won this round!`);
                wins++;
            // tie
            } else if (userChoice === computerChoice) {
                alert(`The computer has chosen ${computerChoice}. You have tied this round.`);
                ties++;
            // lose
            } else {
                alert(`The computer has chosen ${computerChoice}. You have lost this round. 😞`);
                losses++;
            }
        // if invalid response    
        } else {
            alert(`Invalid response. Please try again from the beginning.`);
            break;
        }
    }
    // game results
    if ((wins + losses + ties) === 3) {
        if (wins === 3) {
            console.log(`You left the console open didn't you? You should be ashamed!`);
        }
        alert(`FINAL SCORE \nWINS: ${wins} \nTIES: ${ties} \nLOSSES: ${losses}`);
    }
}, 500);
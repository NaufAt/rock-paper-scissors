// randomly generates rock/paper or scissors
// runs as second argument in playround (which runs with every button click)
function computerPlay() {
    let randInt = Math.floor(Math.random()* 3) + 1;
    if (randInt===1){
        let computersMove = "rock";
        return computersMove;
    }

    else if (randInt === 2){
        let computersMove = "scissors";
        return computersMove;
    }

    else {
        let computersMove = "paper";
        return computersMove;
    }
}

// runs in every playRound event
//displays the outcome of the round with a DOM method
function displayOutcome (outcome){
    const p = document.querySelector("#outcome");
    p.textContent = outcome;
}


//takes parameters from playRound and updates the running score
// if no input (e.g. draw) - does nothing
function updateScore(playerScore,computerScore){
    if (playerScore === 1){
        const playerScoreDOM = document.querySelector('#playerscore');
        let result = Number(playerScoreDOM.innerHTML) + 1;
        playerScoreDOM.textContent = result;
        
    }
    else if (computerScore === 1){
        const computerScoreDOM = document.querySelector("#computerscore");
        let result = Number(computerScoreDOM.innerHTML) + 1;
        computerScoreDOM.textContent = result;
    };
};


// plays one round, displays Outcome in DOM// updates score / checks if winner 
function playRound(playerSelection,computerSelection){
    let playerMove = playerSelection
    let playerScore = null;
    let computerScore = null;
    // draw
    if (playerMove === computerSelection){
        let outcome = "Draw!";
        displayOutcome(outcome);
        updateScore(playerScore,computerScore)
        checkScore();
        
        
    }
    else if (playerMove ==="rock" && computerSelection ==="scissors"){
        playerScore +=1;
        let outcome= "You win, " + playerMove + " beats " + computerSelection + ".";
        displayOutcome(outcome);
        updateScore(playerScore,computerScore);
        checkScore();
        return playerScore;
        
        
    }
    else if (playerMove ==="scissors" && computerSelection ==="paper"){
        playerScore +=1;
        let outcome= "You win, " + playerMove + " beats " + computerSelection + ".";
        displayOutcome(outcome);
        updateScore(playerScore,computerScore);
        checkScore();
        return playerScore;
        
    }

    else if (playerMove ==="paper" && computerSelection ==="rock"){
        playerScore +=1;
        let outcome= "You win, " + playerMove + " beats " + computerSelection + ".";
        displayOutcome(outcome);
        updateScore(playerScore,computerScore);
        checkScore();
        return playerScore;
        
    }
    else {
        computerScore +=1;
        let outcome = "You lose! " + computerSelection + " beats " + playerMove;
        displayOutcome(outcome);
        updateScore(playerScore,computerScore);
        checkScore();
        return computerScore;
        
    }
}


// event listeners that use ID of button in place for player selection
// inside the playRound and thus trigger a playround event

const rock = document.querySelector("#rock");
rock.addEventListener('click',()=>{
    playRound(rock.id,computerPlay());
    
    
});

const paper = document.querySelector('#paper');
paper.addEventListener('click',()=>{
    playRound(paper.id,computerPlay());
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',()=>{
    playRound(scissors.id, computerPlay());
});


// Runs with every playround event which in turn runs with every button press
// CHECKS SCORE, IF PLAYER WINS: RESET SCORE , DECLARE WINNER AND RESET OUTCOME
// VICE VERSA FOR LOSS

function checkScore(){
    const playerScore = document.querySelector("#playerscore")
    const computerScore = document.querySelector("#computerscore")

    let runningPlayer= Number(playerScore.innerHTML);
    let runningComputer = Number(computerScore.innerHTML);

    if (runningPlayer >= 5){
        declareWin();
        resetScore();
        resetOutcomeBox();
    }

    else if (runningComputer >=5){
        declareLoss();
        resetScore();
        resetOutcomeBox();
    }


}

// declares winner when checkScore finds one
function declareWin() {
    alert("Congratulations, you won!");

}

// declares a loser when checkScore finds one
function declareLoss () {
    alert("You have lost the battle.");
}


// resets score if a winner/loser is found by checkScore
function resetScore () {
    const playerScore = document.querySelector("#playerscore");
    const computerScore = document.querySelector("#computerscore")
    playerScore.innerHTML = "0";
    computerScore.innerHTML = "0";
}


function resetOutcomeBox() {
    const outcome = document.querySelector("#outcome");
    outcome.textContent = '';
}


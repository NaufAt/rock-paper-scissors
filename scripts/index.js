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

function displayOutcome (outcome){
    alert(outcome);
}

function playRound(playerSelection,computerSelection){
    let playerMove = playerSelection.toLowerCase();
    let playerScore = null;

    if (playerMove === computerSelection){
        let outcome = "Draw!";
        displayOutcome(outcome);
        return playerScore = true;
    }
    else if (playerMove ==="rock" && computerSelection ==="scissors"){
        playerScore +=1;
        let outcome= "You win, " + playerMove + " beats " + computerSelection + ".";
        displayOutcome(outcome);
        return playerScore = true;
    }
    else if (playerMove ==="scissors" && computerSelection ==="paper"){
        playerScore +=1;
        let outcome= "You win, " + playerMove + " beats " + computerSelection + ".";
        displayOutcome(outcome);
        return playerScore = true;
    }

    else if (playerMove ==="paper" && computerSelection ==="rock"){
        playerScore +=1;
        let outcome= "You win, " + playerMove + " beats " + computerSelection + ".";
        displayOutcome(outcome);
        return playerScore = true;
    }
    else {
        let outcome = "You lose! " + computerSelection + " beats " + playerMove;
        displayOutcome(outcome);
    }
}

function displayWinner(playerScore, computerScore){
    if (playerScore === computerScore){
        alert("Final result: You draw");
    }
    if (playerScore > computerScore){
        alert("Final result: You win");
    }
    else {
        alert("Final result: You win");
    }
}



function game (){
    let round = 5
    let playerScore = 0;
    let computerScore = 0;

    while (round > 0){
        const playerSelection = prompt("Select move: rock, paper or scissors");
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        round = round - 1;

        if (playRound===true){
            playerScore +=1;
        }
        else{
            computerScore +=1;
        }
    


    }
    displayWinner(playerScore,computerScore);

}

console.log(game());
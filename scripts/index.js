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
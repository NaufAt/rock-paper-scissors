# rock-paper-scissors


1. Game is played by pressing a button option of either rock, paper or scissors

2. when the button is pressed, an eventListener calls the playRound function, using button.id as player's choice and computerPlay as the second parameter to generate a random move.

3. with each playRound, the outcome of that event is declared within a div (declareOutcome) / a running score is updated (updateScore) and the score is checked to see if a player has won or loss (checkScore)

4. if a player has won or loss, the checkScore function triggers a declaration of win/loss + resetting of both score and outcome box
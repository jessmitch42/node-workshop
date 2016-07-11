/* Number guessing game!

Create a file called number-guessing-game.js.

In this file, re-write your number guessing game (from the basic javascript 
workshop) for the command line!

Instead of using prompt and alert, you will have to use capabilities from 
NodeJS and any external module. HINT: there is an npm library called prompt 
that can help you with that :)
*/

var prompt = require("prompt");



function gameTime() {
    var numToGuess = Math.floor(Math.random() * 100);
    console.log(numToGuess);
    var i = 1;
    
    function guessingGame() {
        return prompt.get("guess", function(err, result) {
            
            if (err) {
                console.log("Oops!!! There was an error. :(");
            }
            else {
                if (Number(result.guess) === numToGuess) {
                    console.log("You got it!! Woo!");
                }
                else if (Number(result.guess) > numToGuess && i < 4) {
                    console.log("Too high! Try again!");
                    i++
                    guessingGame();
                }
                else if (Number(result.guess) < numToGuess & 1 < 4) {
                    console.log("Too low! Try again!");
                    i++
                    guessingGame();
                }
            }
        });
    }
    guessingGame();
}
gameTime(); 

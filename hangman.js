/* Challenge: Hangman!

Create a file called hangman.js.
In this file, write a program that will let the user play hangman. The 
program should work as follows:
 - Choose a random word from a list of words.
 - In a loop, do the following:
    - Ask the user to guess a letter
    - If the user guessed a wrong letter, then add one step to the hangman 
    “drawing”
    - Display the current completion of the word next to a hangman ASCII 
    "drawing". You can get some inspiration from either here or here
    - Keep looping until either the word is found or the hangman is hanged!
 - Display a message to the user letting them know what happened

Save/commit/push
*/
var prompt = require("prompt");
var listOfWords = ["football", "basketball", "volleyball", "alphabet", "tyrannosaurus", "mothafucka"];
var hangmanDrawing = ["  ___________ \n\ |          | \n\ |         0  \n\ |           \n\ | \n\ |\n\ | \n\ |",
        "  ___________ \n\ |          | \n\ |        _0__ \n\ |       /  | | \n\ |      /      \n\ |",
        "  ___________ \n\ |          | \n\ |        _0__ \n\ |       /  | |\n\ |      / \n\ |        / \n\ |       / \n\ |",
        "  ___________ \n\ |          | \n\ |        _0__ \n\ |       /  | |\n\ |      /   | \n\ |        / /\n\ |       / \n\ |",
        "  ___________ \n\ |          | \n\ |        _0__ \n\ |       /  | |\n\ |      /   | \n\ |        / /\n\ |       / \n\ |",
        "  ___________ \n\ |          | \n\ |        _0__ \n\ |       /  | |\n\ |         /   | \n\ |        / /\n\ |       / \n\ |"
    ]
// console.log(hangmanDrawing[0]);
// console.log(hangmanDrawing[1]);
// console.log(hangmanDrawing[2]);
// console.log(hangmanDrawing[3]);
// console.log(hangmanDrawing[4]);
// console.log(hangmanDrawing[5]);


function answerArray(word) {
    var ansArray = [];
    for (var i = 0; i < word.length; i++) {
        ansArray.push("_");
    }
    return ansArray;
}

function hangmanGame() {
    var hangman = 0;
    var answersLeft = 6;
    var randomWord = listOfWords[Math.floor((listOfWords.length) * Math.random())].split('');
    var dashedWord = answerArray(randomWord);

    function wordGuess() {
        prompt.get("letterGuess", function(err, result) {
            if (err) throw err;

            if (answersLeft > 0) {
                var found = randomWord.indexOf(result.letterGuess);
                if (found > -1) {
                    randomWord.forEach(function(letter, i) {
                        if (letter === result.letterGuess) {
                            dashedWord.splice(i, 1, result.letterGuess);
                        }
                    })
                    console.log(dashedWord);
                    wordGuess();
                }
                else {
                    answersLeft--;
                    hangman++;
                    console.log(hangmanDrawing[hangman]);
                    wordGuess();
                }
            }
        });

    }
    wordGuess();
}
hangmanGame();


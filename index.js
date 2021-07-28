var wordLetters     = ['f', 'o', 'x'];
var guessedLetters  = ['_', '_', '_'];
//Guess Letter
function guessLetter(letter) {
    var validGuess = false;
    var guessMore = false;
    //For loop, guessing the word
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
           validGuess = true;
        }
        if (guessedLetters[i] == '_') {
            guessMore = true;
        }
    }

    //If it's a vlid guess, enter
    if  (validGuess) {
        console.log('You have found a letter');
        console.log(guessedLetters.join(''));

        if (!guessMore) {
            console.log("Congratulations, you have won!");
        } 

    //Invalid guess
    } else {
        console.log('Sorry, thats not right.');
    }
}


guessLetter(prompt("Enter your letter: ").toLowerCase());
console.log("--------------------------------------------------------------------------------")
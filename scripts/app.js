// Someone thinks of a word and we keep it secret from the other players.
// We will display a series of underscores depending upon the length of the word.
// Each turn, the player will guess 1 letter from the word.
// If guess is correct, we will display the letter in the appropriate spot within the blank word.
// If incorrect, we draw a piece of the hangman OR tell the user they have x amount of guesses remaining.
// Add incorrect guess to a div box.
// Start button
// Replay button

// We'll need an ID for:
// Start button
// Replay button
// SecretWord
// Wrong guesses
// Hangman
// User guesses/inputs

// ID Section

let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");

let secretWord = document.getElementById("secretWord");
let wrongGuesses = document.getElementById("wrongGuesses");
let hangMan = document.getElementById("hangMan");
let userInput = document.getElementById("userInput");

// Variables
// randomWord will be for our API call
// wrongGuess will be the user's incorrect input
// displayedWord will be for the user's correct input
let randomWord = "";
let wrongGuess = "";
let displayedWord = [];

let guesses = 0;
let maxGuesses = 5;

startBtn.addEventListener("click", function (e) {
  // We will call our API function
  ApiCall();
});

function ApiCall() {
  // We initiate the fetch request from our random word API
  fetch("https://random-word-api.herokuapp.com/word")
    .then((response) => {
      // We're going to use .json() method to parse the response into json data
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
      startGame(data[0]);
    });
}

function startGame(word) {
    randomWord = word;

    // Now we have to changed our displayedWord to have _ for the length of our random word

    for(let i = 0; i < randomWord.length; i++) {
        displayedWord[i] = "_";
    }
    // We will update our "game State"
    updateGameState();
}

function updateGameState() {
    secretWord.textContent = displayedWord.join(" ");

    hangMan.textContent = `Guesses Count: ${guesses} / ${maxGuesses}`;
}
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let startButton = document.getElementById('btn__reset');
let keys = document.querySelectorAll('#qwerty .key');
let phrase = document.getElementById('phrase');

//Initiates a new game
startButton.addEventListener('click', () => {
    game = new Game(); 
    game.startGame();
})

//Listens for event on each key for onscreen keyboard
keys.forEach(key => {
    key.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    })
})
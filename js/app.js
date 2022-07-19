/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let startButton = document.getElementById('btn__reset');
let keys = document.querySelectorAll('#qwerty .key');

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

keys.forEach(key => {
    key.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    })
})
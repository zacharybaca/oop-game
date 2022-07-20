/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0,
        this.phrases = [
            new Phrase("Hello World"),
            new Phrase("I love dogs"),
            new Phrase("I love cats"),
            new Phrase("I love animals"),
            new Phrase("I like the color blue")
        ]
        this.activePhrase = null
    }

    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * this.phrases.length)
        let randomPhrase = this.phrases[randomIndex]
        return randomPhrase;
    }
    // This Method Starts The Game By Hiding The Overlay Element
    startGame() {
        let randomPhrase = this.getRandomPhrase();
        let overLay = document.getElementById('overlay');
        overLay.style.display = 'none';
        this.activePhrase = randomPhrase;
        this.activePhrase.addPhraseToDisplay();
    }

    //Checks to see if user guessed phrase by comparing length of revealed letter array to phrase array
    checkForWin() {
        let numOfLetters = document.querySelectorAll('#phrase li').length;
        let letters = document.querySelectorAll('#phrase li');
        let correctlyGuessed = [];

        for (let i = 0; i < numOfLetters; i++) {
            if (letters[i].classList.contains('show') || letters[i].classList.contains('space')) {
                correctlyGuessed.push(letters[i]);
            }
        }
        if (numOfLetters === correctlyGuessed.length) {
            return true;
        } else {
            return false;
        }
    }

    //Replaces heart image with empty heart image if a guess is incorrect
    removeLife() {
        let lives = Array.from(document.querySelectorAll('#scoreboard img'));

        let live = lives.find(live => live.getAttribute('src') === 'images/liveHeart.png');
        this.missed += 1;
        live.setAttribute('src', 'images/lostHeart.png');

        if (this.missed >= 5) {
            this.gameOver();
        }

    }

    //Displays message if user has won or not, and then resets the game
    gameOver() {
        let overlay = document.getElementById('overlay');
        let gameOverMessage = document.getElementById('game-over-message');
        overlay.style.display = '';

        if (this.checkForWin()) {
            gameOverMessage.textContent = 'Congratualations! You Won!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
            this.resetGame();
        } else {
            gameOverMessage.textContent = 'Sorry, better luck next time!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
            this.resetGame();
        }
    }

    //Checks to see if clicked keyboard event target equals letter in active phrase
    handleInteraction(button) {
        

        if (this.activePhrase.checkLetter(button.innerText)) {
            button.disabled = true;
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.innerText);

            if (this.checkForWin()) {
                this.gameOver(true);
            }

        } else {
            button.disabled = true;
            button.classList.add('wrong');
            this.removeLife();
        } 

        
    }

    // Resets Game By Removing Class Attributes From All List Items And Resets Missed and Active Phrase to Empty
    resetGame() {
        let letters = document.querySelectorAll('#phrase li');
        let lives = Array.from(document.querySelectorAll('#scoreboard img'));
        let keys = document.querySelectorAll('#qwerty .key');

        this.missed = 0;
        this.activePhrase = null;

        for (let letter of letters) {
            letter.remove();
        }

        for (let key of keys) {
            key.classList.remove('chosen', 'wrong');
            key.removeAttribute('disabled');
        }

        for (let live of lives) {
            live.setAttribute('src', 'images/liveHeart.png');
        }

    }
}
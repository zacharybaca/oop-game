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

    removeLife() {
       

        let lives = Array.from(document.querySelectorAll('#scoreboard img'));

        let live = lives.find(live => live.getAttribute('src') === 'images/liveHeart.png');
        this.missed += 1;
        live.setAttribute('src', 'images/lostHeart.png');

        if (this.missed >= 5) {
            console.log('gameover');
        }

    }
}
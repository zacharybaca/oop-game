/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */




// Class That Handles Phrases For The Guessing Phrase Game
class Phrase {
    
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        
        for (let i = 0; i < this.phrase.length; i++) {
            let listOfLetters = document.querySelector('#phrase ul');
            let letter = document.createElement('li');
            let splitPhrase = this.phrase.split('');
            letter.textContent = splitPhrase[i];
            if (splitPhrase[i] == ' ') {
                letter.classList.add('space');
                listOfLetters.appendChild(letter);
            }
            else {
                letter.classList.add('letter');
                letter.classList.add('hide');
                letter.classList.add(`${letter.textContent}`);
                listOfLetters.appendChild(letter);
            }
        }
    }

    checkLetter() {
        let keyBoard = document.getElementById('qwerty');
        
        for (let i = 0; i < this.phrase.length; i++) {
            let splitPhrase = this.phrase.split('');
            let letter = splitPhrase[i];
            keyBoard.addEventListener('click', (e) => {
                if (e.target.textContent == letter) {
                    console.log(letter);
                    return letter;
                }
            })
        }
    }

    showMatchedLetter() {
        let matchedLetter = this.checkLetter();
        let matchedElements = document.getElementsByClassName(`${matchedLetter}`);
        for (let i = 0; i < matchedElements.length; i++) {
            matchedElements[i].classList.remove('hide');
            matchedElements[i].classList.add('show');
        }
    }
}



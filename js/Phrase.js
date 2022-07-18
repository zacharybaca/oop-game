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
}

let newPhrase = new Phrase('sdlkfdslfkdslfkasd fdgfdgfdgfdgfd');
newPhrase.addPhraseToDisplay();
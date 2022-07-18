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
            listOfLetters.appendChild(letter);
        }
    }
}


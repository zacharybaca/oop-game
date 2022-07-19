/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0,
        this.phrases = [{
            phrase: "I live in Gary"
        },
        {
            phrase: "You live in Gary"
        },
        {
            phrase: "They Live in Gary"
        },
        {
            phrase: "You live in La Porte"
        },
        {
            phrase: "I don\'t live in La Porte"
        }],
        this.activePhrase = null
    }

    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * this.phrases.length + 1)
        let randomPhrase = this.phrases[randomIndex]
        return randomPhrase;
    }
}
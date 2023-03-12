import characters from "./data.js"
import Character from "./character.js"

const hero = new Character(characters.hero)
const monster = new Character(characters.monster)
render()

function render() {
    document.getElementById("hero").innerHTML = hero.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}
function endGame() {
    const endMessage = hero.health === 0 && monster.health === 0 ? "No victors - all creatures are dead"
        : hero.health <= 0 ? "The Orc is Victorious"
        : "The Wizard Wins"
    const endEmoji = hero.health > 0 ? "🔮" : "☠️"

    document.getElementById("main-section").innerHTML = 
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>` 
}

function attack() {
    hero.getDiceHtml()
    monster.getDiceHtml()
    hero.takeDamage(monster.currentDiceScore)
    monster.takeDamage(hero.currentDiceScore)
    render()

    if(hero.dead || monster.dead) {
        endGame()
    }
}
document.getElementById("attack-button").addEventListener("click", attack)







/*
function render() {
    characters.forEach(function renderCharacter(character) {
        document.getElementById(character.elementId).innerHTML += `
            <div class="character-card">
                <h4 class="name"> ${character.name} </h4>
                <img class="avatar" src=${character.avatar}/>
                <p class="health">health: <b> ${character.health} </b></p>
                <div class="dice-container"><div class="dice"> ${character.diceScore} </div></div>
            </div>
        `
    })
}
render()
*/
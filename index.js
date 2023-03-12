import characters from "./data.js"
import Character from "./character.js"

const hero = new Character(characters.hero)
const monster = new Character(characters.monster)
render()

function render() {
    document.getElementById("hero").innerHTML = hero.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

function attack() {
    render()
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
characters = [
    {
        elementId: "hero",
        name: "Wizard",
        avatar: "images/wizard.png",
        health: 60,
        diceScore: 6,
    },
    {
        elementId: "monster",
        name: "Orc",
        avatar: "images/orc.png",
        health: 10,
        diceScore: 4,
    }
]
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

const hero = characters[0]
const monster = characters[1]

function renderCharacter(data) {
    const { elementId, name, avatar, health, diceScore } = data
        document.getElementById(elementId).innerHTML =
            `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    <div class="dice"> ${diceScore} </div>
                </div>
            </div>`
}

renderCharacter(hero)
renderCharacter(monster)

characters = [
    {
        elementId: "hero",
        name: "Wizard",
        avatar: "images/wizard.png",
        health: 60,
        diceCount: 3,
    },
    {
        elementId: "monster",
        name: "Orc",
        avatar: "images/orc.png",
        health: 10,
        diceCount: 1,
    }
]

function Character(data) {
    Object.assign(this, data)
    this.getCharacterHtml = function() {
        const { elementId, name, avatar, health, diceCount } = this
    
        return `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${ this.getDiceHtml(diceCount) }
                </div>
            </div>`
    }
    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(num) {
            return `<div class="dice">${num}</div>`
        }).join('')
    }
}

const hero = new Character(characters[0])
const monster = new Character(characters[1])
render()

function render() {
    document.getElementById(hero.elementId).innerHTML = hero.getCharacterHtml()
    document.getElementById(monster.elementId).innerHTML = monster.getCharacterHtml()
}

function getDiceRollArray(diceCount) {
    const randomNumberArray = new Array(diceCount).fill(0).map(function() {
        return Math.floor(Math.random() * 6) +1
    })   
    return randomNumberArray 
}

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
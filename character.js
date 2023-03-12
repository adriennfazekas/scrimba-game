import { getDiceRollArray, getDicePlaceholder } from "./utils.js"

function Character(data) {
    Object.assign(this, data)
    
    this.diceArray = getDicePlaceholder(this.diceCount)

    this.getCharacterHtml = function() {
        const { elementId, name, avatar, health, diceCount, diceArray } = this
    
        return `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${ diceArray }
                </div>
            </div>`
    }
    this.getDiceHtml = function(diceCount) {        
        return getDiceRollArray(diceCount).map(function(num) {
            return `<div class="dice">${num}</div>`
        }).join('')
    }
}
export default Character
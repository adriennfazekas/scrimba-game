import { getDiceRollArray, getDicePlaceholder } from "./utils.js"

function Character(data) {
    Object.assign(this, data)
    
    this.diceArray = getDicePlaceholder(this.diceCount)

    this.getCharacterHtml = function() {
        const { elementId, name, avatar, health, diceCount, diceArray} = this
    
        return `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${ diceArray }
                </div>
            </div>`
    }
    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num) {
            return `<div class="dice">${num}</div>`
        }).join('')
    }
    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce(function(totalAttack, currentAttack) {
            return totalAttack + currentAttack
        })
        this.health -= totalAttackScore
    }
}
export default Character
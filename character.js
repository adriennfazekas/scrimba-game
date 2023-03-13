import { getDiceRollArray, getDicePlaceholder, getPercentage } from "./utils.js"

function Character(data) {
    Object.assign(this, data)
    
    this.diceArray = getDicePlaceholder(this.diceCount)
    this.maxHealth = this.health

    this.getCharacterHtml = function() {
        const { elementId, name, avatar, health, diceCount, diceArray} = this     
        const healthBar = this.getHealthBarHtml() 
            
        return `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${ diceArray }
                </div>
            </div>`
    }
    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => 
            `<div class="dice">${num}</div>`).join('')
    }
    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((totalAttack, currentAttack) => totalAttack + currentAttack)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.health = 0
            this.dead = true
        } 
    }
    this.getHealthBarHtml = function() {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                    style="width: ${percent}%;">
                </div>
            </div>
        `
    }
    
}
export default Character
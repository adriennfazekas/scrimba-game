import characters from "./data.js"
import Character from "./character.js"

let monsterArray = ["orc", "demon", "goblin"]

function getNewMonster() {
    const nextMonsterData = characters[monsterArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
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

    if(monster.dead){
        monster = getNewMonster()
        render()
    } else if ((monsterArray == 0) || hero.dead) {
        endGame()
    }
}
document.getElementById("attack-button").addEventListener("click", attack)

function render() {
    document.getElementById("hero").innerHTML = hero.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

const hero = new Character(characters.hero)
let monster = getNewMonster()
render()

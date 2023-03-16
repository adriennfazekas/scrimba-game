import characters from "./data.js"
import Character from "./character.js"

let monsterArray = ["orc", "demon", "goblin"]
const attackBtn = document.getElementById("attack-button")

function attack() { 
    hero.getDiceHtml()
    monster.getDiceHtml()
    hero.takeDamage(monster.currentDiceScore)
    monster.takeDamage(hero.currentDiceScore)
    render()   

    if(hero.dead){
        attackBtn.disabled = true
        endGame()
    }
    else if(monster.dead){
        if(monsterArray.length > 0){
            attackBtn.disabled = true
            setTimeout(()=>{
                attackBtn.disabled = false
                monster = getNewMonster()
                render()
            },1500)
        }
        else{
            attackBtn.disabled = true
            endGame()
        }
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

function getNewMonster() {
    const nextMonsterData = characters[monsterArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function endGame() {
    const endMessage = hero.health === 0 && monster.health === 0 ? "No victors - all creatures are dead"
        : hero.health <= 0 ? "The monsters are Victorious"
        : "The Wizard Wins"
    const endEmoji = hero.health > 0 ? "🔮" : "☠️"
    setTimeout(()=> {
        document.getElementById("main-section").innerHTML = 
            `<div class="end-game">
                <h2>Game Over</h2>
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>`
            attackBtn.remove()
    }, 1500)     
}

export function getDiceRollArray(diceCount) {
    const randomNumberArray = new Array(diceCount).fill(0).map(function() {
        return Math.floor(Math.random() * 6) +1
    })   
    return randomNumberArray 
}

export function getDicePlaceholder(diceCount) {
    const placeholderArray = new Array(diceCount).fill().map(function() {
        return `<div class="placeholder-dice"></div>`
    }).join('')
    return placeholderArray
}
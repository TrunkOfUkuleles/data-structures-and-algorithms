'use strict';

function multiBracketValidation(input){
    let cir = 0
    let square = 0
    let curl = 0

    input.split('').map(el => {
        if (el === '{'){curl++}
        if (el === '}'){curl--}
        if (el === '['){square++}
        if (el === ']'){square--}
        if (el === '('){cir++}
        if (el === ')'){cir--}

    })
    return (cir + square + curl) === 0

}

module.exports = multiBracketValidation;
const readline = require('readline-sync');

const urDistance = readline.questionInt('The distance ? ');

const urWeight = readline.questionInt('Weight ? ');

const suchSpeedo = (distance, weight) => {
    const result = distance / weight
    console.log(`Average speed ${result}`)
}

suchSpeedo(urDistance, urWeight);
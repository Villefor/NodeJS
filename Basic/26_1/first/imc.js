const readline = require('readline-sync');

const urWeight = readline.questionFloat('how much you weight? ');

const urHeight = readline.questionInt('how tall are you? ');

function IMC (weight, height)  {

    const result = (weight / Math.pow(height / 100, 2)).toFixed(2);

    console.log(`IMC: ${result}`);

    if(result < 18.5) {
        return console.log( "Situation: Under weight, too thin")
    }
    else if(result > 18.5 && result < 24.9) {
        return console.log( "Situation: Normal weight")
    }
    else if(result > 25.5 && result < 29.9) {
        return console.log( "Situation: Above weight")
    }
    else if(result > 25.5 && result < 29.9) {
        return console.log( "Situation: Obesity, first degree")
    }
    else if(result > 25.5 && result < 29.9) {
        return console.log( "Situation: Obesity, second degree")
    }
    else if(result > 25.5 && result < 29.9) {
        return console.log( "Situation: Obesity, third degree")
    }
    console.log( "Situation: Morbid obesity")
}

IMC(urWeight, urHeight);
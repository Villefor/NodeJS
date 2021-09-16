const readline = require('readline-sync');

const urWeight = readline.questionFloat('how much you weight? ');
const urHeight = readline.questionFloat('how tall are you? ');

const situation = ""
function IMC (weight, height)  {

    if(weight / height * 2 < 18.5) {
        return situation.push( "Under weight, too thin")
    }
    else if(weight / height * 2 > 18.5 && weight / height * 2 < 24.9) {
        return situation.push( "Normal weight")
    }
    else if(weight / height * 2 > 25.5 && weight / height * 2 < 29.9) {
        return situation.push( "Above weight")
    }
    else if(weight / height * 2 > 25.5 && weight / height * 2 < 29.9) {
        return situation.push( "Obesity, first degree")
    }
    else if(weight / height * 2 > 25.5 && weight / height * 2 < 29.9) {
        return situation.push ("Obesity, second degree")
    }
    else if(weight / height * 2 > 25.5 && weight / height * 2 < 29.9) {
        return situation.push (" Obesity, third degree")
    }
    else if(weight / height * 2 > 40.0) {
        return situation.push (" Morbid obesity")
    }
}

console.log(IMC(urWeight, urHeight), situation);
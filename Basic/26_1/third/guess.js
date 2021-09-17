const readline = require('readline-sync');

const urNumber = readline.questionInt('tell me your number? ');


function guesswhat (number) {
    const num = parseInt(Math.random() * 11);
    if( number !== num) {
        return console.log(`result: ${num} BEH, wrong number. Try again`)
    }
    console.log(`result: ${num} Congratulations, you won!`)
}

guesswhat(urNumber)
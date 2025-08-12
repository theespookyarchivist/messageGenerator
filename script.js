console.log('This is my test message to make sure that something is working at the very least');

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

const positiveWords = {
    level1: ['enough', 'wanted', 'needed'],
    level2: ['capable', 'unstoppable', 'untouchable'],
    level3: ['loved', 'cherished', 'enjoyed']
};

let affirmations = [];

for (let affirm in positiveWords) {
    let choosenAffirm = randomNumber(positiveWords[affirm].length);
    
    switch(affirm) {
        case 'level1':
            affirmations.push(`You are "${positiveWords[affirm][choosenAffirm]}".`);
            break;
        case 'level2':
            affirmations.push(`You are "${positiveWords[affirm][choosenAffirm]}".`);
            break;
        case 'level3':
            affirmations.push(`You are "${positiveWords[affirm][choosenAffirm]}".`);
            break;
        default:
            affirmations.push('I hope you have a lovely day!');
    }
}
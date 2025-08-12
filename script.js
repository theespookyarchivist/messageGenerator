console.log('This is my test message to make sure that something is working at the very least');

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

const positiveWords = {
    level1: ['enough', 'wanted', 'needed'],
    level2: ['capable', 'unstoppable', 'deserving'],
    level3: ['loved', 'cherished', 'enjoyed']
};

let positivity = [];

for (let affirm in positiveWords) {
    let choosenAffirm = randomNumber(positiveWords[affirm].length);
    
    switch(affirm) {
        case 'level1':
            positivity.push(`You are ${positiveWords[affirm][choosenAffirm]}.`);
            break;
        case 'level2':
            positivity.push(`You are ${positiveWords[affirm][choosenAffirm]}.`);
            break;
        case 'level3':
            positivity.push(`You are ${positiveWords[affirm][choosenAffirm]}.`);
            break;
        default:
            positivity.push('I hope you have a lovely day!');
    }
}

function formatAffirmations(affirmations) {
    const formatted = positivity.join('\n');
    console.log(formatted);
}

formatAffirmations(positivity);
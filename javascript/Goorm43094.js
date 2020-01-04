const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getScore = (score) => {
    const DIGIT = 2;
    const scores = score.split(' ').map(input => parseInt(input));
    const sum = scores.reduce((acc, cur) => acc + cur);
    const average = (sum / scores.length).toFixed(DIGIT);
    const grade = getGrade(average);
    console.log(average + ' ' + grade);
};

const getGrade = (average) => {
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
};

rl.on("line", (score) => {
    getScore(score);
    rl.close();
}).on("close", function() {
    process.exit();
});
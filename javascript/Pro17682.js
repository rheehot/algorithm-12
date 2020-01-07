function solution(dartResult) {
    const BONUS = { S: 1, D: 2, T: 3 };
    const stages = dartResult.match(/\d.?\D/g);
    const scores = [];

    stages.forEach(stage => {
        const [_, number, bonus, option] = stage.match((/(\d+)([SDT])([*#])?/));
        const score = Math.pow(number, BONUS[bonus]);
        scores.push(score);

        if (option === '*') {
            const second = scores.pop();
            const first = scores.pop();
            if (first) scores.push(first * 2);
            scores.push(second * 2);
        } else if (option === '#') {
            scores.push(scores.pop() * -1);
        }
    });

    return scores.reduce((acc, cur) => acc + cur);
}
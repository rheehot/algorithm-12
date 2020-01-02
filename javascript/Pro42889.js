function solution(N, stages) {
    const answer = [];
    const failStages = Array(N + 1).fill(0);
    let people = stages.length;

    stages.forEach(stage => {
        if (stage > N) return;
        failStages[stage]++;
    });

    failStages.forEach((stage, i) => {
        if (!i) return;
        answer.push({ stage: i, failureRate: !people ? 0 : stage / people });
        people -= stage;
    });

    answer.sort((prev, next) => {
        return prev.failureRate === next.failureRate ? prev.stage - next.stage : next.failureRate - prev.failureRate;
    });

    return answer.map(a => a.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4, 4, 4, 4, 4]);
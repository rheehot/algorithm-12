function solution(n, arr1, arr2) {
    const answer = [];
    const binaryArr1 = [];
    const binaryArr2 = [];

    arr1.forEach(el => {
        const binary = el.toString(2).split('').map(el => parseInt(el));
        while (binary.length !== n) binary.unshift(0);
        binaryArr1.push(binary);
    });

    arr2.forEach(el => {
        const binary = el.toString(2).split('').map(el => parseInt(el));
        while (binary.length !== n) binary.unshift(0);
        binaryArr2.push(binary);
    });

    for (let i = 0; i < binaryArr1.length; i++) {
        let row = '';
        for (let j = 0; j < binaryArr1[0].length; j++) {
            if (binaryArr1[i][j] || binaryArr2[i][j]) row += '#';
            else row += ' ';
        }
        answer.push(row);
    }

    return answer;
}
function makeNumber(str) {
    let numbers = '';
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i])) {
            numbers += str[i];
        }
    }
    return numbers;
}
function countNumbers(str) {
    let number = makeNumber(str);
    let countNum = {};
    for (let i = 0; i <= 9; i++) {
        countNum[i] = 0;
    }
    for (let num in countNum) {
        for (let i = 0; i < number.length; i++) {
            if (num === number[i]) {
                countNum[num] += 1;
            }
        }
    }

    return countNum;
}
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');

function fibonachiFull(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1+prevNum2)
    }

    return result[n]
}

function fibonachiShort(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


function fibonachiRecursion (n) {
    if (n === 1 || n === 2) {
        return 1
    }

    return fibonachiRecursion(n-1) + fibonachiRecursion(n-2)
}

console.log(fibonachiRecursion(6))
console.log(fibonachiShort(6))
console.log(fibonachiFull(6))


// 1, 1, 2, 3, 5, 8, 13, 21
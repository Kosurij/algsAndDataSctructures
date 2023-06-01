function sum(a, b, c) {
    return a+b+c
}

function advancedCurry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }

        return (...args2) => {
            return curried.apply(this, [...args, ...args2])
        }
    }
}

function basicCurry(fn) {
    return (a) => {
        return (b) => {
            return (c) => {
                return fn(a,b,c);
            }
        }
    }
}

const basicCurrySum = basicCurry(sum);

console.log(basicCurrySum(1)(2)(3));

const advancedCurriedSum = advancedCurry(sum);

console.log(advancedCurriedSum(1,2,3));
console.log(advancedCurriedSum(1,2)(3));
console.log(advancedCurriedSum(1)(2)(3));
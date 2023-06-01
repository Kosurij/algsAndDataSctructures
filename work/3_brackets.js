function isValid (s) {
    const brackets = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i];

        if (isClosedBracket(currentBracket)) {
            if (brackets[currentBracket] !== stack.pop()) {
                return false
            }
        } else {
            stack.push(currentBracket)
        }
    }


    return stack.length === 0;
};

function isClosedBracket (bracket) {
    return [')', '}', ']'].includes(bracket);
}
function minRemoveToMakeValid(s) {
    const stack = [];
    const removals = new Set();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                removals.add(i);
            }
        }
    }

    for (const index of stack) {
        removals.add(index);
    }

    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!removals.has(i)) {
            result += s.charAt(i);
        }
    }

    return result;
}

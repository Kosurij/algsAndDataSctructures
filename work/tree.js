const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 3,
                }
            ]
        }
    ],
}




function yo (obj) {
    const stack = [tree]
    const result = [];

    while (stack.length) {
        const node = stack.pop();

        if (node.value !== undefined) {
            result.push(node.value)
        }

        if (node.children?.length) {
            stack.push(...node.children)
        }
    }

    return result
}

console.log(yo(tree))
const str = 'This is a string'
const stack = []

const strSeparated = (str.split(''))

for (i = 0; i <= strSeparated.length - 1; i++) {
    stack.unshift(strSeparated[i])
}

console.log(stack)
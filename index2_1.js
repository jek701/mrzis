const stack = []

const pushFunction = (i) => stack.push(i)
const popFunction = () => stack.pop()

for (i = 0; i <= 10; i++) {
    pushFunction(i)
}

for (i = 0; i <= 2; i++) {
    popFunction()
}

console.log(stack)
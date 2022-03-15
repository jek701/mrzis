const arr1 = [], arr2 = []

const pushFunction = (i, arr) => arr.push(i)

for (i = 0; i <= 10; i++) {
    pushFunction(Math.floor(Math.random(i) * 10), arr1)
}

for (i = 0; i <= 10; i++) {
    pushFunction(Math.floor(Math.random(i) * 10), arr2)
}

console.log([arr1, arr2])
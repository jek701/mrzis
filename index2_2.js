const arr = []

const pushFunction = (i) => arr.push(i)
for (i = 0; i <= 10; i++) {
    pushFunction(Math.floor(Math.random(i) * 10))
}

arr.sort(function(a, b) {return a - b})

console.log(arr)
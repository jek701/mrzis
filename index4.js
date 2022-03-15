const arr1 = [1, 4, -1, -5, 4, 8, -1, -8, 0]

const less0 = arr1.filter(a => a <= 0)
const more0 = arr1.filter(a => a >= 0)

const newArr = [...less0, ...more0]

console.log(newArr)
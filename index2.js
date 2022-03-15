const array = [6, 6, 6, 12, 4, 1]

const num = array.find(val => array.filter(a => a === val).length === 1 && Number.isInteger(val))

console.log(num === undefined ? `There isn't any suitable number` : num)
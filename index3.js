const array1 = [6, 6, 6, 12, 4, 1, 1.5]
const array2 = [5, 5, 1, 6, 4, 1]

const filter1 = array1.filter(val => array1.filter(a => a === val).length === 1 && Number.isInteger(val))
const filter2 = array2.filter(val => array2.filter(a => a === val).length === 1 && Number.isInteger(val))

const newArr = [...filter1, ...filter2]

console.log(newArr)
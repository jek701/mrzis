const arr = [1, 5, 10, 6, 8]
const mostL = Math.min(...arr)
const index1 = arr.indexOf(mostL)

if (index1 !== -1) {
    arr.splice(index1, 1);
}

console.log(Math.min(...arr))
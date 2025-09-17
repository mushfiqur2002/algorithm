const prompt = require('prompt-sync')();
let arr = [10, 20, 50, 40, 30, 60]
let given = prompt('Enter Number : ')

function BinarySearch(arr) {
    let left = 0;
    let right = arr.length - 1
    let sortedArr = arr.sort((a, b) => (b - a))
    
    while (right >= left) {
        let mid = Math.floor((left + right) / 2)

        if (sortedArr[mid] === parseInt(given)) {
            return `Found your number : ${arr[mid]}`
        } else if (sortedArr[mid] < parseInt(given)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return 'Not Found'

}

console.log(BinarySearch(arr));

const prompt = require('prompt-sync')();
let arr = [10, 30, 50, 20, 60, 40]
let given = prompt('Enter Number :')

function LinearSearch(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === parseInt(given)) {
            return `Found your given number : ${given}`
        }
    }
    return 'not found'
}


console.log(LinearSearch(arr));

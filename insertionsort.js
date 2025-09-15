let arr = [20, 10, 40, 30, 50, 50, 60];

let arr2 = [];

for (let i = 0; i < 10; i++) {
    let randNum = Math.floor(Math.random() * 20);
    while (arr2.includes(randNum)) {
        randNum = Math.floor(Math.random() * 20);
    }
    arr2.push(randNum);
}
console.log(arr2);
console.log('sort function: ', arr2.sort((a, b) => b - a));


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let k = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] < k) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = k;
    }
    return array;
}

console.log(insertionSort(arr2));

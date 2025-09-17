let array = [30, 20, 40, 50, 10, 60, 5];
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIn = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIn]) {
                minIn = j;
            }
        }
        if (minIn != i) {
            let temp = arr[minIn];
            arr[minIn] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

console.log('give array :', array);
console.log('sorted array : ', selectionSort(array));

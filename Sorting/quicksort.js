let arr = [10, 30, 20, 40, 60, 50];

function QuickSort(arr, low, high) {
    if (low <= high) {
        let p = partition(arr, low, high)
        QuickSort(arr, low, p - 1) // left side
        QuickSort(arr, p + 1, high) // right side
    }
    return arr
}

function partition(arr, low, high) {
    let i = low - 1
    let pivot = arr[high]
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]

    return i + 1
}

console.log(QuickSort(arr, 0, arr.length - 1));
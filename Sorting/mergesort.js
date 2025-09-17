let arr = [10, 40, 50, 30, 60, 20]

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}

function merge(left, right) {
    let resultArr = []
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            resultArr.push(left[i])
            i++;
        } else {
            resultArr.push(right[j])
            j++;
        }
    }

    console.log('left :', left);
    console.log('right :', right);

    // remaining element push
    // //--> with concat function
    // return resultArr.concat(left.slice(i), right.slice(j));


    // //--> without concat function
    while (i < left.length) {
        resultArr.push(left[i])
        i++
    }
    while (j < right.length) {
        resultArr.push(right[j])
        j++
    }

    return resultArr
}

console.log(mergeSort(arr));


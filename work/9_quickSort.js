function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex =  Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    const less = [];
    const greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue
        }

        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)]
}

const array =[2, 76, 45, 4, 83, 7, 3, 25];

console.log(quickSort(array))
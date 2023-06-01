const arr = [1,2,3,4,5,6,7,8,9,10]

function binarySearch(array, item) {
    let start = 0;
    let end = array.length - 1;
    let middle;
    let isFound = false;
    let position = -1;

    while (!isFound && start <= end ) {
        middle = Math.floor((start + end) / 2);

        if (array[middle] === item) {
            isFound = true;
            position = middle;
            return position;
        }

        if (array[middle] < item) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return position;
}

console.log(binarySearch(arr, 1))
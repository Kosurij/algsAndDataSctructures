/**
 * Пузырьковая сортировка. Самое большое число "всплывает" в конец массива.
 */

const array = [6,5,3,1,8,7,2,4];

function bubbleSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let k = i + 1; k <= arr.length; k++) {
            if (arr[i] > arr[k]) {
                let tmp = arr[i];

                arr[i] = arr[k];

                arr[k] = tmp;
            }
        }
    }

    return arr;
}

bubbleSort(array);

console.log(array)

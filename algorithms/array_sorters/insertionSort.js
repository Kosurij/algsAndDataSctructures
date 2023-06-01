/**
 * Сортировка вставками.
 *
 * Временная сложность: O(n²) для худшего случая (массива, отсортированного в обратном порядке),
 * а для лучшего случая сложность будет O(n) — достаточно одного прохода, чтобы понять что массив отсортирован.
 *
 * Пространственная сложность: O(n) на сам массив и O(1) на дополнительную переменную с текущим элементом.
 */
const array = [6,5,3,1,8,7,2,4]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let insertionIndex = i;
        const insertionValue = arr[insertionIndex];

        /**
         * Пока индекс вставки больше 0 и пока предыдущее значение меньше текущего
         */
        while (insertionIndex > 0 && arr[insertionIndex - 1] > insertionValue) {
            arr[insertionIndex] = arr[insertionIndex - 1];
            insertionIndex--;
        }

        arr[insertionIndex] = insertionValue;
    }

    return arr;
}

insertionSort(array);

console.log(array);
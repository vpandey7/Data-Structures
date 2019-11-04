const numbers = [54, 63, 21, 1, 55, 63, 0, 283, 4];

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

selectionSort(numbers);
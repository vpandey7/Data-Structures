function mergeSortedArray(array1, array2) {
    var mergedArray = [];
    var array1Item = array1[0];
    var array2Item = array2[0];
    var i = 1;
    var j = 1;

    // check for empty array 1

    if (array1.length === 0) {
        return array2;
    }

    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

console.log(mergeSortedArray([0, 3, 4, 19, 23], [2, 4, 6]));
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

function twoSum(array, sum) {

    var number = [];
    // loop tp check each item in array
    for (var i = 0; i < array.length; i++) {
        // loop to check each other item in array
        for (var j = i + 1; j < array.length; j++) {
            // check if the two items sum is equal to given sum
            if (array[i] + array[j] === sum) {
                // push the indices to the new array as array
                number.push([array[i], array[j]]);
            }
        }
    }
    return number;
}
// this is worst case O(n^2) as we are using 2 loops.
console.log(twoSum([3, 5, 2, -4, 8, 11], 7));
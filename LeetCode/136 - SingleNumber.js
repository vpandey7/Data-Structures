/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
    let containsSet = new Set();
    for (var i = 0; i < nums.length; i++) {
        if (containsSet.has(nums[i])) {
            containsSet.delete(nums[i]);
        } else {
            containsSet.add(nums[i]);
        }
    }

    const myArray = Array.from(containsSet);
    for (var i = 0; i < myArray.length; i++) {
        return myArray[i];
    }
};
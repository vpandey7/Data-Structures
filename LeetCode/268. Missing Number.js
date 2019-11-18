/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    var n = nums.length + 1;
    return (n * (n - 1) / 2) - sum; // sum of n number is n *(n-1 )/2
};
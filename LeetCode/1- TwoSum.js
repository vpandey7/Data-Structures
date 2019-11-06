/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const previousValues = {};

    for (var i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const targetValue = target - currentValue;
        const index2 = previousValues[targetValue];

        if (index2 != null) {
            return [index2, i];
        } else {
            previousValues[currentValue] = i;
        }


    }

};
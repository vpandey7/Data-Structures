var twoSum = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const targetSum = nums[left] + nums[right];
        if (target < targetSum) {
            right--;
        } else if (target > targetSum) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
        //return number;
    }
};

twoSum([2, 7, 11, 15], 9);
var moveZeroes = function (nums) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[index++] = nums[i];
        }
    }
    for (var i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
moveZeroes([0, 1, 0, 3, 12]);
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
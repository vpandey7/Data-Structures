/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    var left = 0;
    var right = nums.length - 1;
    //var mid = Math.floor((left+right)/2);
    console.log(mid);


    while (left <= right) {
        var mid = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        }
    }
    return -1;

};

search([-1, 0, 3, 5, 9, 12], 12);
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    var index = 0;
    if (A.length < 3) return false;
    while (index < A.length && index + 1 < A.length && A[index] < A[index + 1]) {
        index++;
    }
    if (index === 0 || index + 1 >= A.length) {
        return false;
    }
    while (index < A.length && index + 1 < A.length) {
        if (A[index] <= A[index++ + 1]) {
            return false;
        }
    }
    return true;

    
};
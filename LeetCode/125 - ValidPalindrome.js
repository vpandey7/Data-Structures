/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var newString = s.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var leftPointer = 0;
    var rightPointer = newString.length - 1;
    while (leftPointer <= rightPointer) {
        if (newString[leftPointer] != newString[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
};
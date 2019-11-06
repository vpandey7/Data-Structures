/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {

    var i = 1;
    while (i < n) {
        i = i * 2;

    }
    if (i === n) {
        return true;
    } else {
        return false;
    }

};

isPowerOfTwo(18);
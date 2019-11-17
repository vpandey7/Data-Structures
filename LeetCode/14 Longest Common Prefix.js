/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var prefix = "";
    if (strs.length === 0) return prefix;
    for (var i = 0; i < strs[0].length; i++) { // looping through first string
        var character = strs[0][i];
        for (var j = 1; j < strs.length; j++) { // looping through 2nd and subsequent strings
            if (strs[j][i] != character) {
                return prefix;
            }
        }
        prefix = prefix + character;
    }
    return prefix;
};
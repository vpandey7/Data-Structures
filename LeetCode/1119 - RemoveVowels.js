/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
    var vowelSet = new Set(["a", "e", "i", "o", "u"]);
    var string = s.split("");
    var left = 0;
    var right = string.length - 1;

    while (left < right) {
        if (vowelSet.has(string[left])) {
            string[left] = "";
        }
        if (vowelSet.has(string[right])) {
            string[right] = "";
        }
        left++;
        right--;

    }
    return string.join("");
};
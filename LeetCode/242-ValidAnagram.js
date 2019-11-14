/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    var array = new Array(26).fill(0);

    for (var i = 0; i < s.length; i++) {
        var s_index = s[i].charCodeAt(0) - 97;
        var t_index = t[i].charCodeAt(0) - 97;
        array[s_index]++;
        array[t_index]--;
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] !== 0) return false;
    }

    return true;

};
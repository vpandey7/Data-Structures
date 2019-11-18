/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    var map = new Map();
    for (let c of s) {
        if (!map.has(c)) {
            map.set(c, 1);
        } else {
            map.set(c, map.get(c) + 1);
        }
    }
    for (let c of t) {
        if (map.has(c) && map.get(c) === 0 || !map.has(c)) {
            return c;
        } else {
            map.set(c, map.get(c) - 1);
        }
    }
    return null;
};
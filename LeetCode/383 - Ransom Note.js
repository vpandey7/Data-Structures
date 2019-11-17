/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let map = new Map();
    for (let c of magazine) {
        if (!map.has(c)) {
            map.set(c, 1);
        } else {
            map.set(c, map.get(c) + 1);
        }
    }
    for (let c of ransomNote) {
        if (map.has(c) && map.get(c) > 0) {
            map.set(c, map.get(c) - 1);
        } else {
            return false;
        }
    }
    return true;
};
var reverseVowels = function (s) {

    var vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    var string = s.split("");
    var left = 0;
    var right = string.length - 1;
    while (left < right) {
        while (left < right && !vowelSet.has(string[left])) {
            left++;
        }
        while (left < right && !vowelSet.has(string[right])) {
            right--;
        }
        var temp = string[left];
        string[left] = string[right];
        string[right] = temp;
        left++;
        right--;
    }

    return string.join("")
};
function reverseStringRecursive(str) {
    var reverse = [];
    if (str.length === 1) {
        return str;
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}
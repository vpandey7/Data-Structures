function reverse(str) {
  //check input string
  if (!str || str.length < 2) {
    return "not a Valid value";
  }

  var revString = [];
  for (var i = str.length; i >= 0; i--) {
    revString.push(str[i]);
  }
  return revString.join('');
}
var arrayToLowerCase = require("array-to-lower-case");

function surroundSubstring(insertString, aroundString, string){
  aroundString = aroundString.toLowerCase()
  var arr = string.split(" ")

  // Convert array elements to lowercase
  // var tmp = arr.join('~').toLowerCase()
  // var lowerCaseArray = tmp.split('~')
  var lowerCaseArray = arrayToLowerCase(arr)
  var stringIndex = lowerCaseArray.indexOf(aroundString)

  arr.splice(stringIndex, 0, insertString)
  arr.splice((stringIndex + 2), 0, insertString)
  var newString = arr.join(" ")
  return newString
}

module.exports = surroundSubstring;

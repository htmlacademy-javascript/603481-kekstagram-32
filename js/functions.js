const checkStringLength = function (string, stringLength) {
  return string.length <= stringLength
}

console.log(checkStringLength('Hello, World!', 14));
console.log(checkStringLength('Hello', 4));

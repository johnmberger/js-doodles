var findLargestProductOfFive = function(num) {
  var digits = num.toString().split('');
  if (digits.length < 5) {
    return 'Please enter a longer number';
  }
  var largest = 0;
  for (var i = 0; i < digits.length; i++) {
    var product = (digits[i] * digits[i+1] * digits[i+2] * digits[i+3] * digits[i+4]);
    if (product > largest) {
      largest = product;
    }
  }
  return largest;
}

console.log(findLargestProductOfFive(127289373913828309127381263));

module.exports = findLargestProductOfFive;

var findLargestProductOfFive = require('./product-of-five');

describe('findLargestProductOfFive()', function() {

  it('finds largest product of a given number', function() {
    expect(findLargestProductOfFive(111333321)).toEqual(162);
  });

  it('deals with numbers with multiple highest products of five', function() {
    expect(findLargestProductOfFive(1111111111)).toEqual(1);
  });

  it('returns an error message when input number is less than five digits long', function() {
    expect(findLargestProductOfFive(1234)).toEqual('Please enter a longer number');
  });

});

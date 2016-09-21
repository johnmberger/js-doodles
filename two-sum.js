function twoSum(arr, num) {
  let results = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        results.push([i, j]);
      }
    }
  }
  if (results.length) {
    return results;
  } else {
    return 'no results found';
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 5));

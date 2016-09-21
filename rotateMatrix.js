function rotateMatrix(matrix) {

  var rotated = [];
  matrix.forEach((item) => {
    rotated.unshift(item);
  });

  var result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    result[j] = [];
  };
  
  rotated.forEach((item) => {
    item.forEach((set, index) => {
      result[index].push(item[index]);
    });
  });

  console.log(result);
}

var test = [ [29, 62, 8], [12, 60, 31], [99, 79, 12] ];
var test2 = [[44,23], [21, 10], [9,28], [85,16], [33,18]];

// test result = [ [99, 12, 29], [79, 60, 62], [12, 31, 8] ];
// test2 result = [ [ 33, 85, 9, 21, 44 ], [ 18, 16, 28, 10, 23 ] ];

rotateMatrix(test);
rotateMatrix(test2);

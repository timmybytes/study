/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  let bigArr = [];
  for (let i = 0; i < arr.length; i++) {
    var num = arr[i][0];
    for (let t = 0; t < arr[i].length; t++) {
      if (arr[i][t] > num) {
        num = arr[i][t];
      }
      bigArr[i] = num;
    }
  }
  // console.log(bigArr);
  return bigArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
  let word = 0;
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > word) {
      word = arr[i].length;
    }
  }
  return word;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

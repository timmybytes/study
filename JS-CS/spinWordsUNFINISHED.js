/**
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

    Strings passed in will consist of only letters and spaces.
    Spaces will be included only when more than one word is present.

Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
spinWords("This is a test") => "This is a test"
spinWords("This is another test") => "This is rehtona test"

*/

function spinWords(str) {
  // check if str is one word -> return
  // split str words
  // test each word in str for length
  // if word.length > 5, reverse word
  // join words back together with whitespace delimiter
  // return str

  if (str.length <= 1) {
    return str;
  }

  let arr = str.split(' ');

  for (let word in arr) {
    if (arr[word].length >= 5) {
      let replaceText = arr[word].split('').reverse().join('');
      console.log({ replaceText });
      arr.splice(arr.indexOf(word), 1, replaceText);
    }
  }
  return arr.join(' ');
}

console.log(spinWords('tester tester'));

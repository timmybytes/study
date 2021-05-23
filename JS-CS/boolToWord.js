function boolToWord(bool) {
  // if (bool) {
  //   return 'yes';
  // }
  // return 'no';

  return bool ? 'yes' : 'no';
}

console.log(boolToWord(true));
console.log(boolToWord(false));
console.log(boolToWord(0));
console.log(boolToWord(1));
console.log(boolToWord(''));
console.log(boolToWord('a'));
console.log(boolToWord(null));
console.log(boolToWord(undefined));
console.log(boolToWord({}));

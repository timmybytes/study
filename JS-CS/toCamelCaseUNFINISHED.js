/**
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/
function toCamelCase(str) {
  if (str.length <= 1) {
    return str;
  }

  // console.log(str.split('-' || '_').map(s => s));
  return str
    .split('-' || '_')
    .map(s => s.trim())
    .map(s => s[0].toUpperCase() + s.substring(1))
    .join('');
}

console.log(toCamelCase('ob-ject-i-fied'));
console.log(toCamelCase('ob-ject-i-____fied'));
console.log(toCamelCase('the-stealth-warrior'));

import { Bear } from './bear.model.js';
let example1 = true; // OR 35, etc.
let example2 = 35;
let example3 = 'Hello World';
let example5;
example5 = 123;
example5 = 'string';
const bear = new Bear(3);
if (bear instanceof Bear) {
  console.log('Bear!');
}
const notAString = 'string';
console.log(notAString.length); // Could create errors; better to either explicitly set type as 'string', or *cast* the string when calling it:
console.log(notAString.length);
// OR
console.log(notAString.length);
const arr = ['an', 'array', 'of', 'strings'];
const arr1 = [1, 2, 3];

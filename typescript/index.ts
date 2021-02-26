import { Bear } from './bear.model';

let example1: boolean | number = true; // OR 35, etc.

let example2: number = 35;

let example3: string = 'Hello World';

let example5: any;

example5 = 123;
example5 = 'string';


const bear = new Bear(3);

if (bear instanceof Bear) {
  console.log('Bear!')
}

const notAString: any = 'string';

console.log(notAString.length) // Could create errors; better to either explicitly set type as 'string', or *cast* the string when calling it:
console.log((notAString as string).length)
// OR
console.log((<string> notAString).length)

const arr: string[] = ['an', 'array', 'of', 'strings']
const arr1: number[] = [1, 2, 3]

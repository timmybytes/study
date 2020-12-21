import { obj1, Car } from './objects.mjs';
import { getLast, quickSort } from './algorithms.mjs';

const newCar = new Car('Honda', 'Accord', 1992);
// console.log(newCar);
// console.log(getLast([2, 3, 1]));

const list = ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r'];
const list2 = ['one', 'seven', 'alpha'];
// console.log(quickSort(list));
console.log(quickSort(list2));

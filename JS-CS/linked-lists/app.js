import { LinkedList } from './LinkedList.js';

const ll = new LinkedList.fromValues(10, 20, 30, 40);
ll.print();
console.log(ll.getByIndex(0).value);

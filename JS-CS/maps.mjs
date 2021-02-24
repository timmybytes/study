// MAPS

// Keys can be functions, objects, or primitives
const map = new Map();
const myFunction = () => console.log('I am a useful function.');
const myNumber = 666;
const myObject = {
  name: 'plainObjectValue',
  otherKey: 'otherValue',
};
map.set(myFunction, 'function as a key');
map.set(myNumber, 'number as a key');
map.set(myObject, 'object as a key');

console.log(map.get(myFunction)); // function as a key
console.log(map.get(myNumber)); // number as a key
console.log(map.get(myObject)); // object as a key

// Maps have built-in size methods
const map = new Map();
map.set('someKey1', 1);
map.set('someKey2', 1);
// ...
map.set('someKey100', 1);

console.log(map.size); // 100, Runtime: O(1)

// Maps can be directly iterated
const map = new Map();
map.set('someKey1', 1);
map.set('someKey2', 2);
map.set('someKey3', 3);

for (let [key, value] of map) {
  console.log(`${key} = ${value}`);
}
// someKey1 = 1
// someKey2 = 2
// someKey3 = 3

const plainObjMap = {};
plainObjMap['someKey1'] = 1;
plainObjMap['someKey2'] = 2;
plainObjMap['someKey3'] = 3;

for (let key of Object.keys(plainObjMap)) {
  const value = plainObjMap[key];
  console.log(`${key} = ${value}`);
}
// someKey1 = 1
// someKey2 = 2
// someKey3 = 3

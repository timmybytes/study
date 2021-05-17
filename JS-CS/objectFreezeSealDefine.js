// Prevent user from adding new Object properties

let profile = {
  name: 'Bob',
};

// Prevent modifying existing properties, AND prevent adding new properties, "freezing" the Object
// Object.freeze(profile);
// profile.name = 'Alice';

// TypeError: Cannot assign to read only property 'name' of object '#<Object>'
// console.log(profile.name);

// Prevents adding/removing new properties, but allows modifying existing properties
// Object.seal(profile);

// profile.name = 'Alice';

// console.log(profile.name); // Alice

// profile.age = 3;

// TypeError: Cannot add property age, object is not extensible
// console.log(profile.age);

// To create selectively modifiable properties, use Object.define
Object.defineProperty(profile, 'age', {
  value: 35,
  writable: false,
});

// TypeError: Cannot assign to read only property 'age' of object '#<Object>'
profile.age = 10;

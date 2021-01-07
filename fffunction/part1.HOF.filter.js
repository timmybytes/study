// Higher Order Functions (HOF)
// ---------------------------
// Functions are values, can be passed as values

// const triple = x => {
//   return x * 3;
// };

// const waffle = triple;

// console.log(waffle(3)); // 9

/* Filter */
// ---------------------------
let animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' },
]

// Filter with for loop
// let dogs = [];
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === 'dog') {
//     dogs.push(animals[i])
//   }
// }

// Filter with filter HOF

let isDog = function (animal) {
  return animal.species === 'dog';
}
let dogs = animals.filter(isDog)
console.log(dogs)

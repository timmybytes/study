/* Map */
// ---------------------------

let animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
];

// With for loop
// let names = [];
// for (let i = 0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }

// With .map()
let names = animals.map(
  (animal, idx) => `${idx}: ${animal.name} is a ${animal.species}`
);

console.log(names);

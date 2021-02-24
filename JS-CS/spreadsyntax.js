// Objects

const pikachu = { name: 'Pikachu 🐹' };
const stats = { hp: 40, attack: 60, defense: 45 };

('Bad Object Code 💩');
// Aside from being messy, also mutates original object
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

// OR

const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu);

console.log(lvl0);
console.log(lvl1);

('Good Object Code ✅');

const lvl2 = { ...pikachu, ...stats };
console.log(lvl2);

fetch('url').then(res =>
  res.json().then(data => {
    // Do something with the data
    // e.g., setState(data)
    console.log(data);
  })
);

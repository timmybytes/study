const horse = {
  age: 7,
};

// Advanced Tag Example
function horseAge(str, age) {
  const ageStr = age > 5 ? 'old' : 'young';
  return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`; // accepts initial string(s) as first argument, parses second argument via template literal

console.log(bio2);
// This horse is old at 7 years

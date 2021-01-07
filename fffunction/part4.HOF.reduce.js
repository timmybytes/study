/* Adv. Reduce */
// ---------------------------
import fs from 'fs';

const output = fs
  .readFileSync('part4.data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split(','))
  .reduce((customers, line) => {
    customers[line[0]] = [];
    customers[line[0]].push({ name: line[1], price: line[2], quantity: line[3] });
    return customers;
  }, {});

console.log('output', JSON.stringify(output, null, 2));

/*
border: #a7c080
background: #2a2426

Activity Bar
border: #323d43 */

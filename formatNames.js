/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/
function list(names) {
  let sorted = names.map(name => name.name);
  if (sorted.length > 1) {
    let last = sorted.pop();
    last = `& ${last}`;
    sorted.filter(name => {
      name !== sorted[sorted.length - 1];
    });
    console.log(sorted.push(last));
  }
}

list([
  { name: 'Bart' },
  { name: 'Lisa' },
  { name: 'Maggie' },
  { name: 'Homer' },
  { name: 'Marge' },
]);

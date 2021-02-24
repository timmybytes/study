// Console Log tips for browser console

// CSS with %c: console.log('%cText', 'CSS rules')
console.log('%csomethingGreen', 'color: green');
console.log(
  '%ctimmybytes',
  "color:#444444; font-family:'HK Grotesk';font-weight:900; font-size:48px; background:#ee6868; padding: 50px; text-shadow: 2px 2px 0px #fefefe; display: block"
);

// 'Destructuring' for variable name
const thing = 'Some string';
console.log({ thing });
const thing2 = 'more strings';
const thing3 = 'more strings';
const thing4 = 'more strings';

console.log({ thing, thing2, thing3, thing4 });

// Display an array as a table
console.table([thing, thing2, thing3]);
// ┌─────────┬────────────────┐
// │ (index) │     Values     │
// ├─────────┼────────────────┤
// │    0    │ 'Some string'  │
// │    1    │ 'more strings' │
// │    2    │ 'more strings' │
// └─────────┴────────────────┘

const obj1 = {
  prop: 'value',
  otherProp: 'more value',
};
const obj2 = {
  prop: 'slightly different value',
  otherProp: 'less value',
};
const obj3 = {
  prop: 'better value',
  otherProp: 'value',
};

// Shared properties grouped together in table
console.table([obj1, obj2, obj3]);
// ┌─────────┬────────────────────────────┬──────────────┐
// │ (index) │            prop            │  otherProp   │
// ├─────────┼────────────────────────────┼──────────────┤
// │    0    │          'value'           │ 'more value' │
// │    1    │ 'slightly different value' │ 'less value' │
// │    2    │       'better value'       │   'value'    │
// └─────────┴────────────────────────────┴──────────────┘

// Benchmarking time
console.time('looper');
let i = 0;
while (i < 1000000) {
  i++;
}
console.timeEnd('looper'); // looper: 2.942ms

//

const checkObj = RequiredObj => {
  return RequiredObj;
};
let trialRun = checkObj({ name: 'name', age: 10 });
let { name, age } = trialRun;
console.log(name, age);

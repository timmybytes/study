var checkObj = function (RequiredObj) {
    return RequiredObj;
};
var trialRun = checkObj({ name: 'name', age: 10 });
var name = trialRun.name, age = trialRun.age;
console.log(name, age);

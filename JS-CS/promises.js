/**
A Promise is simply an object in JavaScript

A promise is always in one of three states:
1. pending: which is the initial state, neither fulfilled nor rejected
2. fulfilled: operation completed successfully
3. rejected: operation has failed

Promises help us deal with asyncronous code in a far more simple way than compared to callbacks
*/

/**
1. Promise
2. Promise value
3. Fulfill promise
4. Reject promise
5. Success callback
6. Failure callback
*/

// How to create a Promise?

// const promise = new Promise()

// How to fulfill or reject a Promise?

const promise = new Promise((resolve, reject) => {
  // Changes the status from 'pending' to 'fulfilled'
  resolve();
});

const promise = new Promise((resolve, reject) => {
  // Changes the status from 'pending' to 'rejected'
  reject();
});

// You cannot directly mutate a Promise's status, must be done via reject/resolve, typically after an asyncronous operation

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Food truck found
    // Change status from 'pending' to 'fulfilled'
    resolve();
  }, 5000);
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Food truck not found
    // Change status from 'pending' to 'rejected'
    reject();
  }, 5000);
});

// How to execute callback functions based on whether the Promise is fulfilled or rejects?

// Success and failure callbacks
const onFulfillment = () => {
  // resolve was called
  console.log('Set up the table and eat tacos');
};

const onRejection = () => {
  // reject was called
  console.log('Start cooking pasta');
};

// `new Promise` gives access to `then()` and `catch()`, e.g.

promise.then(); // function passed to `then()` executes when Promise status changes from pending to fulfilled
promise.catch(); // function passed to `then()` executes when Promise status changes from pending to rejected

promise.then(onFulfillment);
promise.catch(onRejection);
// `onFulfillment` and `onRejection` are callback functions because they are fuctions passed to other functions as arguments

// -------------------------------------------------------------------------------

// Resolve scenario
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Food truck found
    // Change status from 'pending' to 'fulfilled'
    resolve('Bringing tacos'); // Automatically injected into `onFulfillment` callback
  }, 5000);
});

// Reject scenario
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Food truck not found
    // Change status from 'pending' to 'rejected'
    reject('Not bringing tacos. Food truck not there.'); // Automatically injected into `onRejection` callback
  }, 5000);
});

const onFulfillment = result => {
  // resolve was called
  console.log(result);
  console.log('Set up the table and eat tacos');
};

const onRejection = error => {
  // reject was called
  console.log(error);
  console.log('Start cooking pasta');
};

promise.then(onFulfillment);
promise.catch(onRejection);

// 'Bringing tacos'
// 'Set up the table to eat tacos'
// -------------------------------
// 'Not bringing tacos. Food truck not there.'
// 'Start cooking pasta'

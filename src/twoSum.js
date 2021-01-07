/*
Leetcode #1 - Easy
------------------------------------------------------------------------
Given an array of **integers** nums and an **integer** target, return **indices** of the two numbers such that they add up to target.

You may assume that **each input would have exactly one solution**, and you **may not use the same element twice**.

You can return the answer in any order.

Ex:
Input
---------------------
nums = [2,7,11,15]
target = 9

Output
---------------------
[0,1]
*/

// Solutions
// ------------------------------------------
// 1. Brute forcing

// Community solution
const twoSum = (nums, target) => {
  if (nums.length == 2) {
    return [0, 1];
  }
  let length = nums.length;
  let map = {};
  for (let i = 0; i < length; i++) {
    let n = target - nums[i];
    let find = map[n];
    if (find !== undefined) {
      return [find, i];
    } else map[nums[i]] = i;
  }
};

const twoSum = (nums, target) => {
  let storage = {};

  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

// Example
// [2, 7, 11, 11]
// index = 0
// num = 2

// First iteration
// storage = {
// '7': 0,
// }

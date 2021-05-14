/**
 26. Remove Duplicates from Sorted Array
Easy

Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

---
Tutorial: https://www.youtube.com/watch?v=rlfsnRY0S9k

For clarity, should be thought of as 'SORT and COUNT non-duplicates of array', since the duplicates don't necessarily need to be removed from the final array.

Ex:

nums = [1,1,3,4,5,5,5,7,0]

return
nums = [0,1,3,4,5...]
count = 5

For solution, use two pointers to compare array indexes
*/

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  // Create first pointer
  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    // Compare two elements referenced by the pointers
    if (nums[pointer1] !== nums[pointer2]) {
      pointer1++;
      nums[pointer1] = nums[pointer2];
    }
  }

  // Last unique index + 1 = number of unique elements in array
  return pointer1 + 1;
};

// console.log(removeDuplicates([0, 2, 1, 4, 4, 4, 6])); // 5

/*
Leetcode #7 - Reverse Integer - Easy
------------------------------------------------------------------------
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Example 1:
  Input: x = 123
  Output: 321

Example 2:
  Input: x = -123
  Output: -321

Example 3:
  Input: x = 120
  Output: 21

Example 4:
  Input: x = 0
  Output: 0
*/

/*
const reverse = x => {
  console.log(x < 2147483647);
  if (Math.abs(x) > -2147483648 && Math.abs(x) < 2147483647) {
    let rev = x.toString().split('');
    if (rev[0] === '-') {
      rev.shift();
      rev.reverse().unshift('-');
      console.log(rev.reverse().unshift('-'));
      return rev.join('');
    }
    console.log(rev.reverse().join(''));
    return rev.reverse().join('');
  }
  console.log(0);
  return 0;
};
reverse(1534236469); // 9646324351
*/

// Solution from Discussion
var reverse = function (x) {
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  console.log(reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0);
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
};

reverse(1534236469); // 0

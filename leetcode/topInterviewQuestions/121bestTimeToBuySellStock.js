/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Ex:
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
---
To clarify, stock cannot be sold before it is first purchased, i.e., once a buy price (index) is found to be the lowest option, the stock could only be sold on a date (index) that occurs in the future.
*/

var maxProfit = function (prices) {
  // Example prices = [7,1,5,3,6,4]
  let minBuyPrice = Infinity; // to guarantee when we reach first price it is definitely lower than variable
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minBuyPrice) {
      minBuyPrice = price;
    } else if (price - minBuyPrice > maxProfit) {
      maxProfit = price - minBuyPrice;
    }
  }

  return maxProfit;
};

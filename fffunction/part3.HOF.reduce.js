/* Reduce */
// ---------------------------

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
]

// With for loop
// let totalAmount = 0;
// for (let i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount;
// }

// With reduce
let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount)

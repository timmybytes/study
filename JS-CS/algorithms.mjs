// O(1) - Constant Time Algorithm
const getLast = props => props[props.length - 1];

// O(n log n) - Logarithmic-Time Algorithm
const quickSort = list => {
  if (list.length < 2) return list;

  let pivot = list[0];
  let left = [];
  let right = [];
  console.log(`List: ${list}`);
  for (let i = 1, total = list.length; i < total; i++) {
    console.log(`Left: ${left}`);
    console.log(`Right: ${right}`);
    console.log(`Pivot: ${pivot}`);
    if (list[i] < pivot) left.push(list[i]);
    else right.push(list[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

export { getLast, quickSort };

console.log(Math.max()); // -Infinity

// Why?
// Math.max() compares inputs against -Infinity, e.g.:
console.log(Math.max(1)); // 1 > -Infinity

// With no inputs given, defaults to -Infinity

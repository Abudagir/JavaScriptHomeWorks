function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }
  let positive = 0;
  let sum = 0;
  for (let i of input)
    if (i > 0) {
      positive++;
    } else if (i < 0) {
      sum += i;
    }
  return [positive, sum];
}

console.log(countPositivesSumNegatives([1, 55, 4, -5, 55, -88, 77]));
console.log(countPositivesSumNegatives([]));

// 2
const countPositivesSumNegatives2 = (array) => {
  return !array || !array.length
    ? []
    : [
        array.filter((num) => num > 0).length,
        array.filter((num) => num < 0).reduce((a, b) => a + b),
      ];
};
console.log(countPositivesSumNegatives2([1, 55, 4, -5, 55, -88, 77]));
console.log(countPositivesSumNegatives2([]));

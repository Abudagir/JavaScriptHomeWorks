//1
const findAverage = (array) => {
  if (array.length === 0) {
    return 0;
  }
  const result = array.reduce((acc, item) => acc + item, 0);
  const average = result / array.length;
  return average;
};

findAverage([]);

//2
const findAverage2 = (array) => {
  return array.reduce((acc, item) => acc + item, 0) / (array.length || 1);
};
findAverage2([5, 5, 77, 2]);

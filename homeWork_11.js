// 1
const lineNumbering = (array) => {
  const result = [];
  array.forEach((item, index) => {
    result.push(`${index + 1}: ${item}`);
  });
  return result;
};

console.log(lineNumbering([]));
console.log(lineNumbering(["hello", "world", "JS"]));

// 2
const lineNumbering2 = (array) => {
  return array.map((item, index) => `${index + 1}: ${item}`);
};

console.log(lineNumbering2([]));
console.log(lineNumbering2(["a", "s", "d", "wer", "r"]));

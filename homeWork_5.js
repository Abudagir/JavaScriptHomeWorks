// const str = prompt("Довільний рядок:");
// const spam = "free";
// console.log(str.toLowerCase().includes(spam));

const stringChecker = function (s, p1, p2) {
  const remainingLetters1 = p1.split("");
  const remainingLetters2 = p2.split("");
  let countLetters1 = 0;
  let countLetters2 = 0;

  for (let letter of s) {
    if (letter === " ") {
      continue;
    }

    const indexInLetters1 = remainingLetters1.indexOf(letter);
    const indexInLetters2 = remainingLetters2.indexOf(letter);

    if (indexInLetters1 !== -1) {
      remainingLetters1.splice(indexInLetters1, 1);
      countLetters1++;
    } else if (indexInLetters2 !== -1) {
      remainingLetters2.splice(indexInLetters2, 1);
      countLetters2++;
    } else {
      return false;
    }
  }
  if (countLetters1 + countLetters2 !== s.replace(/ /g, "").length) {
    return false;
  }

  return true;
};

const a1 = stringChecker("WAgqppbYynO0xHk04RJs", "WAgqppbYyn", "O0xHk04RJs");
// const a2 = buildWord("pIL3cpy9U039Sp7TWYd", "1C23W48g93", "OSPr0ScvOj");
// const a3 = buildWord("Hello World!", "Worllldne!", "Hoed");

console.log(a1);
// console.log(a2);
// console.log(a3);

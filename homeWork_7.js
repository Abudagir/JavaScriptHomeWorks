// 1
const maxNumber = (a, b, ...rest) => console.log(Math.max(a, b, ...rest));

maxNumber(15, 10, 1, 5000, 600);

//2
const checkAge = (age) => console.log(age >= 18);

checkAge(17);

//3
const truncationString = (userText, maxLength) =>
  console.log(
    userText.length <= maxLength
      ? userText
      : userText.substring(0, maxLength) + "..."
  );

truncationString("Hello World", 7);

//4
const checkWord = (str, word) =>
  console.log(str.toLowerCase().includes(word.toLowerCase()));

checkWord("Hello World", "worLd");

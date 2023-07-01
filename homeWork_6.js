// 1
function maxNumber(a, b, ...rest) {
  console.log(Math.max(a, b, ...rest));
}

maxNumber(15, 10, 1, 50, 600);

//2

function checkAge(age) {
  console.log(age >= 18);
}

checkAge(17);

//3

function truncationString(userText, maxLength) {
  if (userText.length <= maxLength) {
    console.log(userText);
  } else {
    console.log(userText.substring(0, maxLength) + "...");
  }
}

truncationString("Hello World", 7);

//4

function checkWord(str, word) {
  let findWord = word.toLowerCase();
  console.log(str.toLowerCase().includes(findWord));
}

checkWord("Hello World", "worLd");

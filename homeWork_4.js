const userText = prompt("Довільний рядок:");
const textLength = prompt("Максимальна довжина рядка:");
const maxLength = parseFloat(textLength);

if (userText.length <= maxLength) {
  console.log(userText);
} else {
  console.log(userText.substring(0, maxLength) + "...");
}

const input = prompt("Введіть число між 0 та 3", "");
const number = input === null ? NaN : +input;

switch (true) {
  case input === null:
    alert("Скасовано");
    break;
  case input.trim() === "":
    alert("Ви не ввели число");
    break;
  case isNaN(number):
    alert("Ви ввели недійсне число");
    break;
  case number === 0:
    alert("Ви ввели число 0");
    break;
  case number === 1:
    alert("Ви ввели число 1");
    break;
  case number === 2 || number === 3:
    alert("Ви ввели число 2, а може й 3");
    break;
  default:
    alert("Ви ввели недійсне число");
    break;
}

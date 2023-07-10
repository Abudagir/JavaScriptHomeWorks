// 1
console.log("Завдання 1");
const myArray = [7, 2, 10, 15, 50, 77, 3];
myArray.forEach((element) => console.log(element));

console.log("Перевірка які елементи > 10");

myArray.forEach((element) => {
  if (element > 10) {
    console.log(element);
  }
});

// 2
console.log("Завдання 2");
const findItem = (array, item) => {
  console.log(array.includes(item));
};

findItem(myArray, 10);

// 3
console.log("Завдання 3");

const users = ["user", "user1", "user10", "user100", "user1000"];

const firstUser = users.find((user) => user.length > 4);

console.log(firstUser);

// 4
console.log("Завдання 4");
const filterUser = users.filter((user) => user.length > 4);
console.log(filterUser);

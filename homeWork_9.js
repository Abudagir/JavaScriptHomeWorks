const users = ["user1", "user2", "user3", "user4", "user5", "user6"];

//1
const result = users.every((item) => item.length > 4);
console.log(result);

//2
const result2 = users.some((item) => item.length > 4);
console.log(result2);

//3
const result3 = users.map((item) => item.toUpperCase());
console.log(result3);

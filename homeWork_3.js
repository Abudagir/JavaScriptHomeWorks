//1 варіант
let price = "$120";
console.log(price.slice(1));

//2 варіант, замість console буде return
function getPrice(price1) {
  console.log(price1.slice(1));
}

getPrice("$900");

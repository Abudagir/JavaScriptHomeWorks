const value = document.querySelector("#value");
const container = document.querySelector(".button-container");
let count = 0;

const handleContainerClick = (e) => {
  const eventName = e.target.dataset.action;
  switch (eventName) {
    case "decrease":
      count -= 1;
      break;
    case "increase":
      count += 1;
      break;
    case "reset":
      count = 0;
      break;
    default:
      return;
  }
  value.innerHTML = count;
};

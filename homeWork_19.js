async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

const url = "https://jsonplaceholder.typicode.com/posts";

getData(url).then((res) => console.log(res));

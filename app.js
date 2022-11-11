const img = document.querySelector("img");
const btn = document.querySelector("button");
const id = document.getElementById("id");
const link = document.getElementById("link");
let data;

const fetchData = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?");
  const json = await response.json();
  data = await json;
  loadImg(data);
  console.log(data);
  console.log(data[0].url);
};

window.onload = fetchData();

const loadImg = (data) => {
  id.innerText = `ID: ${data[0].id}`
  link.innerText = `Image Url:${data[0].url}`;
  img.src = data[0].url;
};

btn.addEventListener("click", () => {
  fetchData();
});

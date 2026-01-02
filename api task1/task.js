const grid = document.getElementById("grid");
const loader = document.getElementById("loader");
const observerTarget = document.getElementById("observer");

let page = 1;
let isLoading = false;
const limit = 6;

async function loadData() {
  if (isLoading) return;
  isLoading = true;
  loader.style.display = "block";

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  const data = await res.json();

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.title.slice(0, 15)}</h3>
      <p>${item.body.slice(0, 70)}...</p>
    `;
    grid.appendChild(card);
  });

  page++;
  loader.style.display = "none";
  isLoading = false;
}

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadData();
    }
  },
  { threshold: 1 }
);

observer.observe(observerTarget);
loadData();

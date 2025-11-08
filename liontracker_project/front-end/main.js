const lionList = document.getElementById("lionList");
const lionForm = document.getElementById("lionForm");

const API_URL = "http://localhost:8080/lions";

async function fetchLions() {
  try {
    const response = await fetch(API_URL);
    const lions = await response.json();

    lionList.innerHTML = "";

    lions.forEach(lion => {
      const card = document.createElement("div");
      card.className = "lion-card";
      card.innerHTML = `
        <img src="${lion.photo}" alt="${lion.name}">
        <h3>${lion.name}</h3>
        <p>Age: ${lion.age}</p>
      `;
      lionList.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching lions:", err);
  }
}

lionForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const photo = document.getElementById("photo").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age, photo })
  });

  lionForm.reset();
  fetchLions();
});

fetchLions();

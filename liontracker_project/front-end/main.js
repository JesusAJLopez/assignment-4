const API_URL = "http://localhost:8080/animals"; 
async function fetchAnimals(){
  const response = await fetch(API_URL);
  const animals = await response.json();
  const container = document.getElementById('animalList');
  container.innerHTML = '';
  animals.forEach(a => {
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.innerHTML = `
      <img src="${a.photo}" alt="${a.name}">
      <h3>${a.name}</h3>
      <p>Age: ${a.age}</p>
      <a href="details.html?id=${a.id}">View Details</a>
      <a href="form.html?id=${a.id}">Edit</a>
    `;
    container.appendChild(card);
  });
}

async function fetchAnimalDetails(id){
  const response = await fetch(`${API_URL}/${id}`);
  const a = await response.json();
  const section = document.getElementById('animalDetails');
  section.innerHTML = `
    <h2>${a.name}</h2>
    <img src="${a.photo}" alt="${a.name}" style="width:300px">
    <p><strong>Age:</strong> ${a.age}</p>
    <p><strong>Description:</strong> ${a.description}</p>
    <a href="form.html?id=${a.id}">Edit Animal</a>
  `;
}

async function loadAnimalForEdit(id){
  const response = await fetch(`${API_URL}/${id}`);
  const a = await response.json();
  document.getElementById('name').value = a.name;
  document.getElementById('age').value = a.age;
  document.getElementById('photo').value = a.photo;
  document.getElementById('description').value = a.description;
}

async function saveAnimal(id){
  const data = {
    name: document.getElementById('name').value,
    age: parseInt(document.getElementById('age').value),
    photo: document.getElementById('photo').value,
    description: document.getElementById('description').value
  };

  if(id){
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    });
  } else {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    });
  }
  window.location.href = 'index.html';
}

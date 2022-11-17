const form = document.querySelector("form");
const input = document.querySelector("input");
const h3 = document.querySelector("h3");
const img = document.querySelector("img");
const api = "https://pokeapi.co/api/v2/";

const fetchPokemon = async () => {
  const response = await fetch(api + "pokemon/" + input.value);
  const data = await response.json();
  h3.textContent = data.name;
  img.src = data.sprites.front_female;
  img.alt = `Static sprite from Pokemon games for ${data.name}`;
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await fetchPokemon();
  console.log("steve");
});

const obj = {
  name: "Andy B",
  age: 34,
  pet: "Link",
};

let gary = "name";

console.log(obj.name);
console.log(obj["name"]);
console.log(obj[gary]);

for (let key in obj) {
  if (key === "name") {
    delete obj[key];
  }
}

console.log(Object.keys(obj));
console.log(Object.values(obj));

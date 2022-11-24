let pokemons = [
  {
    id: 1,
    name: "charmander",
    type: "fire",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 2,
    name: "squirtle",
    type: "water",
    base_damage: 9,
    base_hp: 14,
    speed: 26,
  },
  {
    id: 3,
    name: "bulbasaur",
    type: "leaf",
    base_damage: 8,
    base_hp: 16,
    speed: 26,
  },
  {
    id: 4,
    name: "pikachu",
    type: "electric",
    base_damage: 12,
    base_hp: 8,
    speed: 32,
  },
  {
    id: 5,
    name: "pidgey",
    type: "air",
    base_damage: 10,
    base_hp: 10,
    speed: 35,
  },
  {
    id: 6,
    name: "goldeen",
    type: "water",
    base_damage: 9,
    base_hp: 12,
    speed: 32,
  },
  {
    id: 7,
    name: "bellsprout",
    type: "leaf",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 8,
    name: "magnemite",
    type: "electric",
    base_damage: 9,
    base_hp: 14,
    speed: 30,
  },
  {
    id: 9,
    name: "ponyta",
    type: "fire",
    base_damage: 12,
    base_hp: 18,
    speed: 36,
  },
  {
    id: 10,
    name: "evee",
    type: "normal",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
];

//1. Ordernar los pokemons por base_damage de menor a mayor.

function comparar(a, b) {
  return a.base_damage - b.base_damage;
}

// pokemons.sort(comparar);

// console.log(pokemons);

//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento
// que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

function sortPokemos(argument) {
  let validarInput = ["id", "name", "type", "base_damage", "base_hp", "speed"];

  if (validarInput.includes(argument)) {
    let result =
      argument === "type" || argument === "name"
        ? pokemons.sort((a, b) => a[argument].localeCompare(b[argument]))
        : pokemons.sort((a, b) => a[argument] - b[argument]);

    console.log(result);
  } else {
    console.log("Debes ingresar un argumento válido");
  }
}

// sortPokemos("base_damage");

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados.
//  La funcion debe aceptar un argumento para filtrar por type de pokemon.

function filtrarPokemos(argument) {
  let filteredPokemons = pokemons.filter(
    (pokemon) => pokemon.type === argument
  );
  console.log(filteredPokemons);
}

// filtrarPokemos("electric");

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos:
//  id: number, name: string, created_date: string, y pokemon: array of objects.

let pokemonMaster = {
  id: 1,
  name: "Mar",
  created_date: "20-07-2021 10:00",
  pokemon: [],
};

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al
//  atributo pokemon de Pokemon Master.

function getRandomInt(length) {
  return Math.floor(Math.random() * length);
}

let indice = getRandomInt(pokemons.length);
// console.log(indice);

function aleatoriaPokemon(pokemon) {
  pokemonMaster.pokemon.push(pokemon);
}

// aleatoriaPokemon(pokemons[indice]);
// console.log(pokemonMaster);

//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage
//  y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe
// ser un numero entero aleatorio entre 3 y 5

function agregarAtribu() {
  for (let i = 0; i < pokemons.length; i++) {
    let min_damage = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    let max_damage = Math.floor(Math.random() * (5 - 3 + 1) + 3);

    pokemons[i].min_damage = min_damage;
    pokemons[i].max_damage = max_damage;
  }

  // const nuevoarr = pokemons.map((pokemon) => {
  //   let min_damage = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  //   let max_damage = Math.floor(Math.random() * (5 - 3 + 1) + 3);

  //   return {
  //     ...pokemon,
  //     min_damage: min_damage,
  //     max_damage: max_damage,
  //   };
  // });

  // pokemons = nuevoarr;
  // console.log(nuevoarr);
}

// agregarAtribu();
// console.log(pokemons);

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

function setDamage(indice) {
  let seletedPokemon = pokemons[indice];
  let totalDamage =
    seletedPokemon.base_damage +
    Math.floor(
      Math.random() *
        (seletedPokemon.max_damage - 1 + seletedPokemon.min_damage)
    );

  // console.log(totalDamage);
}

// 8. Nuestro Pokemon Master quiere estar preparado para pelear,
// para ello necesita que lo apoyes a ordenar sus pokemons.
// El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage
// sea el que este primero en la lista y asi sucesivamente.

// pokemons.sort((a, b) => {
//   const x = b.base_damage + b.max_damage;
//   const y = a.base_damage + a.max_damage;
//   return x - y;
// });

console.log(pokemons);

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML

const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.textContent = "Pokemons";
h1.style.color = "#3DC6BB";
h1.style.textAlign = "center";
root.appendChild(h1);

const ul = document.createElement("ul");
root.append(ul);

pokemons.forEach((pokemon) => {
  const li = document.createElement("li");
  li.textContent = pokemon.name;
  // li.addEventListener("click", () => setDamage(1));
  ul.append(li);
});

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas:
//  id, name, type, base_damage, base_hp, speed

let tabla = document.createElement("table");
tabla.border = 1;

root.append(tabla);

// let tblBody = document.createElement("tbody");
// tabla.appendChild(tblBody);

let tr = document.createElement("tr");
tabla.append(tr);

// Headers
for (const property in pokemons[0]) {
  console.log(property);
  const th = document.createElement("th");
  th.textContent = property;
  th.style.backgroundColor = "black";
  th.style.color = "white";

  th.addEventListener("click", (e) => {
    e.preventDefault();

    sortPokemos(property);
    tabla.innerHTML = "";

    tabla.append(tr);
    renderBody();
  });

  tr.append(th);
}

// Tabla body

function renderBody() {
  for (let i = 0; i < pokemons.length; i++) {
    let trb = document.createElement("tr");
    trb.style.color = "#907CEC";
    trb.style.textAlign = "center";

    let values = Object.values(pokemons[i]);
    console.log(values);

    for (let j = 0; j < values.length; j++) {
      const tdb = document.createElement("td");
      tdb.textContent = values[j];
      trb.append(tdb);
    }
    tabla.append(trb);
  }
}

renderBody();

//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior
//  y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.

//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.

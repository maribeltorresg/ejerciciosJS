//10. Crear una funcion que te permita ingresar en un prompt la informacion de un usuario de la siguiente manera:
// "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)"
// El usuario digitara: Andres, Perez, 28, ingeniero.
// La informacion debe ser guardada como objeto dentro del array users asignadole un id unico a cada registro.

const users = [];

const create = () => {
  let info = prompt(
    "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)",
    "Andres, Perez, 28, Ingeniero"
  );
  /* It's replacing all the spaces in the string with nothing. */
  let array = info.replace(/ /g, "").split(",");
  /* It's pushing an object into the users array. */
  users.push({
    id: Math.random().toString(36).substr(2, 5), //
    nombre: array[0],
    apellido: array[1],
    edad: array[2],
    profesion: array[3],

    //Primero instanciamos new Date() y luego le aplicamos el método toISOString()
    created_at: new Date().toISOString(),
  });
  // console.log(users);
};

//11. Utilizando el objeto Date, añadir la propiedad created_date de manera interna en donde se registre el
// momento en que ese registro fue creado.

//12.

// let users = [
//   {
//     id: 1,
//     nombre: "Andres",
//     apellido: "Pacheco",
//     edad: 38,
//     profesion: "developer",
//     created_at: "2022-09-26T06:25:21.118Z",
//   },
//   {
//     id: 2,
//     nombre: "Andrea",
//     apellido: "Sanchez",
//     edad: 25,
//     profesion: "profesor",
//     created_at: "2022-04-18T14:14:32.879Z",
//   },
//   {
//     id: 3,
//     nombre: "Julia",
//     apellido: "Ochoa",
//     edad: 32,
//     profesion: "musico",
//     created_at: "2021-12-14T11:53:38.279Z",
//   },
//   {
//     id: 4,
//     nombre: "Samuel",
//     apellido: "Martinez",
//     edad: 29,
//     profesion: "programador",
//     created_at: "2022-01-26T03:31:15.202Z",
//   },
//   {
//     id: 5,
//     nombre: "Roberto",
//     apellido: "Mattos",
//     edad: 40,
//     profesion: "chef",
//     created_at: "2022-07-27T02:06:22.760Z",
//   },
//   {
//     id: 6,
//     nombre: "Mercedes",
//     apellido: "Sanchez",
//     edad: 35,
//     profesion: "veterinario",
//     created_at: "2022-05-01T22:06:35.864Z",
//   },
// ];

// Crear una funcion que permita ordenar la lista de usuarios por
// fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se
// ordenaran de nuevo a antiguo)

function ordenarUsuarios(reverse) {
  users.sort((a, b) => {
    if (reverse) {
      return b.created_at.localeCompare(a.created_at);
    }
    return a.created_at.localeCompare(b.created_at);
  });
  console.log(users);
}
// ordenarUsuarios(false);

//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.

function filtrarUsuarios(anioAfiltrar, mesAFiltrar) {
  const usersFilter = users.filter((element) => {
    let fechaDeCreacion = new Date(element.created_at);
    let mesDeCreacion = fechaDeCreacion.getMonth() + 1;
    let anioDeCreacion = fechaDeCreacion.getFullYear();

    // no filtrar
    if (anioAfiltrar === 0 && mesAFiltrar === 0) {
      return true;
    }

    // solo year
    if (anioAfiltrar > 0 && mesAFiltrar === 0) {
      if (anioDeCreacion === anioAfiltrar) {
        return true;
      }
    }

    // solo month
    if (anioAfiltrar === 0 && mesAFiltrar > 0) {
      if (mesDeCreacion === mesAFiltrar) {
        return true;
      }
    }

    // year y month
    if (mesDeCreacion === anioAfiltrar && mesDeCreacion === mesAFiltrar) {
      return true;
    }
  });

  // console.log(usersFilter);
  return usersFilter;
}
// filtrarUsuarios(2021, 12);

//14. Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:
// CREATE
// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10.

// READ
// El admin debe poder visualizar en pantalla los registros que estan siendo creados.

// UPDATE
// El admin, al presionar un boton: "Modificar registro" en la parte inferior de la lista de registros, debe
// ver un prompt que le pida que ingrese el id del registro que desea modificar, en caso no ingrese ninguno,
// debe volver a la pagina inicial. Si elige modificar alguno, debe aparecer nuevamente el prompt del ejercicio 10
// OJO: Cuando el admin modifique el registro, no se debe modificar la fecha de creacion, en su lugar debe aparecer
// un nuevo campo de fecha de modificacion.

// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver
// un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt
// que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso
// deberia volver a la pagina inicial sin que se haya borrado ningun registro.

// OPCIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.

// OPCIONAL2: Crear un selector que permita filtrar los datos por fecha.

// Registro
const registroFiltro = {
  year: 0,
  month: 0,
};

const registroOrden = {
  column: "",
  asc: true,
};

const root = document.getElementById("root");

// Crear elementos que se van a mostrar en la interfaz
const createBtn = document.createElement("button");
const updateBtn = document.createElement("button");
const deleteBtn = document.createElement("button");
const table = document.createElement("table");

// year select
const selectYear = document.createElement("select");

const yearOptAll = document.createElement("option");
yearOptAll.value = 0;
yearOptAll.textContent = "Todo";

const yearOpt1 = document.createElement("option");
yearOpt1.value = 2021;
yearOpt1.textContent = "2021";

const yearOpt2 = document.createElement("option");
yearOpt2.value = 2022;
yearOpt2.textContent = "2022";

selectYear.appendChild(yearOptAll);
selectYear.appendChild(yearOpt1);
selectYear.appendChild(yearOpt2);

// month select
const selectMonth = document.createElement("select");

const monthOptAll = document.createElement("option");
monthOptAll.value = 0;
monthOptAll.textContent = "Todo";

const monthOpt1 = document.createElement("option");
monthOpt1.value = 1;
monthOpt1.textContent = "Enero";

const monthOpt2 = document.createElement("option");
monthOpt2.value = 4;
monthOpt2.textContent = "Abril";

const monthOpt3 = document.createElement("option");
monthOpt3.value = 12;
monthOpt3.textContent = "Diciembre";

selectMonth.appendChild(monthOptAll);
selectMonth.appendChild(monthOpt1);
selectMonth.appendChild(monthOpt2);
selectMonth.appendChild(monthOpt3);

createBtn.textContent = "Crear";
createBtn.style.backgroundColor = "#3CBDB2";
updateBtn.textContent = "Modificar registro";
updateBtn.style.backgroundColor = "#EED739";
updateBtn.style.color = "black";
deleteBtn.textContent = "Borrar registro";
deleteBtn.style.backgroundColor = "#E93C46";

// Mostrar en pantalla
root.appendChild(selectYear);
root.appendChild(selectMonth);
root.appendChild(createBtn);
root.appendChild(updateBtn);
root.appendChild(deleteBtn);
root.appendChild(table);

selectYear.addEventListener("change", (e) => {
  // console.log("on change month: " + e.target.value);

  // Convertimos el parámetro a número
  filtrarYear(+e.target.value);
});

selectMonth.addEventListener("change", (e) => {
  // console.log("on change month: " + e.target.value);
  filtrarMonth(+e.target.value);
});

createBtn.addEventListener("click", () => {
  create();
  renderizar();
});
updateBtn.addEventListener("click", () => {
  update();
  renderizar();
});
deleteBtn.addEventListener("click", () => {
  remove();
  renderizar();
});

function update() {
  const idAModificar = prompt("Ingrese el ID del registra a modificar");
  if (idAModificar === "") {
    return;
  }

  // Verificar si el ID existe y guardamos en una constante el índice
  const index = users.findIndex((element) => {
    return element.id === idAModificar;
  });
  if (index === -1) {
    alert("No existe");
    return;
  }
  // console.log(index);

  const info = prompt(
    "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)",
    "Luis, Lopez, 40, Arquitecto"
  );
  let array = info.replace(/ /g, "").split(",");

  users[index].nombre = array[0];
  users[index].apellido = array[1];
  users[index].edad = array[2];
  users[index].profesion = array[3];
  users[index].updated_date = new Date().toISOString();
}

function remove() {
  const idABorrar = prompt("Ingrese el ID del registra a borrar");
  // Validar que no este en blanco
  if (idABorrar === "") {
    return;
  }

  // Verificar si el ID existe y guardamos en una constante el índice
  const index = users.findIndex((element) => {
    return element.id === idABorrar;
  });
  if (index === -1) {
    alert("No existe");
    return;
  }
  // console.log(index);

  const respuesta = prompt("Esta usted seguro? (Si/No)", "Si");
  if (respuesta !== "Si") {
    return;
  }

  users.splice(index, 1);
}

// Esta función es quien va a filtrar, ordenar y dibujar la tabla
function renderizar() {
  // Lo que me retorne la función filtrarUsuarios() le asigno a data
  let data = filtrarUsuarios(registroFiltro.year, registroFiltro.month);

  // Ordenamos
  // Nota: a > b = 1 | a < b = -1 | si (a) es a (b) = 0(no hace nada)

  data.sort((a, b) => {
    if (registroOrden.column === "") {
      return 0;
    }
    if (registroOrden.column === "edad") {
      return registroOrden.asc ? a.edad - b.edad : b.edad - a.edad;
    }

    return registroOrden.asc
      ? a[registroOrden.column].localeCompare(b[registroOrden.column])
      : b[registroOrden.column].localeCompare(a[registroOrden.column]);
  });

  table.innerHTML = "";

  // Armar las cabeceras
  const thead = document.createElement("thead");
  const headTr = document.createElement("tr");

  for (const property in data[0]) {
    const th = document.createElement("th");
    th.textContent = property.toUpperCase();
    th.style.textAlign = "center";
    th.style.color = "#61B1D5";

    th.addEventListener("click", () => {
      console.log(property);

      // Llamamos a ordenar(...) y le pasamos como parámetro la cabecera que se
      // dió click
      ordenar(property);
    });

    headTr.appendChild(th);
  }

  thead.appendChild(headTr);

  table.appendChild(thead);

  // Cuerpo de la tabla
  const tbody = document.createElement("tbody");

  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");

    for (const property in data[i]) {
      const td = document.createElement("td");
      td.textContent = data[i][property];
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
}

// Configurar el registro
// Setear la propiedad column
function ordenar(column) {
  if (registroOrden.column === column) {
    // Invertimos el valor a false y se lo asignamos
    registroOrden.asc = !registroOrden.asc;
  } else {
    // Si la propiedad column es distinta al argumento
    // Le asignamos a la propiedad column lo que recibimos por el parámetro
    // column
    registroOrden.column = column;

    // asc = true
    registroOrden.asc = true;
  }

  renderizar();
}

// Acá lo que hace es asiganar a la propiedad year el parámetro que recibe
// función y llamamos a renderizar
function filtrarYear(year) {
  registroFiltro.year = year;
  renderizar();
}

function filtrarMonth(month) {
  registroFiltro.month = month;
  renderizar();
}

renderizar();

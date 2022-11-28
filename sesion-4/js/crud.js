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

const users = [];

// Creamos un objeto donde guardaré el estado que más adelante
// iré actualizando
const registroFiltro = {
  year: 0,
  month: 0,
};

const registroOrden = {
  column: "",
  asc: true,
};

// Crear
function create() {
  let info = prompt(
    "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)",
    "Andres, Perez, 28, Ingeniero"
  );

  let array = info.replace(/ /g, "").split(",");
  users.push({
    id: Math.random().toString(36).substr(2, 5),
    nombre: array[0],
    apellido: array[1],
    edad: array[2],
    profesion: array[3],
    created_at: new Date().toISOString(),
  });
}

// Actualizar
function update() {
  const idAModificar = prompt("Ingrese el ID del registro a modificar");
  if (idAModificar === "") {
    return;
  }

  const index = users.findIndex((element) => {
    return element.id === idAModificar;
  });
  if (index === -1) {
    alert("No existe");
    return;
  }

  const info = prompt(
    "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)",
    "Luis, Lopez, 40, Arquitecto"
  );

  let arrayInfo = info.replace(/ /g, "").split(",");

  users[index].nombre = arrayInfo[0];
  users[index].apellido = arrayInfo[1];
  users[index].edad = arrayInfo[2];
  users[index].profesion = arrayInfo[3];
  users[index].updated_date = new Date().toISOString();
}

// Eliminar
function remove() {
  const idABorrar = prompt("Ingrese el ID del registro a borrar");
  // Validar que no este en blanco
  if (idABorrar === "") {
    return;
  }

  // Nota: findIndex retorna -1 si no encuentra
  const index = users.findIndex((element) => {
    return element.id === idABorrar;
  });
  if (index === -1) {
    alert("No existe");
    return;
  }

  const respuesta = prompt("Esta usted seguro? (Si/No)", "Si");
  if (respuesta !== "Si") {
    return;
  }
  // Le aplicamos el método splice a users
  users.splice(index, 1);
}

// Setear el obj registroFiltro
function setFiltroYear(year) {
  registroFiltro.year = year;
  renderizar();
}

// Setear el obj registroFiltro
function setFiltroMonth(month) {
  registroFiltro.month = month;
  renderizar();
}

// Configurar el registro
// Setear la propiedad column
function setRegistroOrden(column) {
  if (registroOrden.column === column) {
    // Invertimos el valor a false y se lo asignamos
    registroOrden.asc = !registroOrden.asc;
  } else {
    // Si el valor de column es distinta al argumento
    // Le asignamos a la propiedad column lo que recibimos por el parámetro
    // column
    registroOrden.column = column;
    registroOrden.asc = true;
  }
  renderizar();
}

// Filtramos por anio y mes
function filtrarUsuarios(anioAfiltrar, mesAFiltrar) {
  // Nota: filter espera que la arrow function retorne true o false
  const usuariosFiltrados = users.filter((element) => {
    // Convertimos el valor de created_at a un obj Date
    let fechaDeCreacion = new Date(element.created_at);
    let mesDeCreacion = fechaDeCreacion.getMonth() + 1;
    let anioDeCreacion = fechaDeCreacion.getFullYear();

    // No filtrar
    if (anioAfiltrar === 0 && mesAFiltrar === 0) {
      return true;
    }

    // Solo year
    if (anioAfiltrar > 0 && mesAFiltrar === 0) {
      if (anioDeCreacion === anioAfiltrar) {
        return true;
      }
    }

    // Solo month
    if (anioAfiltrar === 0 && mesAFiltrar > 0) {
      if (mesDeCreacion === mesAFiltrar) {
        return true;
      }
    }

    // year and month
    if (anioDeCreacion === anioAfiltrar && mesDeCreacion === mesAFiltrar) {
      return true;
    }
  });

  // console.log(usuariosFiltrados);
  return usuariosFiltrados;
}

// Esta función es quien va a ordenar y dibujar la tabla
function renderizar() {
  // Lo que me retorne la función filtrarUsuarios() le asigno a data
  let data = filtrarUsuarios(registroFiltro.year, registroFiltro.month);

  // Ordenamos
  data.sort((a, b) => {
    if (registroOrden.column === "") {
      // No hará nada
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

      // Llamamos a setRegistroOrden(...) y le pasamos como parámetro la cabecera que se
      // dió click
      setRegistroOrden(property);
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
monthOpt3.value = 11;
monthOpt3.textContent = "Noviembre";

const monthOpt4 = document.createElement("option");
monthOpt4.value = 12;
monthOpt4.textContent = "Diciembre";

selectMonth.appendChild(monthOptAll);
selectMonth.appendChild(monthOpt1);
selectMonth.appendChild(monthOpt2);
selectMonth.appendChild(monthOpt3);
selectMonth.appendChild(monthOpt4);

createBtn.textContent = "Crear";
createBtn.style.backgroundColor = "#3CBDB2";
updateBtn.textContent = "Modificar registro";
updateBtn.style.backgroundColor = "#EED739";
updateBtn.style.color = "black";
deleteBtn.textContent = "Borrar registro";
deleteBtn.style.backgroundColor = "#E93C46";

// Seleccionamos root
const root = document.getElementById("root");

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
  setFiltroYear(+e.target.value);
});

selectMonth.addEventListener("change", (e) => {
  // console.log("on change month: " + e.target.value);
  setFiltroMonth(+e.target.value);
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

renderizar();

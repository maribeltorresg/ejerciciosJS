//10. Crear una funcion que te permita ingresar en un prompt la informacion de un usuario de la siguiente manera:
// "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)"
// El usuario digitara: Andres, Perez, 28, ingeniero.
// La informacion debe ser guardada como objeto dentro del array users asignadole un id unico a cada registro.

// const users = [];

// const Datos = () => {
//   let info = prompt("ingrese la informacion del usuario: ");
//   /* It's replacing all the spaces in the string with nothing. */
//   info.replace(" ", "");
//   let array = info.split(" ");
//   /* It's pushing an object into the users array. */
//   users.push({
//     id: Math.random().toString(36).substr(2, 10), //
//     nombre: array[0],
//     apellido: array[1],
//     edad: array[2],
//     profesion: array[3],

//     //Primero instanciamos new Date() y luego le aplicamos el método toISOString()
//     created_date: new Date().toISOString(),
//   });
//   console.log(users);
// };

//11. Utilizando el objeto Date, añadir la propiedad created_date de manera interna en donde se registre el
// momento en que ese registro fue creado.

//12.

let users = [
  {
    id: 1,
    nombre: "Andres",
    apellido: "Pacheco",
    edad: 38,
    profesion: "developer",
    created_at: "2022-09-26T06:25:21.118Z",
  },
  {
    id: 2,
    nombre: "Andrea",
    apellido: "Sanchez",
    edad: 25,
    profesion: "profesor",
    created_at: "2022-04-18T14:14:32.879Z",
  },
  {
    id: 3,
    nombre: "Julia",
    apellido: "Ochoa",
    edad: 32,
    profesion: "musico",
    created_at: "2021-12-14T11:53:38.279Z",
  },
  {
    id: 4,
    nombre: "Samuel",
    apellido: "Martinez",
    edad: 29,
    profesion: "programador",
    created_at: "2022-01-26T03:31:15.202Z",
  },
  {
    id: 5,
    nombre: "Roberto",
    apellido: "Mattos",
    edad: 40,
    profesion: "chef",
    created_at: "2022-07-27T02:06:22.760Z",
  },
  {
    id: 6,
    nombre: "Mercedes",
    apellido: "Sanchez",
    edad: 35,
    profesion: "veterinario",
    created_at: "2022-05-01T22:06:35.864Z",
  },
];

// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)

//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.

function filtrarUsuarios(year, month) {
  month = month - 1;

  const usersFilter = users.filter((element) => {
    let fecha = element.created_at;
    // console.log(fecha);

    let nuevoDate = new Date(fecha);
    // console.log(nuevoDate);

    let mes = nuevoDate.getMonth();
    // console.log(mes);

    let anio = nuevoDate.getFullYear();
    // console.log(anio);

    if (anio === year && mes === month) {
      // console.log("heh");
      return true;
    }
  });
  console.log(usersFilter);
}
filtrarUsuarios(2021, 12);

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

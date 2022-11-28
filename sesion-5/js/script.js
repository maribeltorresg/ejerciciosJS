let nombre = prompt("Nombre");

const root = document.getElementById("root");

const form = document.createElement("form");

const inputHoras = document.createElement("input");
inputHoras.setAttribute("type", "number");
inputHoras.setAttribute("placeholder", "Horas trabajadas");

// Selector para catrgorias
const selectC = document.createElement("select");
const optionC0 = document.createElement("option");
optionC0.textContent = "Selecciona la categoria";

const option1 = document.createElement("option");
option1.value = 40;
option1.textContent = "A";

const option2 = document.createElement("option");
option2.value = 35;
option2.textContent = "B";

const option3 = document.createElement("option");
option3.value = 30;
option3.textContent = "C";

// Selector para anios de experiencia
const selectAnios = document.createElement("select");
const optionAnios0 = document.createElement("option");
optionAnios0.textContent = "Selecciona los anios de servicio";

const optionAnios1 = document.createElement("option");
optionAnios1.value = 0.15;
optionAnios1.text = "1 - 3";

const optionAnios2 = document.createElement("option");
optionAnios2.value = 0.2;
optionAnios2.text = "4 - 7";

const optionAnios3 = document.createElement("option");
optionAnios3.value = 0.3;
optionAnios3.text = "8 - 12";

const optionAnios4 = document.createElement("option");
optionAnios4.value = 0.35;
optionAnios4.text = "13 - más";

const botonSubmit = document.createElement("button");
botonSubmit.setAttribute("type", "submit");
botonSubmit.textContent = "Calcular";

let divContenedor = document.createElement("div");
let pSueldo = document.createElement("p");
let pBonificacion = document.createElement("p");
let pSueldoNeto = document.createElement("p");

selectC.appendChild(optionC0);
selectC.appendChild(option1);
selectC.appendChild(option2);
selectC.appendChild(option3);
selectAnios.appendChild(optionAnios0);
selectAnios.appendChild(optionAnios1);
selectAnios.appendChild(optionAnios2);
selectAnios.appendChild(optionAnios3);
selectAnios.appendChild(optionAnios4);

root.appendChild(form);
form.appendChild(inputHoras);
form.appendChild(selectC);
form.appendChild(selectAnios);
form.appendChild(botonSubmit);
root.appendChild(divContenedor);
divContenedor.appendChild(pSueldo);
divContenedor.appendChild(pBonificacion);
divContenedor.appendChild(pSueldoNeto);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const horas = inputHoras.value;
  const pagoPorHora = selectC.value;
  const bonificacionPorcentaje = selectAnios.value;

  const sueldoBase = horas * pagoPorHora;
  const montoBonificacion = sueldoBase * bonificacionPorcentaje;
  const sueldoBruto = sueldoBase + montoBonificacion;
  const sueldoNeto = sueldoBruto * 0.8;

  pSueldo.textContent = `${nombre} con un sueldo de S/ ${sueldoBase}`;
  pBonificacion.textContent = `Con una bonificacion de S/ ${montoBonificacion}`;
  pSueldoNeto.textContent = `Sueldo neto a cobra es: S/ ${sueldoNeto}`;
});

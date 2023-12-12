let intentos = 6;
let diccionario = [
  "PERRO",
  "GATOS",
  "MANOS",
  "GORDO",
  "RAMPA",
  "CORTO",
  "BOLSO",
  "AMIGO",
  "DIETA",
];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const input = document.getElementById("guess-input");
const valor = input.value;
const GRID = document.getElementById("grid");
const ROW = document.createElement("div");
ROW.className = "row";
window.addEventListener("load", init);
function init() {}
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
function intentar() {
  const INTENTO = leerIntento();
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";
  for (let i in palabra) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    if (INTENTO[i] === palabra[i]) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "#79b851";
    } else if (palabra.includes(INTENTO[i])) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "#f3c237";
    } else {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "red";
    }
    ROW.appendChild(SPAN);
  }
  intentos = intentos - 1;
  GRID.appendChild(ROW);
  if (INTENTO === palabra) {
    terminar("<h1>GANASTE!😀</h1>");
    return;
  }
  if (intentos == 0) {
    terminar("<h1>PERDISTE!😖</h1>");
  }
}
function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  button.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
  const H1 = document.querySelector("h1");
  H1.style.opacity = 0.5;
  INPUT.style.opacity = 0.5;
  button.style.opacity = 0.5;
  const DIV = document.querySelector("div");
  DIV.style.opacity = 0.5;
}
function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}
for (let i in palabra) {
  console.log(palabra[i]);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function anunciaSeleccion(usuario, seleccion) {
  if (seleccion == 1) {
    alert(usuario + " eligió Piedra");
  } else if (seleccion == 2) {
    alert(usuario + " eligió Papel");
  } else if (seleccion == 3) {
    alert(usuario + " eligió Tijera");
  } else {
    alert(usuario + " ponte vergas, escogiste un número inválido");
  }
}

function juega(seleccionJugador, seleccionPC) {
  let resultado = 0;
  if (seleccionJugador == seleccionPC) {
    alert("EMPATE.");
    resultado = 0;
  } else if (
    (seleccionJugador == 1 && seleccionPC == 3) ||
    (seleccionJugador == 2 && seleccionPC == 1) ||
    (seleccionJugador == 3 && seleccionPC == 2)
  ) {
    alert("GANASTE.");
    resultado = 1;
  } else {
    alert("PERDISTE.");
    resultado = 2;
  }
  return resultado;
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0; // = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

let pc = 0; // aleatorio(1, 3)
let triunfos = 0;
let perdidas = 0;
let resultadoCombate = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

  anunciaSeleccion("Jugador", jugador);

  anunciaSeleccion("PC", pc);

  resultadoCombate = juega(jugador, pc);
  if (resultadoCombate == 1) {
    triunfos += 1;
  } else if (resultadoCombate == 2) {
    perdidas += 1;
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");

let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego")
  botonFuego.addEventListener('click', ataqueFuego)
  let botonAgua = document.getElementById("boton-agua")
  botonAgua.addEventListener('click', ataqueAgua)
  let botonTierra = document.getElementById("boton-tierra")
  botonTierra.addEventListener('click', ataqueTierra)
}

function isElementChecked(element) {
  return document.getElementById(element).checked;
}

function seleccionarMascotaJugador() {
  let mascotaSeleccionada = "";
  let hipodoge = document.getElementById("hipodoge");
  let capipepo = document.getElementById("capipepo");
  let ratigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (hipodoge.checked) {
    mascotaSeleccionada = "Hipodoge";
  } else if (capipepo.checked) {
    mascotaSeleccionada = "Capipepo";
  } else if (ratigueya.checked) {
    mascotaSeleccionada = "Ratigueya";
  }
  if (mascotaSeleccionada != "") {
    spanMascotaJugador.innerHTML = mascotaSeleccionada;
  } else {
    alert("Ponte vergas. Selecciona una mascota.");
  }

  seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3)
  let mascotaSeleccionada = "";
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if(mascotaAleatoria == 1) {
    mascotaSeleccionada = "Hipodoge"
  } else if(mascotaAleatoria == 2) {
    mascotaSeleccionada = "Capipepo"
  } else {
    mascotaSeleccionada = "Ratigueya"
  }

  spanMascotaEnemigo.innerHTML = mascotaSeleccionada;
}

function ataqueFuego() {
  ataqueJugador = 'FUEGO'
  ataqueEnemigo()
}

function ataqueAgua() {
  ataqueJugador = 'AGUA'
  ataqueEnemigo()
}

function ataqueTierra() {
  ataqueJugador = 'TIERRA'
  ataqueEnemigo()
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3)
  
  if(ataqueAleatorio == 1) {
    ataqueEnemigo = 'FUEGO'
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'AGUA'
  } else {
    ataqueEnemigo = 'TIERRA'
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);

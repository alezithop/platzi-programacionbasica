function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
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
  let ataqueAleatorio = aleatorio(1, 3)
  let mascotaSeleccionada = "";
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if(ataqueAleatorio == 1) {
    mascotaSeleccionada = "Hipodoge"
  } else if(ataqueAleatorio == 2) {
    mascotaSeleccionada = "Capipepo"
  } else {
    mascotaSeleccionada = "Ratigueya"
  }

  spanMascotaEnemigo.innerHTML = mascotaSeleccionada;
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);

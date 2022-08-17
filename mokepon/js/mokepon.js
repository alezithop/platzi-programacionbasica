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
  if (hipodoge.checked) {
    mascotaSeleccionada = "hipodoge";
  } else if (capipepo.checked) {
    mascotaSeleccionada = "capipepo";
  } else if( ratigueya.checked) {
    mascotaSeleccionada = "ratigueya";
  }
  if(mascotaSeleccionada != "") {
	alert("Seleccionaste tu mascota: " + mascotaSeleccionada);
  } else {
	alert("Selecciona una mascota");
  }
  
}

window.addEventListener("load", iniciarJuego);

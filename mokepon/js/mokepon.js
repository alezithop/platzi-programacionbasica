let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);
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

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3);
    let mascotaSeleccionada = "";
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if (mascotaAleatoria == 1) {
        mascotaSeleccionada = "Hipodoge";
    } else if (mascotaAleatoria == 2) {
        mascotaSeleccionada = "Capipepo";
    } else {
        mascotaSeleccionada = "Ratigueya";
    }

    spanMascotaEnemigo.innerHTML = mascotaSeleccionada;
}

function ataqueFuego() {
    ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "AGUA";
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "TIERRA";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA";
    } else {
        ataqueEnemigo = "TIERRA";
    }

    combate();
}

function combate() {
    // 1 va a ser agua, 2 va a ser agua y el 3 va a ser tierra
    let resultado = 0;
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE. 😬");
        resultado = 0;
    } else if (
        (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") ||
        (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") ||
        (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")
    ) {
        crearMensaje("GANASTE. 🎉");
        resultado = 1;
    } else {
        crearMensaje("PERDISTE. 😵‍💫");
        resultado = 2;
    }
    return resultado;
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes");

    let parrafo = document.createElement("p");
    parrafo.innerText =
        "Tu mascota atacó con " +
        ataqueJugador +
        ", la mascota del enemigo atacó con " +
        ataqueEnemigo +
        " - " +
        resultado
    sectionMensajes.appendChild(parrafo);
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);

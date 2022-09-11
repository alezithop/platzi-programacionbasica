let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function isElementChecked(element) {
    return document.getElementById(element).checked
}

function seleccionarMascotaJugador() {
    let mascotaSeleccionada = ""
    let hipodoge = document.getElementById("hipodoge")
    let capipepo = document.getElementById("capipepo")
    let ratigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (hipodoge.checked) {
        mascotaSeleccionada = "Hipodoge"
    } else if (capipepo.checked) {
        mascotaSeleccionada = "Capipepo"
    } else if (ratigueya.checked) {
        mascotaSeleccionada = "Ratigueya"
    }
    if (mascotaSeleccionada != "") {
        spanMascotaJugador.innerHTML = mascotaSeleccionada
    } else {
        alert("Ponte vergas. Selecciona una mascota.")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)
    let mascotaSeleccionada = ""
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1) {
        mascotaSeleccionada = "Hipodoge"
    } else if (mascotaAleatoria == 2) {
        mascotaSeleccionada = "Capipepo"
    } else {
        mascotaSeleccionada = "Ratigueya"
    }

    spanMascotaEnemigo.innerHTML = mascotaSeleccionada
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function combate() {
    if (vidaJugador > 0 && vidaEnemigo > 0) {
        // 1 ahora va a ser agua, 2 ahora va a ser agua y el 3 ahora va a ser tierra
        if (ataqueJugador == ataqueEnemigo) {
            crearMensaje("EMPATE. 😬")
        } else if (
            (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") ||
            (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") ||
            (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")
        ) {
            crearMensaje("GANASTE. 🎉")
            vidaEnemigo -= 1
        } else {
            crearMensaje("PERDISTE. 😵‍💫")
            vidaJugador -= 1
        }
        actualizarVidas()
        if (vidaEnemigo == 0) {
            alert("La batalla ha terminado. Felicidades has ganado.")
            crearMensajeFinal()
        }
        if (vidaJugador == 0) {
            alert("La batalla ha terminado. Lo harás mejor a la próxima.")
            crearMensajeFinal()
        }
    } else {
        alert("Refresca el navegador o toca el botón Reiniciar para iniciar una nueva Batalla.")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerText =
        "Tu mascota atacó con " +
        ataqueJugador +
        ", la mascota del enemigo atacó con " +
        ataqueEnemigo +
        " - " +
        resultado
    sectionMensajes.appendChild(parrafo)
}

function limpiarMensajes() {
    let sectionMensajes = document.getElementById("mensajes")
    sectionMensajes.innerHTML = ""
}

function crearMensajeFinal() {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    if (vidaEnemigo == 0) {
        parrafo.innerText = "La batalla ha terminado. Felicidades has ganado."
    }
    if (vidaJugador == 0) {
        parrafo.innerText = "La batalla ha terminado. Lo harás mejor a la próxima."
    }
    sectionMensajes.appendChild(parrafo)
    parrafo.innerText = "Refresca el navegador o toca el botón Reiniciar para iniciar una nueva Batalla."
    sectionMensajes.appendChild(parrafo)
}

function actualizarVidas() {
    let sectionVidasJugador = document.getElementById("vidas-jugador")
    let sectionVidasEnemigo = document.getElementById("vidas-enemigo")

    sectionVidasJugador.innerText = vidaJugador
    sectionVidasEnemigo.innerText = vidaEnemigo
}

function reiniciarJuego() {
    // vidaJugador = 3
    // vidaEnemigo = 3
    // actualizarVidas()
    // limpiarMensajes()
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

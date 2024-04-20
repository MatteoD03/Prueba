let puntiGio = 0;
let puntiCom = 0;

let istruzioni = document.querySelector("#istruzioni")
let puntiGiocatore = document.querySelector("#punti-giocatore")
let puntiComputer = document.querySelector("#punti-computer")
let messaggio = document.querySelector("#messaggio")
let vinto = document.querySelector("#vinto")
let sceltaGiocatore = document.querySelector("#scelta-giocatore")
let sceltaComputer = document.querySelector("#scelta-computer")
let scegliArmi = document.querySelector("#scegli")
let riavviare = document.querySelector("#riavviare")

let bottoniArmi = document.querySelectorAll(".arma")

bottoniArmi.forEach(bottone => {
    bottone.addEventListener("click", iniziareTurno)
})

function iniziareTurno(e) {
    let sceltaPc = Math.floor(Math.random () * 3)
    let sceltaPersona = e.currentTarget.id
    
    if (sceltaPc === 0) {
        sceltaPc = "pietra"
    } else if (sceltaPc === 1) {
        sceltaPc = "carta"
    } else {
        sceltaPc = "forbice"
    }

    if(
        (sceltaPersona === "pietra" && sceltaPc === "forbice") ||
        (sceltaPersona === "carta" && sceltaPc === "pietra") ||
        (sceltaPersona === "forbice" && sceltaPc === "carta")
    ) {
        vincePersona ()
    } else if (
        (sceltaPc === "pietra" && sceltaPersona === "forbice") ||
        (sceltaPc === "carta" && sceltaPersona === "pietra") ||
        (sceltaPc === "forbice" && sceltaPersona === "carta")
    ) {
        vincePc ()
    } else {
        pareggio ()
    }

    messaggio.classList.remove("disabled")
    sceltaGiocatore.innerHTML = sceltaPersona
    sceltaComputer.innerHTML = sceltaPc

    if (puntiGio === 5 || puntiCom === 5) {

        if(puntiGio === 5) {
            istruzioni.innerHTML = "HAI VINTO IL GIOCO"
        }

        if(puntiCom === 5) {
            istruzioni.innerHTML = "HA VINTO IL COMPUTER"
        }

        scegliArmi.classList.add("disabled")
        riavviare.classList.remove("disabled")
        riavviare.addEventListener("click", riavviareGioco)
    }

}

function vincePersona() {
    puntiGio++
    puntiGiocatore.innerHTML = puntiGio
    vinto.innerHTML = "Hai vinto un punto! :)"
}

function vincePc() {
    puntiCom++
    puntiComputer.innerHTML = puntiCom
    vinto.innerHTML = "Il computer ha vinto un punto :("
}

function pareggio() {
    vinto.innerHTML = "Pareggio :/"
}

function riavviareGioco() {
    riavviare.classList.add("disabled")
    scegliArmi.classList.remove("disabled")
    messaggio.classList.add("disabled")

    puntiGio = 0
    puntiCom = 0

    puntiGiocatore.innerHTML = puntiGio
    puntiComputer.innerHTML = puntiCom

    istruzioni.innerHTML = " Il primo che raggiunge i 5 punti vince"
}
let contadorHumano = 0;
let contadorMaquina = 0;
let contadorEmpates = 0;
let piedra = 1;
let papel = 2;
let tijera = 3;

function cachipunMaquina() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}3

function rondas() {
    let jugadas = Number(prompt("Cantidad de jugadas."));
    return jugadas;
}

function cachipunUsuario() {
    let jugada = (prompt("Elige piedra, papel o tijera")).toLowerCase();
    if (jugada == "piedra") {
        return piedra;

    } else if (jugada == "papel") {
        return papel;
    } else if (jugada == "tijera") {
        return tijera;
    } else { return false }
}

function jugar() {

    let jugadas = rondas()
    console.log("Iniciando el juego")
    for (let index = 1; index <= jugadas; index++) {
        let jugadaUsuario = cachipunUsuario();
        let jugadaMaquina = cachipunMaquina();
        if (!jugadaUsuario) {
            alert("Jugada Invalida")
        }

        console.log("Jugada finalizada");
        if (jugadaUsuario == jugadaMaquina) {
            contadorEmpates++
            console.log(`Empate la maquina jugó: ${jugadaMaquina} y tú jugaste:${jugadaUsuario}`)
            document.write(`Empate la maquina jugó: ${jugadaMaquina} y tú jugaste:${jugadaUsuario}<br>`)

        } else if ((jugadaUsuario == piedra && jugadaMaquina == tijera) || (jugadaUsuario == tijera && jugadaMaquina == papel) || (jugadaUsuario == papel && jugadaMaquina == piedra)) {
            contadorHumano++
            console.log(`Ganaste!! la maquina jugó: ${jugadaMaquina} y tu jugaste: ${jugadaUsuario}`);
            document.write(`Ganaste!! la maquina jugó: ${jugadaMaquina} y tú jugaste:${jugadaUsuario}<br>`)
        } {
            contadorMaquina++
            console.log(`Perdiste!! la maquina jugó: ${jugadaMaquina} y tu jugaste: ${jugadaUsuario}`);
            document.write(`Perdiste!!  la maquina jugó: ${jugadaMaquina} y tú jugaste:${jugadaUsuario}<br>`)
        }
    }

    if (contadorHumano > contadorMaquina) {
        console.log("Felicitaciones,ganaste!")
        document.write(`Felicitaciones,ganaste!<br>`)


    } else if (contadorMaquina > contadorHumano) {
        console.log("Perdiste")
        document.write(`Perdiste!¿Quieres jugar de nuevo?<br>`)


    } else {
        console.log("Empate!")
        document.write(`Empate<br>`)

    }
    console.log(`Resultado Final: obtuviste ${contadorHumano} la maquina obtuvo ${contadorMaquina} y el numero de empates ${contadorEmpates}`)


}



jugar()
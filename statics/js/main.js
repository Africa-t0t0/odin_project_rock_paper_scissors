function getComputerChoice() {
    const choices = ["piedra", "papel", "tijeras"]
    var index = Math.floor(Math.random() * choices.length)
    var resultadoComputer = document.getElementById('computer-selection');
    resultadoComputer.textContent = choices[index];
    return choices[index];
};

function getUserchoice() {
    var botones = document.getElementsByClassName('btn');
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function(event) {
            event.preventDefault();
            let resultadoUsuario = document.getElementById('user-selection');
            resultadoUsuario.textContent = this.name
            let resultadoPc = getComputerChoice();
            selectWinner(String(resultadoPc), String(this.name));
        });
    }
};

function cleanInputs(inputA, inputB) {
    if ((inputA == 'tijeras' && inputB == 'piedra') || (inputA == 'papel' && inputB == 'tijeras') || (inputA == 'piedra' && inputB == 'papel')) {return 1}
    else {return 0};

};

function selectWinner(computer, user) {
    if (computer == user) {
        let ganador = document.getElementById('ganador');
        ganador.textContent = 'Empatados!!';
        return
    } else {
        var ganador = cleanInputs(computer, user);
        var resultadoGanador = document.getElementById('ganador');
        if (ganador == 1) {
            resultadoGanador.textContent = 'Gana el Usuario!!!';
        } else if (ganador == 0) {
            resultadoGanador.textContent = 'Gana el Computador!!!';
        } else {resultadoGanador.textContent = 'Empataronnn!!!'};
        return
    }
};

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    getUserchoice();
})
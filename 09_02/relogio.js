'use strict';


function reload() {
    const relogio = document.getElementById('relogio');

    const agora = new Date();

    const horasMinutos = agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    relogio.innerHTML = horasMinutos;

    setTimeout(reload, 1000);
}


reload();
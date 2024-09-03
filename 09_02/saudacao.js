'use strict';



function diaAtual() {
    const agora = new Date();

    const horasMinutos = agora.toLocaleTimeString('pt-br', { weekday: "long" });
    // const dia = agora.getDay();
    // const dias = [
    //     'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira']
    // const saudacao = document.getElementById('saudacao');
    saudacao.innerHTML = horasMinutos[0].toUpperCase() + horasMinutos.substr(1);
    // saudacao.innerHTML = dias[dia];

    const hora = agora.getHours();

    let cumprimento = '';

    if (hora < 6) {
        cumprimento = 'Boa madrugada!';
    } else if (hora < 12) {
        cumprimento = 'Bom dia!';
    } else if (hora < 18) {
        cumprimento = 'Boa tarde!';
    } else {
        cumprimento = 'Boa noite!';
    }

    const cumprimentoMostra = document.getElementById('cumprimento');
    cumprimentoMostra.innerHTML = cumprimento;


    setTimeout(diaAtual, 1000);

}

diaAtual();
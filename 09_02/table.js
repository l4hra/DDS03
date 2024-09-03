'use strict';



//DOM (Document Objetc Model) é a estrutura da página HTML.
//O DOM permite que linguagens interajam com a página


let aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "JOEL HERBERT BARBOSA SILVA",
        "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
        "ambiente": "VTRIA-3-SALA-3004",
        "chave": null
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
        "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
        "ambiente": "VTRIA-EXTER-EXTERNO",
        "chave": null
    },
    {
        "id": 1326,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:30:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "AFONSO DE JESUS CORDEIRO",
        "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
        "ambiente": "VTRIA-3-LAB-3003",
        "chave": null
    }
]

let tabela = document.getElementById('tabela');

let exibir = '';
for (let aula of aulas) {
    exibir += '<tr>'
    // exibir += '<td>' + aula.data + '</td>'
    exibir += '<td>' + aula.data_hora_inicio + '</td>'
    exibir += '<td>' + aula.data_hora_fim + '</td>'
    exibir += '<td>' + aula.turma + '</td>'
    exibir += '<td>' + aula.instrutor + '</td>'
    exibir += '<td>' + aula.unidade_curricular + '</td>'
    exibir += '<td>' + aula.ambiente + '</td>'



    exibir += '</tr>'
}


// for (let i = 0; i < aulas.lenght; i++){
//     let pieces = aulas[i].split(' '); //split pega uma string e separa em arrays de string
//     pieces.splice(-2,2);//splice remove elemento de um array

//     let abrev = pieces[0].substring(0,4);//retorna um pedaço de uma string
//     console.log(abrev+'. '+pieces.pop());
// }

tabela.innerHTML += exibir;

// console.log(tabela);
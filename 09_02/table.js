"use strict";

//DOM (Document Objetc Model) é a estrutura da página HTML.
//O DOM permite que linguagens interajam com a página

let aulas = [
  {
    id: 1300,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "EMP-NBM-03",
    instrutor: "JOEL HERBERT BARBOSA SILVA",
    unidade_curricular: "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
    ambiente: "VTRIA-3-SALA-3004",
    chave: null,
  },
  {
    id: 1280,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "UMO-MBMM-03",
    instrutor: "THADEU VASCONCELOS DA SILVA GOMES",
    unidade_curricular:
      "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
    ambiente: "VTRIA-EXTER-EXTERNO",
    chave: null,
  },
  {
    id: 1326,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:30:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "HTC-MEC-4-92",
    instrutor: "AFONSO DE JESUS CORDEIRO",
    unidade_curricular:
      "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
    ambiente: "VTRIA-3-LAB-3003",
    chave: null,
  },
  {
    id: 1300,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "EMP-NBM-03",
    instrutor: "JOEL HERBERT BARBOSA SILVA",
    unidade_curricular: "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
    ambiente: "VTRIA-3-SALA-3004",
    chave: null,
  },
  {
    id: 1280,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "UMO-MBMM-03",
    instrutor: "THADEU VASCONCELOS DA SILVA GOMES",
    unidade_curricular:
      "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
    ambiente: "VTRIA-EXTER-EXTERNO",
    chave: null,
  },
  {
    id: 1326,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:30:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "HTC-MEC-4-92",
    instrutor: "AFONSO DE JESUS CORDEIRO",
    unidade_curricular:
      "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
    ambiente: "VTRIA-3-LAB-3003",
    chave: null,
  },
  {
    id: 1300,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "EMP-NBM-03",
    instrutor: "JOEL HERBERT BARBOSA SILVA",
    unidade_curricular: "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
    ambiente: "VTRIA-3-SALA-3004",
    chave: null,
  },
  {
    id: 1280,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "UMO-MBMM-03",
    instrutor: "THADEU VASCONCELOS DA SILVA GOMES",
    unidade_curricular:
      "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
    ambiente: "VTRIA-EXTER-EXTERNO",
    chave: null,
  },
  {
    id: 1326,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:30:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "HTC-MEC-4-92",
    instrutor: "AFONSO DE JESUS CORDEIRO",
    unidade_curricular:
      "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
    ambiente: "VTRIA-3-LAB-3003",
    chave: null,
  },
  {
    id: 1300,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "EMP-NBM-03",
    instrutor: "JOEL HERBERT BARBOSA SILVA",
    unidade_curricular: "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
    ambiente: "VTRIA-3-SALA-3004",
    chave: null,
  },
  {
    id: 1280,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "UMO-MBMM-03",
    instrutor: "THADEU VASCONCELOS DA SILVA GOMES",
    unidade_curricular:
      "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
    ambiente: "VTRIA-EXTER-EXTERNO",
    chave: null,
  },
  {
    id: 1326,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:30:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "HTC-MEC-4-92",
    instrutor: "AFONSO DE JESUS CORDEIRO",
    unidade_curricular:
      "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
    ambiente: "VTRIA-3-LAB-3003",
    chave: null,
  },
  {
    id: 1300,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "EMP-NBM-03",
    instrutor: "JOEL HERBERT BARBOSA SILVA",
    unidade_curricular: "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
    ambiente: "VTRIA-3-SALA-3004",
    chave: null,
  },
  {
    id: 1280,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "UMO-MBMM-03",
    instrutor: "THADEU VASCONCELOS DA SILVA GOMES",
    unidade_curricular:
      "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
    ambiente: "VTRIA-EXTER-EXTERNO",
    chave: null,
  },
  {
    id: 1326,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:30:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "HTC-MEC-4-92",
    instrutor: "AFONSO DE JESUS CORDEIRO",
    unidade_curricular:
      "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
    ambiente: "VTRIA-3-LAB-3003",
    chave: null,
  },
  {
    id: 1300,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "EMP-NBM-03",
    instrutor: "JOEL HERBERT BARBOSA SILVA",
    unidade_curricular: "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
    ambiente: "VTRIA-3-SALA-3004",
    chave: null,
  },
  {
    id: 1280,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:00:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "UMO-MBMM-03",
    instrutor: "THADEU VASCONCELOS DA SILVA GOMES",
    unidade_curricular:
      "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
    ambiente: "VTRIA-EXTER-EXTERNO",
    chave: null,
  },
  {
    id: 1326,
    data: "2024-08-29T03:00:00.000Z",
    data_hora_inicio: "2024-08-29T21:30:00.000Z",
    data_hora_fim: "2024-08-30T01:00:00.000Z",
    turma: "HTC-MEC-4-92",
    instrutor: "AFONSO DE JESUS CORDEIRO",
    unidade_curricular:
      "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
    ambiente: "VTRIA-3-LAB-3003",
    chave: null,
  },
];

let tabela = document.getElementById("tabela");

let exibir = "";
for (let i = 0; i < aulas.length; i++) {
  let aula = aulas[i];
  let dataInicio = new Date(aula.data_hora_inicio);
  let dataFim = new Date(aula.data_hora_fim);

  let horaInicio = dataInicio.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  let horaFim = dataFim.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let unidadeCurricular = aula.unidade_curricular;
  let palavras = unidadeCurricular.split(" ");
  let abreviado = palavras[0] + "." + palavras[palavras.length - 3];

  let classe = i % 2 === 0 ? "azul-claro" : "azul-escuro";

  exibir += "<tr class='" + classe + "'>";
  exibir += "<td>" + horaInicio + "</td>";
  exibir += "<td>" + horaFim + "</td>";
  exibir += "<td>" + aula.turma + "</td>";
  exibir += "<td>" + aula.instrutor + "</td>";
  exibir += "<td>" + abreviado + "</td>";
  exibir += "<td>" + aula.ambiente + "</td>";
  exibir += "</tr>";
}

document.getElementById("tabela").innerHTML += exibir;

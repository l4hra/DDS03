'use script';

let nomes = [];


nomes[0] = 'Lahra Souza Goiabinha';
nomes[1] = 'Mateus Maçã';
nomes[2] = 'Igor Stein Pera';
nomes[3] = 'Luiz Bizio Pitanga';
nomes[4] = 'Gustavo Santos Banana';
nomes[5] = 'Vitor Ribeiro Melancia';
nomes[6] = 'Valdinei Suco';
nomes[7] = 'Lucas Abacaxi';
nomes[8] = 'Giampaolo Manguinha';
// nomes[9] = 'Mariazinha';

let tam = nomes.length;

nomes.push('Maria')
for(let i = 0; i < tam; i++ ){

let cNome = nomes[i];

let dNome =  cNome.split(' ');

let fisrtname = dNome[0] + ' ' + dNome[dNome.length-1];


if(fisrtname[9] == 'Mariazinha'){

}
alert(fisrtname)
}

// getElementById()
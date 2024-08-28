'use script';

// const firstArray = new Array(5);

// firstArray[0] = 5;
// firstArray[1] = 'oioi';
// firstArray[2] = 3.15;
// firstArray[3] = true;
// firstArray[4] = 'boia';

// alert(firstArray);

// const secondArray = [0,1,2,3,4,5,6];

// alert(secondArray);

// const terceiroArray = [5, false, 'lule', null];
// alert(terceiroArray);


// let matriz = [[0,1,2], ['oi', 'ei'], [true,false]];

// alert(matriz[0]);



let cores = ['amarelo', 'azul', 'orange']; //converte para string

alert(cores.toString());

alert(cores.join(' | ')); // poe um separador entre os itens

alert(cores.concat(matriz)); // aqui juntamos duas matrizes

cores.push('preto', 'verde');

alert(cores);

alert(cores.pop()); //remove o ultimo item


alert(cores.shift()); // remove o primeiro

alert(cores.splice(1,1)); // remove e retorna um pedaço do array
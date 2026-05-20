//Arrays
const notas = ['Nota uno', 'Nota dos', 'Nota tres'];
const numeros = [1,2,3,4,5,6];
const mixto = [1, 'texto', null, true, {}];

//Create


//push
notas.push('Nota 4');
// unshift()
notas.unshift('Nota 0');
// plice()
notas.splice(1,0,'Nota 1.2');

console.log(notas);


//read
console.log(notas[2]);

//Eliminar (delete)

const notas3 = ['Nota 1', 'Nota 2'];
console.log(notas3.pop()); //elimina ultimo 
console.log(notas3);

const notas4 = ['Nota 1', 'Nota 2'];
console.log(notas4.shift()); //elimina primer valor
console.log(notas4);

const notas5 = ['Nota 1', 'Nota 2'];
console.log(notas5.splice(1,1)); // eliminar posicion 1
console.log(notas5);

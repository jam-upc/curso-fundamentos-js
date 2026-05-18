for (let i = 0; i < 5; i++) {
  console.log(i);
}


const notas = ['nota uno', 'nota dos', 'nota tres'];

for (let i = 0; i < notas.length; i++) {
  console.log(`Índice: ${i} -> Nota: ${notas[i]}`);
}


const frutas = ['manzana', 'pera', 'uva'];

for (const fruta of frutas) {
  console.log(fruta);
  if (fruta === 'manzana') {
    console.log('Es una rica manzana');
  }
}


const persona = { nombre: 'Ana', edad: 25 };
for (const clave in persona) {
  console.log(`Clave: ${clave} -> Valor: ${persona[clave]}`);
}

//Do-while 
let contador = 0;

while (contador < 3) {
  console.log(contador); // Riesgo: nunca cambia 'contador'.
}

let contador = 0;

while (contador < 3) {
  console.log(contador); // Imprime 0, 1, 2.
  contador++;            // Condición de salida garantizada.
}

let numero = 0;

do {
  console.log(`Entra en ${numero}`); // Primera ejecución garantizada.
  numero++;                           // Cambio de estado.
} while (numero < 3);
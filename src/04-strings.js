// Strings

// Variables y comillas simples.
const nombre = 'JavaScript';
const version = '6';

// Imprimir varios valores en una sola línea.
console.log(nombre, version); // JavaScript 6

// Concatenación tradicional con +.
const mensaje = 'Bienvenido a ' + nombre + ', versión ' + version + '.';
console.log(mensaje);


// Template literals con interpolación.
const mensaje2 = `Bienvenido y bienvenida al curso de ${nombre} en su versión: ${version}.`;
console.log(mensaje2);

// Comentar líneas que no se ejecutan.
// console.log('Línea desactivada');

// Expresiones dentro de template literals.
const precio = 100;
const cantidad = 3;
const total = `${precio * cantidad}`; // El resultado queda como string.

console.log(total);        // 300
console.log(typeof total); // 'string'


// Multilínea con template literals.
const nota = `
Mi nota
Este es el contenido
- nota uno
- nota dos
`;
console.log(nota);
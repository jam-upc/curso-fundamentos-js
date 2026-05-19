// doce-scope.js
// Alcances: global, función, bloque

const global = 'Soy global';

function ejemplo() {
  const mensajeFuncion = 'Soy de función';

  if (true) { // bloque
    const mensajeBloque = 'Soy de bloque';
    console.log(mensajeBloque); // dentro del bloque: OK
  }

  console.log(mensajeFuncion); // dentro de la función: OK
}

// Invocar la función: recuerda los paréntesis
console.log(ejemplo()); // no retorna valor: imprime undefined
console.log(global); // accesible en cualquier parte



function ejemplo() {
  const mensajeFuncion = 'Soy de función';

  if (true) {
    const mensajeBloque = 'Soy de bloque';

    // Template literals para ver el contexto
    console.log(`Bloque: ${mensajeBloque}`); // OK
    console.log(`Bloque: ${mensajeFuncion}`); // sube al scope de función: OK
    console.log(`Bloque: ${global}`); // sube al scope global: OK
  }

  console.log(`Función: ${mensajeFuncion}`); // OK

  // OJO: esto causaría error porque mensajeBloque no existe aquí
  // console.log(`Función: ${mensajeBloque}`);

  // Sin return explícito: la función devuelve undefined
}

// Fuera de la función
// OJO: esto causaría error porque mensajeFuncion no existe fuera
// console.log(`Global: ${mensajeFuncion}`);

console.log(`Global: ${global}`); // OK
ejemplo();
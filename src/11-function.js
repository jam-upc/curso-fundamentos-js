// Function

function saludar(nombre){
    return (`Hola ${nombre}`);
}

const mensaje = saludar ("Joan");
console.log(mensaje);

function crearUsuario (nombre,edad){
    return {nombre, edad};
}

const usuario = crearUsuario('Ana', 25);

console.log(usuario);

const multiplicar = (a , b) =>  a * b;
console.log(multiplicar(3,2));

const crearNota = (contenido, titulo = 'sin título') => {
  return {
    titulo,
    contenido,
    creado: Date.now(), // *timestamp* en milisegundos
  };
};

const notaUno = crearNota('Mi contenido');
const notaDos = crearNota('Otro contenido', 'Mi nota');

console.log(notaUno);
console.log(notaDos);
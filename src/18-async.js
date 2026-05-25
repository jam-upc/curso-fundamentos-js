//Async

console.log('1. Inicio');

setTimeout( () =>{ 
    console.log("2. Timeout Ejecutado");
},1000);

console.log("3. Fin");

//Callback

function obtenerDatos(callback) {
  setTimeout(() => {
    callback('datos obtenidos');
  }, 2000);
}

obtenerDatos((resultado) => {
  console.log(resultado);
});

/*obtenerUsuario((usuario) => {
  obtenerNotas(usuario.id, (notas) => {
    procesarNotas(notas, (resultado) => {
      console.log(usuario.nombre, resultado);
    });
  });
});*/

// Promise

const promesa = new Promise((resolve, reject) => {
    const exito = true;
    setTimeout(() =>{
        if (exito){
           resolve('Operación exitosa'); 
        }else{
            reject(new Error('Algo salió mal'));
        }
    }, 1000)
});

promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error('error:', error.message);
  });


  // Utilidad para simular espera sin bloquear
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Funciones con promesas que reutilizan "esperar"
const obtenerUsuario = () => esperar(200).then(() => ({ id: 1, nombre: 'Usuario' }));
const obtenerNotas = (usuarioId) => esperar(200).then(() => ({ usuarioId, notas: [10, 9, 8] }));
const procesarNotas = ({ notas }) => esperar(200).then(() => ({ promedio: notas.reduce((a,b)=>a+b)/notas.length }));

// Encadenamiento legible con then/catch
obtenerUsuario()
  .then((usuario) => obtenerNotas(usuario.id))
  .then((data) => procesarNotas(data))
  .then((resultado) => console.log('Resultado:', resultado))
  .catch((error) => console.error('Error:', error));


  // Async/await

  // Misma utilidad para tiempos de espera
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Funciones asíncronas
async function obtenerUsuario() {
  await esperar(200);
  return { id: 1, nombre: 'Usuario' };
}

async function obtenerNotas(usuarioId) {
  await esperar(200);
  return { usuarioId, notas: [10, 9, 8] };
}

async function procesarNotas({ notas }) {
  await esperar(200);
  const promedio = notas.reduce((a, b) => a + b) / notas.length;
  return { promedio };
}

// Orquestación con try/catch
async function main() {
  try {
    const usuario = await obtenerUsuario();
    const data = await obtenerNotas(usuario.id);
    const resultado = await procesarNotas(data);
    console.log('Usuario:', usuario.nombre);
    console.log('Resultado:', resultado);
  } catch (error) {
    console.error('Error:', error); // Si una promesa se rechaza, cae aquí.
  }
}

main();
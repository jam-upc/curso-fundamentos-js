//Objects

const nota = {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createAt: Date.now(),
    /*author: { 
        nombre: 'Joan',
        apellido: 'Alsina'
    }*/
}


console.log(nota.id);

const campo = 'content';
console.log (nota[campo]);
console.log(nota.author?.nombre);


//Destructuracion

const nota2= {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createAt: Date.now(),
}

const {title,content} = nota2;
console.log(title);

//Spead

const nota3 = {id:2, title: 'Hola'};
const data = {esAdmin: true};
const copia = {...nota3};

console.log(nota3,copia);

const notaActualizada = {
    ...nota3,
    ...data,
    edad: 19
}
console.log(notaActualizada);


//Objects.keys

console.log(Object.keys(notaActualizada));
console.log(Object.values(notaActualizada));
console.log(Object.entries(notaActualizada));


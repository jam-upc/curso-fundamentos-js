//Metodos orde superior

// Estructura común: arreglo de objetos
const notas = [
  { id: 1, title: 'Nota uno', content: 'Contenido 1' },
  { id: 2, title: 'Nota dos', content: 'Contenido 2' },
  { id: 3, title: 'Nota tres', content: 'Contenido 3' }
];


// Extraer solo los títulos con map (no muta notas)
const titulos = notas.map(nota => nota.title);
console.log(titulos); // ['Nota uno', 'Nota dos', 'Nota tres']



const notasConFecha = notas.map(nota => ({
  ...nota,                 // spread operator: copia propiedades existentes
  fechaCreacion: Date.now() // nueva propiedad
}));

console.log(notasConFecha);
// Cada objeto mantiene sus campos y agrega fechaCreacion.



const notas2 = [
  { id: 1, title: 'Nota uno', esFavorita: true },
  { id: 2, title: 'Nota dos', esFavorita: false },
  { id: 3, title: 'Nota tres', esFavorita: true }
];

// Filtrar solo las favoritas
const favoritas = notas2.filter(nota => nota.esFavorita);
console.log(favoritas); // elementos con esFavorita === true



// Buscar la nota cuyo título contenga 'nota uno' sin importar el caso
const buscadas = notas2.filter(nota =>
  nota.title.toLowerCase().includes('nota uno')
);

console.log(buscadas); // retorna la coincidencia exacta por contenido




//find 
const notas3 = [
  { id: 1, title: 'Nota uno', esFavorita: true },
  { id: 2, title: 'Nota dos', esFavorita: false },
  { id: 3, title: 'Nota tres', esFavorita: true }
];

const nota = notas3.find (n => n.id === 2);
console.log(nota);
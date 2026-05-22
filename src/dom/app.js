const opiniones = [
  {
    id: 'op-1',
    nombre: 'María',
    rating: 5,
    comentario: 'Llegó rápido y la calidad es excelente.',
    fecha: '2025-01-10',
  },
  {
    id: 'op-2',
    nombre: 'Carlos',
    rating: 4,
    comentario: 'Buen producto. El empaque podría mejorar.',
    fecha: '2025-01-22',
  },
  {
    id: 'op-3',
    nombre: 'Luisa',
    rating: 5,
    comentario: 'Muy cómodo. Compraría de nuevo.',
    fecha: '2025-02-03',
  },

  {
    id: 'op-5',
    nombre: 'Oscar',
    rating: 5,
    comentario: 'Muy cómodo. Compraría de nuevo.',
    fecha: '2025-02-03',
  },
];

/**
 * 2. LA FÁBRICA DE ELEMENTOS (createOpinionElement)
 * Esta función se encarga de crear la estructura HTML en la memoria.
 * Recibe UN objeto opinión y devuelve UN elemento <article> completamente montado,
 * pero todavía flotando en el aire (invisible para el usuario).
 */
function createOpinionElement(opinion) {
    // Creamos la etiqueta principal <article class="opinion" data-id="op-1">
    const article = document.createElement('article');
    article.classList.add('opinion');
    article.dataset.id = opinion.id; // Guarda el ID en el HTML de forma invisible (muy útil para el futuro)
    
    // Creamos el contenedor del encabezado (<header>)
    const header = document.createElement('header');
    
    // Creamos el contenedor de los metadatos (nombre y estrellas)
    const meta = document.createElement('div');
    meta.classList.add('meta');

    // Creamos la etiqueta para el nombre (<strong>María</strong>)
    const nombre = document.createElement('strong');
    nombre.textContent = opinion.nombre;

    // Creamos la etiqueta para la puntuación (<span>* 5/5</span>)
    const rating = document.createElement('span');
    rating.textContent = `* ${opinion.rating}/5`;

    // Metemos el nombre y las estrellas dentro del div "meta"
    meta.appendChild(nombre);
    meta.appendChild(rating);

    // Creamos la etiqueta para la fecha (<small class="muted">2025-01-10</small>)
    const fecha = document.createElement('small');
    fecha.classList.add('muted');
    fecha.textContent = opinion.fecha;

    // Metemos el bloque "meta" y la "fecha" dentro del <header>
    header.appendChild(meta);
    header.appendChild(fecha);

    // Creamos el párrafo para el texto de la opinión (<p>Llegó rápido...</p>)
    const comentario = document.createElement('p');
    comentario.textContent = opinion.comentario;

    // Finalmente, metemos el <header> y el <p> dentro del <article> principal
    article.appendChild(header);
    article.appendChild(comentario);

    // Devolvemos toda la estructura montada pero en memoria
    return article;
}

/**
 * 3. EL PINTOR / EL RENDERIZADOR (renderOpinions)
 * Esta función es la que coge la lista de datos y la plasma en el navegador real.
 */
function renderOpinions(list){
    // Buscamos el contenedor real que está en el index.html (<div id="opiniones">)
    const contenedor = document.querySelector('#opiniones');
    
    // TRUCO PRO: Borramos todo lo que hubiera antes dentro de este contenedor.
    // Así, si añadimos o filtramos opiniones, no se duplicarán las viejas. ¡Limpiamos el lienzo!
    contenedor.replaceChildren();

    // Recorremos la lista de opiniones (los objetos de datos)
    list.forEach((opinion) => {
        // Pasamos el objeto actual por la "fábrica" para que nos devuelva el HTML en memoria
        const el = createOpinionElement(opinion);
        
        // Colgamos ese elemento en el contenedor real de la pantalla. ¡Ahora el usuario ya lo ve!
        contenedor.appendChild(el);
    });
}

// 4. LA EJECUCIÓN
// Llamamos a la función pasándole nuestro array para que se ejecute todo al cargar la página
renderOpinions(opiniones);
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

function createOpinionElement(opinion) {
    const article = document.createElement('article');
    article.classList.add('opinion');
    article.dataset.id = opinion.id;
    
    const header = document.createElement('header');
    const meta = document.createElement('div');
    meta.classList.add('meta');

    const nombre = document.createElement('strong');
    nombre.textContent = opinion.nombre;

    const rating = document.createElement('span');
    rating.textContent = `* ${opinion.rating}/5`;

    meta.appendChild(nombre);
    meta.appendChild(rating);

    const fecha = document.createElement('small');
    fecha.classList.add('muted');
    fecha.textContent = opinion.fecha;

    header.appendChild(meta);
    header.appendChild(fecha);

    const comentario = document.createElement('p');
    comentario.textContent = opinion.comentario;

    article.appendChild(header);
    article.appendChild(comentario);

    return article;
}

function renderOpinions(list){
    const contenedor = document.querySelector('#opiniones');
    contenedor.replaceChildren();

    list.forEach((opinion) => {
        const el = createOpinionElement(opinion);
        contenedor.appendChild(el);
    });
}


renderOpinions(opiniones);
//joan
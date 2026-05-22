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

function renderOpinions(list) {
  const contenedor = document.querySelector('#opiniones');
  contenedor.replaceChildren();

  list.forEach((opinion) => {
    const el = createOpinionElement(opinion);
    contenedor.appendChild(el);
  });
}

renderOpinions(opiniones);

const CONTACT_STORAGE_KEY = 'form';

function renderSavedMessage() {
  const box = document.querySelector('#mensaje-guardado');
  const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
  const data = JSON.parse(raw);

  box.classList.remove('hidden');
  box.innerHTML = `<p><strong>último mensaje guardado</strong></p>
  <p><strong>Nombre:</strong> ${data.name}</p>
  <p><strong>Mensaje:</strong> ${data.message}</p>
  `;
}

function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const name = String(formData.get('name'));
  const message = String(formData.get('message'));

  const payload = {
    name,
    message,
    date: new Date().toISOString(),
  };

  localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(payload));

  renderSavedMessage();

  form.reset();
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', handleContactSubmit);
}

renderSavedMessage();
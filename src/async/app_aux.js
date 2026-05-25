const API_URL = 'https://api.escuelajs.co/api/v1/products';

const grid = document.querySelector('#grid-productos');
const statusText = document.querySelector('#status');

function setStatus(message) {
  statusText.textContent = message;
}

function formatPrice(price) {
  return `$${price}`;
}

function getProductImage(product) {
  return product.images[0];
}

function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'card';

  const img = document.createElement('img');
  img.className = 'product-image';
  img.src = getProductImage(product);
  img.alt = product.title;
  img.loading = 'lazy';
  img.referrerPolicy = 'no-referrer';
  img.crossOrigin = 'anonymous';

  const title = document.createElement('h3');
  title.textContent = product.title;

  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = formatPrice(product.price);

  card.append(img, title, price);

  return card;
}

function renderProducts(products) {
  grid.innerHTML = '';

  for (const product of products) {
    const card = createProductCard(product);
    grid.append(card);
  }
}

async function loadProducts() {
  try {
    setStatus('Cargando Productos...');
    const response = await fetch(API_URL);
    const products = await response.json();
    const firstNine = products.slice(0, 9);
    renderProducts(firstNine);
    setStatus('');
  } catch (error) {
    console.error(error);
    setStatus('No se logro cargar los propductos.');
  }
}

loadProducts();
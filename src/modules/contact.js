
const CONTACT_STORAGE_KEY = 'form';

function renderSavedMessage() {
  const box = document.querySelector("#mensaje-guardado");
  const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
  const data = JSON.parse(raw);

  box.classList.remove("hidden");
  box.innerHTML = `<p><strong>último mensaje guardado</strong></p>
  <p><strong>Nombre:</strong> ${data.name}</p>
  <p><strong>Mensaje:</strong> ${data.message}</p>
  `;
}

function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const name = String(formData.get("name"));
  const message = String(formData.get("message"));

  const payload = {
    name,
    message,
    date: new Date().toISOString(),
  };

  localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(payload));

  renderSavedMessage();

  form.reset();
}

export function initContact() {
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }
  renderSavedMessage();
}

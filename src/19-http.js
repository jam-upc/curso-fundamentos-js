// HTTP


/*fetch(FAKE_API)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error", error));
*/
//Fetch POST/PUT/DELETE

const FAKE_API = "https://api.escuelajs.co/api/v1/products";

fetch(FAKE_API, {
  method: "POST", // También: 'PUT', 'DELETE', 'GET' (implícito si no lo defines).
  headers: {
    "Content-Type": "application/json",
    Accept: 'application/json',
    // Aquí puedes incluir autenticación u otros metadatos si el servidor lo requiere.
  },
  body: JSON.stringify({
    // Estructura mínima que la API necesita para crear un recurso.
    // Respétala según su documentación.
    title: "Producto de prueba",
    price: 999,
    description: "Creado desde fetch",
    categoryId: 1,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"],
  }),
});
  /*.then((res) => res.json())
  .then((data) => {
    console.log(data); // Recurso creado/actualizado/eliminado según el método.
  })
  .catch((err) => console.error(err));*/



  const FAKEAPI = 'https://api.escuelajs.co/api/v1/products';

const FAKE_API = "https://api.escuelajs.co/api/v1/products";

fetch(FAKE_API, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    title: "Producto de prueba Joan",
    price: 999,
    description: "Creado desde fetch con una categoría real",
    categoryId: 1, 
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"],
  }),
})
.then(response => response.json())
.then(data => console.log("¡Éxito! Producto creado:", data))
.catch(error => console.error("Error:", error));



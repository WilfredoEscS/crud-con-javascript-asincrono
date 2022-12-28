import { clientServices } from "../services/client-services.js";

const formulario = document.querySelector("[data-form");

const obtenerInformacion = () => {
  //Crea una instancia de la clase URL
  const url = new URL(window.location);
  // Obtiene el id de la URLmediante la propiedad searchParams
  const id = url.searchParams.get("id");

  if (id === null) window.location.href = "/screens/error.html";

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");

  clientServices.detalleCliente(id).then((perfil) => {
    nombre.value = perfil.nombre;
    email.value = perfil.email;
  });
};
obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  clientServices.actualizarCliente(nombre, email, id).then(() => {
    window.location.href = "/screens/edicion_concluida.html";
  });
});

//Hace una conexion con la URL y genera una promesa
//Al completarse la promesa la devuelve y transforma a JSON
const ListaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

export const clientServices = {
  ListaClientes,
};

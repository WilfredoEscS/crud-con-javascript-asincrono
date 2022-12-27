//Hace una conexion con la URL y genera una promesa
//Al completarse la promesa la devuelve y transforma a JSON
const ListaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    //Metodo de la peticion
    method: "POST",
    //Informa al servidor el tipo de archivo que recibira
    headers: {
      "Content-Type": "application/json",
    },
    //Cuerpo de la peticion
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

export const clientServices = {
  ListaClientes,
  crearCliente,
  eliminarCliente,
};

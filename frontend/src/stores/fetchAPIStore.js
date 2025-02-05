import { writable } from "svelte/store";
import axios from "axios";
import { mostrarToast } from "./toastStore";

// Store para manejar solicitudes HTTP
export const fetchAPI = (() => {
  // Creamos un store básico de Svelte usando `writable`. Aunque no almacenamos datos reactivos aquí,
  // el store permite que esta funcionalidad siga las convenciones de Svelte y sea consistente con otros stores.
  const { subscribe } = writable(null);

  // Función interna para manejar solicitudes HTTP genéricas.
  // Recibe el método HTTP, la URL y los datos opcionales (para POST o PUT).
  const request = async (method, url, data = null) => {
    try {
      // Realizamos la solicitud HTTP usando Axios.
      const response = await axios({
        method,
        url,
        data,
      });
      // Retornamos los datos de la respuesta del servidor.
      return response.data;
    } catch (error) {
      // Si ocurre un error, mostramos un mensaje de notificación al usuario.
      mostrarToast(`Error en la solicitud: ${error.message}`);
      // Propagamos el error para que pueda ser manejado por las funciones específicas que usan este store.
      throw error;
    }
  };

  // Retornamos un objeto con métodos específicos para realizar solicitudes HTTP.
  return {
    subscribe, // Permite que este store sea reactivo, aunque no usemos la reactividad directamente aquí.
    get: (url) => request("GET", url), // Método para realizar solicitudes GET. Recibe una URL y devuelve los datos obtenidos.
    post: (url, data) => request("POST", url, data), // Método para realizar solicitudes POST. Envía datos al servidor y devuelve la respuesta.
    put: (url, data) => request("PUT", url, data), // Método para realizar solicitudes PUT. Actualiza un recurso en el servidor con los datos proporcionados.
    delete: (url) => request("DELETE", url), // Método para realizar solicitudes DELETE. Elimina un recurso del servidor según la URL proporcionada.
  };
})();

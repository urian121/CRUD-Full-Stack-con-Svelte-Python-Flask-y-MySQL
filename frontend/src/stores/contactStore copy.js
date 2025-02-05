import {
  URL_API,
  contactos,
  limpiarFormulario,
} from "../stores/camposFormStore";
import { mostrarToast } from "../stores/toastStore";
import axios from "axios";

/**
 * Función genérica para manejar solicitudes HTTP.
 * @param {string} method - Método HTTP ("GET", "POST", "DELETE", etc.).
 * @param {string} url - URL de la solicitud.
 * @param {Object} data - Datos a enviar (opcional).
 * @returns {Promise<Object>} - Respuesta de la API.
 */
const fetchAPI = async (method, url, data = null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    mostrarToast(`Error en la solicitud: ${error.message}`);
    throw error; // Propaga el error para manejarlo en las funciones específicas
  }
};

// Cargar contactos desde la API
export const cargarContactos = async () => {
  try {
    const datos = await fetchAPI("GET", URL_API);
    contactos.set(datos);
  } catch (error) {
    console.error("Error al cargar contactos:", error);
  }
};

// Agregar un nuevo contacto
export const agregarContacto = async (nuevoContacto) => {
  try {
    const contactoCreado = await fetchAPI("POST", URL_API, nuevoContacto);

    // Actualizar la lista de contactos
    contactos.update((lista) => [...lista, contactoCreado]);

    limpiarFormulario();
    mostrarToast(`El contacto ${nuevoContacto.nombre} se ha agregado conxito!`);
  } catch (error) {
    mostrarToast(`Error al agregar el contacto ${error}`);
  }
};

// Eliminar un contacto
export const eliminarContacto = async (id) => {
  try {
    await fetchAPI("DELETE", `${URL_API}/${id}`);

    // Filtra la lista de contactos para remover el eliminado
    contactos.update((lista) => lista.filter((contacto) => contacto.id !== id));

    mostrarToast("Contacto eliminado con éxito.");
  } catch (error) {
    console.error("Error al eliminar contacto:", error);
  }
};
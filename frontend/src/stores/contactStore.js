import {
  URL_API,
  contactos,
  limpiarFormulario,
} from "../stores/camposFormStore";
import { mostrarToast } from "../stores/toastStore";
import { fetchAPI } from "./fetchAPIStore";

// Cargar contactos desde la API
export const cargarContactos = async () => {
  try {
    const datos = await fetchAPI.get(URL_API); // Realiza una solicitud GET
    contactos.set(datos); // Actualiza el store de contactos con los datos recibidos
  } catch (error) {
    console.error("Error al cargar contactos:", error);
  }
};

// Agregar un nuevo contacto
export const agregarContacto = async (nuevoContacto) => {
  try {
    const contactoCreado = await fetchAPI.post(URL_API, nuevoContacto);

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
    await fetchAPI.delete(`${URL_API}/${id}`);

    // Filtra la lista de contactos para remover el eliminado
    contactos.update((lista) => lista.filter((contacto) => contacto.id !== id));

    mostrarToast("Contacto eliminado con éxito.");
  } catch (error) {
    console.error("Error al eliminar contacto:", error);
  }
};
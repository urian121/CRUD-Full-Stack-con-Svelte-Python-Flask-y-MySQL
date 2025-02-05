import {
  nombre,
  sexo,
  profesion,
  edad,
  habla_ingles,
  URL_API,
  limpiarFormulario,
} from "../stores/camposFormStore";
import { mostrarToast } from "../stores/toastStore";
import { cargarContactos } from "../stores/contactStore";
import { fetchAPI } from "./fetchAPIStore";
import { writable } from "svelte/store";

// Store para el contacto en edición
export const contactoEditar = writable(null);

/**
 * Función para cargar el contacto a editar.
 * @param {number} id - ID del contacto a editar.
 */
export async function editarContacto(id) {
  console.log("ID del contacto a editar:", id);
  try {
    const contacto = await fetchAPI.get(`${URL_API}/${id}`);
    console.log("Datos del contacto a editar:", contacto);

    // Rellenar el formulario con los datos del contacto
    sexo.set(contacto.sexo.trim());
    nombre.set(contacto.nombre);
    profesion.set(contacto.profesion);
    edad.set(contacto.edad);
    habla_ingles.set(contacto.habla_ingles);

    // Guarda el contacto en edición
    contactoEditar.set(contacto);
  } catch (error) {
    mostrarToast(`Error al obtener el contacto ${error}`);
  }
}

/**
 * Función para actualizar un contacto.
 * @param {number} id_contacto - ID del contacto a actualizar.
 * @param {Object} data - Datos actualizados del contacto.
 */
export const actualizarContacto = async (id_contacto, data) => {
  try {
    const response = await fetchAPI.put(`${URL_API}/${id_contacto}`, data);
    console.log("Respuesta del servidor:", response.message);

    // Recargar la lista de contactos y limpiar el formulario
    await cargarContactos();

    limpiarFormulario();
    contactoEditar.set(null); // Reinicia el store `contactoEditar`
    mostrarToast(`Contacto ${data.nombre} actualizado con éxito`);
  } catch (error) {
    mostrarToast(`Error al actualizar el contacto ${error}`);
  }
};

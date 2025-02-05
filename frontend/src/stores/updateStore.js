import {
  nombre,
  sexo,
  profesion,
  edad,
  habla_ingles,
  URL_API,
  limpiarFormulario,
  mostrarToast,
} from "../stores/camposFormStore";
import { cargarContactos } from "../stores/contactStore";
import { writable } from "svelte/store";
import axios from "axios";

export const contactoEditar = writable(null);

// Función para cargar el contacto a editar
export async function editarContacto(id) {
  try {
    const response = await axios.get(`${URL_API}/${id}`);
    const contacto = response.data;
    console.log("Datos del contacto a editar:", contacto);

    // Rellenar el formulario con los datos del contacto
    sexo.set(contacto.sexo.trim());
    nombre.set(contacto.nombre);
    profesion.set(contacto.profesion);
    edad.set(contacto.edad);
    habla_ingles.set(contacto.habla_ingles);

    contactoEditar.set(contacto);
  } catch (error) {
    console.error("Error al obtener el contacto:", error);
  }
}

// Función para actualizar un contacto
export const actualizarContacto = async (id_contacto, data) => {
  try {
    const response = await axios.put(`${URL_API}/${id_contacto}`, data);
    console.log("Respuesta del servidor:", response.data);
    await cargarContactos(); // Recargar la lista desde la API

    limpiarFormulario();
    mostrarToast("Contacto actualizado con éxito");
  } catch (error) {
    console.error("Error al actualizar el contacto:", error);
    alert("Hubo un error al actualizar el contacto");
  }
};

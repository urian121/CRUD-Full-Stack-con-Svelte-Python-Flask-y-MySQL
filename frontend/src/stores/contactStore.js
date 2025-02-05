import { writable } from "svelte/store";
import axios from "axios";

const URL_API = "http://127.0.0.1:5000/contactos";

// Store para contactos
export const contactos = writable([]);

// Cargar contactos desde la API
export const cargarContactos = async () => {
  try {
    const response = await axios.get(URL_API);
    contactos.set(response.data);
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Agregar un nuevo contacto
export const agregarContacto = async (nuevoContacto) => {
  try {
    const response = await axios.post(URL_API, nuevoContacto);
    contactos.update((lista) => [...lista, response.data]);

    // Actualizar la lista de contactos
    contactos.update((lista) => [...lista]);
  } catch (error) {
    console.error("Error al agregar el contacto:", error);
  }
};

// Eliminar un contacto
export const eliminarContacto = async (id) => {
  try {
    await axios.delete(`${URL_API}/${id}`);
    contactos.update((lista) => lista.filter((contacto) => contacto.id !== id));
  } catch (error) {
    console.error("Error al eliminar el contacto:", error);
  }
};

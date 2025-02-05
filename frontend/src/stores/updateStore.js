import { writable } from "svelte/store";
import { get } from "svelte/store";
import axios from "axios";

export const contactoEditar = writable(null); // Esto ahora es un store reactivo
let nombre = "";
let sexo = "Masculino";
let profesion = "";
let edad = 18;
let habla_ingles = false;

const URL_API = "http://127.0.0.1:5000/contactos";

// Función para cargar el contacto a editar
export async function editarContacto(id) {
  try {
    const response = await axios.get(`${URL_API}/${id}`);
    const contacto = response.data;
    console.log("Datos del contacto a editar:", contacto);
    // Rellenar el formulario con los datos del contacto
    nombre = contacto.nombre;
    sexo = contacto.sexo;
    profesion = contacto.profesion;
    edad = contacto.edad;
    habla_ingles = contacto.habla_ingles;
    contactoEditar.set(contacto); // Usamos .set() para actualizar el store
  } catch (error) {
    console.error("Error al obtener el contacto:", error);
  }
}

// Función para enviar el formulario (ya sea para agregar o editar)
export async function enviarFormulario() {
  const data = {
    nombre,
    sexo,
    profesion,
    edad,
    habla_ingles,
  };

  try {
    if (get(contactoEditar)) {
      // Si existe un contacto a editar, lo actualizamos
      const response = await axios.put(
        `${URL_API}/${get(contactoEditar).id}`,
        data
      );
      console.log(response.data);
      alert("Contacto actualizado con éxito");
    } else {
      // Si no hay contacto a editar, creamos uno nuevo
      const response = await axios.post(URL_API, data);
      console.log(response.data);
      alert("Contacto creado con éxito");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un error al enviar el formulario");
  }
}

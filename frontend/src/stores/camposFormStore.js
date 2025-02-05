/**
 * Usar writable en Svelte permite gestionar el estado de manera reactiva,
 * lo que asegura que cualquier cambio en los valores (como los campos del formulario) se refleje automáticamente en la interfaz sin manipulación directa del DOM.
 * Esto además, facilita la gestión compartida de datos entre componentes, manteniendo la aplicación más organizada y eficiente.
 */

import { writable } from "svelte/store";

// URL de la API de Flask en el servidor de desarrollo local.
export const URL_API = "http://127.0.0.1:5000/contactos";

// Estado inicial de los campos del formulario
export const sexo = writable("Masculino"); // Valor predeterminado
export const nombre = writable(""); // Valor predeterminado
export const profesion = writable(""); // Valor predeterminado
export const edad = writable(18); // Valor predeterminado
export const habla_ingles = writable(false); // Valor predeterminado
export const id = writable(null); // Valor predeterminado

// Store para contactos
export const contactos = writable([]);

/**
 * Función para limpiar el formulario, estableciendo los valores predeterminados en los campos.
 * Esto permite que los campos del formulario estén listos para ingresar nuevos datos o actualizar un contacto existente.
 */
export const limpiarFormulario = () => {
  sexo.set("Masculino");
  nombre.set("");
  profesion.set("");
  edad.set(18);
  habla_ingles.set(false);
  id.set(null);
};
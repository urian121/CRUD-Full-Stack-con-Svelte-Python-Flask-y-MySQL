<script>
  import { onMount } from "svelte";
   import { fly, fade } from "svelte/transition"; // Importar transiciones
  import { cargarContactos, eliminarContacto } from "../stores/contactStore";
  import { contactos } from "../stores/camposFormStore";
  import { editarContacto, contactoEditar } from "../stores/updateStore"; // Importa la función de editar desde el store
  
  // Al montar el componente, cargamos los contactos
  onMount(() => {
    cargarContactos();
  });

  // Función de edición que se pasa al botón de editar
  function editar(personaId) {
    console.log("Editar", personaId);
    editarContacto(personaId);  // Esta función debe cargar el contacto correspondiente en el store
  }
</script>

{#if $contactos.length > 0}
  <div class="card_container">
    {#each $contactos as persona}
      <div class="card px-3 py-3 mb-4 bg-light shadow-sm rounded"
        transition:fly={{ y: 20, duration: 300 }}>
        <p><span class="fw-bold">ID:</span> {persona.id}</p>
        <p class="card-text"><span class="fw-bold">Nombre:</span> {persona.nombre}</p>
        <p class="card-text"><span class="fw-bold">Profesion:</span> {persona.profesion}</p>
        <p class="card-text"><span class="fw-bold">Sexo:</span> {persona.sexo}</p>
        <p class="card-text"><span class="fw-bold">Edad:</span> {persona.edad}</p>
        <p class="card-text"><span class="fw-bold">Habla inglés:</span> {persona.habla_ingles}</p>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <!-- Enlace para editar, que pasa el ID del contacto -->
           <button 
            class="btn btn-primary me-md-2"  
            type="button" 
            on:click={() => editar(persona.id)}
            disabled={$contactoEditar?.id === persona.id}>
            <i class="bi bi-arrow-clockwise"></i> Editar
          </button>
          <button class="btn btn-danger" type="button" on:click={() => eliminarContacto(persona.id)}>
            <i class="bi bi-trash"></i> Eliminar
          </button>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <p class="text-center" transition:fade={{ duration: 500 }}>Cargando lista de contactos...</p>
{/if}

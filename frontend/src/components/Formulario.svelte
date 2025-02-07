<script>
  import {
    nombre,
    sexo,
    profesion,
    edad,
    habla_ingles,
  } from "../stores/camposFormStore";
  import { agregarContacto } from "../stores/contactStore";
  import { contactoEditar, actualizarContacto } from "../stores/updateStore";

  async function enviarFormulario() {
    const data = {
      nombre: $nombre,
      sexo: $sexo,
      profesion: $profesion,
      edad: $edad,
      habla_ingles: $habla_ingles,
    };

    if ($contactoEditar) {
      // Si contactoEditar tiene datos, actualizamos el contacto
      await actualizarContacto($contactoEditar.id, data);
    } else {
      await agregarContacto(data);
    }
  }
</script>

<form on:submit|preventDefault={enviarFormulario}>
  <div class="mb-3">
    <label for="Nombre" class="form-label">Nombre</label>
    <input
      type="text"
      name="nombre"
      bind:value={$nombre}
      class="form-control"
      required
    />
  </div>

  <div class="mb-3">
    <label for="Profesion" class="form-label">Profesión</label>
    <select
      class="form-select"
      name="profesion"
      bind:value={$profesion}
      required
    >
      <option value="">Seleccione una profesión</option>
      <option value="Ingeniero de software">Ingeniero de software</option>
      <option value="Programador Senior">Programador Senior</option>
      <option value="Full Stack">Full Stack</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="Sexo" class="form-label">Sexo</label>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="sexo"
        id="Masculino"
        value="Masculino"
        bind:group={$sexo}
      />
      <label class="form-check-label" for="Masculino"> Masculino </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="sexo"
        bind:group={$sexo}
        value="Femenino"
        id="Femenino"
      />
      <label class="form-check-label" for="Femenino"> Femenino </label>
    </div>
  </div>

  <div class="mb-3">
    <label for="edadRange" class="form-label">
      Edad: <span>{$edad}</span> años
    </label>
    <input
      type="range"
      class="form-range"
      name="edad"
      id="edadRange"
      min="18"
      max="60"
      bind:value={$edad}
    />
  </div>
  <div class="mb-3">
    <label for="Ingles">¿Habla inglés?</label>
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="habla_ingles"
        name="habla_ingles"
        bind:checked={$habla_ingles}
      />
      <label class="form-check-label" for="ingles">
        {$habla_ingles ? "Sí" : "No"}
      </label>
    </div>
  </div>

  <div class="container-fluid">
    <button type="submit" class="btn btn-primary w-100">
      {$contactoEditar ? "Actualizar Contacto" : "Guardar Contacto"}
    </button>
  </div>
</form>

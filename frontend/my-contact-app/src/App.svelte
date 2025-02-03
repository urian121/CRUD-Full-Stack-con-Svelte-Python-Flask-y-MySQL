<script>
  // Importar Bootstrap CSS y sus iconos
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  
  import Formulario from './lib/Formulario.svelte';
  import Contactos from './lib/Contactos.svelte';
</script>

<div class="container">
  <h1>Vite + Svelte</h1>

  <div class="row">
    <div class="col-md-4">
      <Formulario />
    </div>

    <div class="col-md-8">
      <Contactos />
    </div>
  </div>
</div>
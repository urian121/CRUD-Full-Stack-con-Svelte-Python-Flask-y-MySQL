<script>
  // Importar Bootstrap CSS y sus iconos
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  
  import Formulario from './lib/Formulario.svelte';
  import Contactos from './lib/Contactos.svelte';
</script>

<style>
:global(body) {
    font-family: Arial, sans-serif;
    background-color: cornsilk !important;
}
:global(.container) {
 background-color: #fff !important;
 border-radius: 5px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
<div class="container px-4 py-5">
  <h1 class="pb-2 border-bottom text-center fw-bold mb-5">Crud Full Stack con Svelte - Python - Flask - MySQL</h1>

  <div class="row">
    <div class="col-md-4">
      <h2 class="mb-4 text-center border-bottom">Formulario</h2>
      <Formulario />
    </div>

    <div class="col-md-8">
      <h2 class="mb-4 text-center border-bottom">Lista de Contactos</h2>
      <Contactos />
    </div>
  </div>
</div>
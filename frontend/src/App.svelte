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
h1{
  font-weight: 900 !important;
}
.color-morado{
  color: #6401e4 !important;
}
:global(.btn-primary) {
  background-color: #6401e4 !important;
  border-color: #6401e4 !important;
}
:global(.btn-primary:hover) {
  background-color: #4d00b3 !important;
}
:global(.form-check-input:checked){
  background-color: #6401e4 !important;
  border: #4d00b3 !important;
}


:global(input[type="range"]::-moz-range-thumb) {
  background-color: #4d00b3 !important;
}
</style>
<div class="container px-4 py-5">
  <h1 class="pb-2 border-bottom text-center mb-5">Crud <span class="color-morado">Full Stack</span> con Svelte - Python - Flask - MySQL</h1>

  <div class="row">
    <div class="col-md-4">
      <h2 class="mb-4 text-center border-bottom fw-bold">Formulario</h2>
      <Formulario />
    </div>

    <div class="col-md-8">
      <h2 class="mb-4 text-center border-bottom fw-bold">Lista de Contactos</h2>
      <Contactos />
    </div>
  </div>
</div>
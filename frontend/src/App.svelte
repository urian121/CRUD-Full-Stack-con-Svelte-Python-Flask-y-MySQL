<script>
  // Importar Bootstrap CSS y sus iconos
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import './assets/css/global.css';
  
  import Formulario from './components/Formulario.svelte';
  import Contactos from './components/Contactos.svelte';
</script>

<div class="container px-4 py-5">
  <h1 class="pb-2 border-bottom text-center mb-5">Crud <span class="color-morado">Full Stack</span> con Svelte - Python - Flask - MySQL</h1>

  <div class="row">
    <div class="col-md-4">
      <h2 class="mb-4 text-center border-bottom fw-bold">Crear Nuevo Contacto</h2>
      <Formulario />
    </div>

    <div class="col-md-8">
      <h2 class="mb-4 text-center border-bottom fw-bold">Lista de Contactos</h2>
      <Contactos />
    </div>
  </div>
</div>
<template>
    <div>
      <Navbar></Navbar>
      <div class="titulo">
        <h1 class="display-4 animated infinite bounce delay-2s" style="color: #3e3e3e;">Bem-Vindo</h1>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <Relogio></Relogio>
          </div>
          <div class="col-md-4 d-flex justify-content-center align-items-center">
            <div class="vertical-line"></div>
          </div>
          <div class="col-md-4">
            <Calendario></Calendario>
          </div>
        </div>
  
        <div class="row mt-5">
          <div class="col-md-4">
            <PontoManha></PontoManha>
          </div>
          <div class="col-md-4 d-flex justify-content-center align-items-center">
            <div class="vertical-line"></div>
          </div>
          <div class="col-md-4">
            <PontoTarde></PontoTarde>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  import Relogio from '../components/Relogio.vue';
  import Calendario from '../components/Calendario.vue';
  import PontoManha from '../components/PontoManha.vue'; 
  import PontoTarde from '../components/PontoTarde.vue'; 
  
  export default {
    components: {
      Navbar,
      Relogio,
      Calendario,
      PontoManha,
      PontoTarde
    }
  };
  </script>
  
  <style scoped>
  .titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }
  
  .vertical-line {
    border-left: 1px solid #ccc;
    height: 250px;
  }
  </style>
  
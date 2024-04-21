<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <img src="../assets/ponto-cartao.png" alt="Logo" height="40">
        </a>
  
        <!-- Botão de colapso para dispositivos móveis -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Itens da barra de navegação -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- Ícone de engrenagem -->
            <li class="nav-item">
              <router-link to="/settings" class="nav-link">
                <img src="../assets/settings.svg" alt="Settings" height="30">
              </router-link>
            </li>
            <!-- Ícone de sair -->
            <li class="nav-item">
              <router-link to="/Login" class="nav-link">
                <img src="../assets/sair.svg" alt="Logo" height="20">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>

  </style>
  
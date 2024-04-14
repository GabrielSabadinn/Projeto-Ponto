<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <img src="../assets/vue.svg" alt="Logo" height="30">
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
              <a class="nav-link" href="../assets/settings.svg">
                <i class="fas fa-cog"></i>
              </a>
            </li>
            <!-- Ícone de sair -->
            <li class="nav-item">
              <a class="nav-link" href="../assets/sair.svg">
                <i class="fas fa-sign-out-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    // Adicione as props, dados e métodos necessários aqui
  };
  </script>
  
  <style scoped>

  </style>
  
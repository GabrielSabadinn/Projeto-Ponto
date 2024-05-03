<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Logo -->
      <router-link to="/Home">
      <a class="navbar-brand" href="#">
        <img src="../assets/ponto-cartao.png" alt="Logo" height="40">
      </a>
    </router-link>
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
            <a @click="logout" class="nav-link" style="cursor: pointer;">
              <img src="../assets/sair.svg" alt="Logout" height="20">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
  // Limpar o token do localStorage
  localStorage.removeItem('token');
  console.log('Token de autenticação removido');

  // Limpar o cookie 'userData'
  document.cookie = 'userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  console.log('Cookie userData removido');

  // Redirecionar para a página de login
  this.$router.push({ path: '/Login' });
}

  }
};
</script>


<style scoped>
/* Seu estilo CSS existente */
</style>

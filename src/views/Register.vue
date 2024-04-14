<template>
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img src="../assets/register.jpg"
              class="img-fluid" alt="Phone image">
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form @submit.prevent="handleSubmit">
              <div class="form-outline mb-4">
                <input v-model="name" type="text" id="name" class="form-control form-control-lg" />
                <label class="form-label" for="name">Nome</label>
              </div>
              <div class="form-outline mb-4">
                <input v-model="email" type="email" id="email" class="form-control form-control-lg" />
                <label class="form-label" for="email">Email</label>
              </div>
              <div class="form-outline mb-4">
                <input v-model="password" type="password" id="password" class="form-control form-control-lg" />
                <label class="form-label" for="password">Senha</label>
              </div>
              <div class="form-outline mb-4">
                <input v-model="cpf" type="text" id="cpf" class="form-control form-control-lg" />
                <label class="form-label" for="cpf">CPF</label>
              </div>
              <div class="form-outline mb-4">
                <input v-model="birthdate" type="date" id="birthdate" class="form-control form-control-lg" />
                <label class="form-label" for="birthdate">Data de Nascimento</label>
              </div>
              
              <!-- Submit button and "Voltar Para Entrada" button side by side -->
              <div class="d-grid gap-2 d-md-flex justify-content-md-between">
                <button type="submit" class="btn btn-primary btn-lg mb-2">Registre-se</button>
                <button type="button" class="btn btn-primary btn-lg mb-2" @click="goToLogin">Voltar Para Entrada</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        cpf: '',
        birthdate: '',
        rememberMe: false
      };
    },
    methods: {
      handleSubmit() {
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
      },
      goToLogin() {
        this.$router.push({ name: 'Login' }); 
      }
    }
  };
  </script>
  
  <style scoped>
  .divider:after,
  .divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
  }
  </style>
  
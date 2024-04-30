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
import axios from 'axios';

export default {
  methods: {
    handleSubmit() {
      const userData = {
        nome: this.name,
        email: this.email,
        cpf: this.cpf,
        senha: this.password,
        data_nascimento: this.birthdate
      };

      axios.post('http://localhost:3000/registroUsuario/register', userData)
        .then(response => {
          console.log('Usuário registrado com sucesso:', response.data);
          // Redirecionar o usuário para a página de login
          this.$router.push({ path: '/Login' });
        })
        .catch(error => {
          console.error('Erro ao registrar usuário:', error.response.data.message);
          // Exibir uma mensagem de erro para o usuário ou realizar outras ações necessárias
        });
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
  
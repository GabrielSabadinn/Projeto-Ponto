<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6 d-flex flex-column align-items-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid" alt="Phone image">
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form @submit.prevent="handleSubmit">
            <div class="form-outline mb-4">
              <input v-model="email" type="email" id="form1Example13" class="form-control form-control-lg" />
              <label class="form-label" for="form1Example13">Email</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input v-model="password" type="password" id="form1Example23" class="form-control form-control-lg" />
              <label class="form-label" for="form1Example23">Senha</label>
            </div>

            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Checkbox -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="form1Example3" v-model="rememberMe" />
                <label class="form-check-label" for="form1Example3"> Lembre-me </label>
              </div>
              <a href="#!">Esqueceu sua senha?</a>
            </div>

            <!-- Mensagem de erro em vermelho -->
            <p v-if="loginError" class="text-danger">{{ loginError }}</p>

            <!-- Botão de login -->
            <button type="submit" class="btn btn-primary btn-lg mb-2">Logar</button>

            <!-- Divisor -->
            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0 text-muted">Ou</p>
            </div>

            <!-- Botões adicionais -->
            <div class="d-grid gap-2 d-md-flex justify-content-md-between">
              <button type="button" class="btn btn-primary btn-lg mb-2" @click="goToRegister">Registre-se</button>
             
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
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      loginError: '' // Adicione a variável para armazenar a mensagem de erro
    };
  },
  methods: {
    handleSubmit() {
  const userData = {
    email: this.email,
    senha: this.password
  };

  axios.post('http://localhost:3000/auth/login', userData)
    .then(response => {
      console.log(response.data);

      // Serializar o objeto contendo o token e as informações do usuário
      const cookieValue = JSON.stringify(response.data);

      // Armazenar o cookie
      document.cookie = `userData=${cookieValue}; path=/`;

      // Redirecionar para a página "/Home" no frontend
      this.$router.push({ path: '/Home' });
    })
    .catch(error => {
      console.error('Erro ao fazer login:', error.response.data.message);
      this.loginError = 'Email ou senha incorretos'; // Define a mensagem de erro
    });
},



  goToRegister() {
    this.$router.push({ name: 'Register' });
  },
 
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
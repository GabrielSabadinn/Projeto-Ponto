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

            <button type="submit" class="btn btn-primary btn-lg mb-2">Logar</button>
            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0 text-muted">Ou</p>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-between">
              <button type="button" class="btn btn-primary btn-lg mb-2" @click="goToRegister">Registre-se</button>
              <button class="btn btn-primary btn-lg mb-2" style="background-color: #f12929" @click="continueWithGoogle">
                <i class="fab fa-google me-2"></i>Continuar com Google
              </button>
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
      email: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    handleSubmit() {
      // Aqui você pode adicionar a lógica para autenticar o usuário
    },
    goToRegister() {
      this.$router.push({ name: 'Register' }); 
    },
    continueWithGoogle() {
      // Lógica de continuar com o Google (pode ser adicionada aqui)
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

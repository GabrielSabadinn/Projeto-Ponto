<template>
  <div class="ponto-container">
    <h1 class="Title">2º Turno</h1>
    <div class="ponto-time">
      <span>Horário padrão de entrada: 13:30</span>
      <span class="ml-2 aviso"><br>(*Horário estabelecido pela empresa)</span>
    </div>
    <div class="ponto-time">
      <span>Horário padrão de saída: 18:00</span>
      <span class="ml-2 aviso"><br>(*Horário estabelecido pela empresa)</span>
    </div>
    <button @click="abrirModal" class="btn btn-primary">Bater Ponto</button>
    <!-- Modal -->
    <div class="modal" :class="{ 'd-block': modalAberto }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Escolha o horário de registro</h5>
            <button type="button" class="close" @click="fecharModal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Selecione o horário que deseja registrar:</p>
            <input type="time" v-model="horarioSelecionado" class="form-control">
            <div class="form-check mt-3">
              <input class="form-check-input" type="radio" id="entrada" value="entrada" v-model="tipoRegistro">
              <label class="form-check-label" for="entrada">
                Entrada
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="saida" value="saida" v-model="tipoRegistro">
              <label class="form-check-label" for="saida">
                Saída
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="fecharModal">Fechar</button>
            <button type="button" class="btn btn-primary" @click="registrarPonto">Registrar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Exibir o horário registrado -->
    <div v-if="horarioRegistrado" class="mt-3">
      <p>Horário registrado: {{ horarioRegistrado }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      modalAberto: false,
      horarioSelecionado: '', // Inicializado como uma string vazia
      tipoRegistro: 'entrada', // Inicializado como 'entrada' por padrão
      horarioRegistrado: null
    };
  },
  methods: {
    abrirModal() {
      this.modalAberto = true;
    },
    fecharModal() {
      this.modalAberto = false;
    },
    registrarPonto() {
  const userDataString = document.cookie.split('; ').find(row => row.startsWith('userData='));
  if (!userDataString) {
    console.error('Informações do usuário não encontradas nos cookies.');
    return;
  }
  const userData = JSON.parse(userDataString.split('=')[1]);
  const usuario_id = userData.user.id;

  const tipo = this.tipoRegistro; // Obtendo o tipo de registro atualizado

  const dataHoraFormatada = new Date().toISOString().slice(0, 10) + ' ' + this.horarioSelecionado; // Concatenando a data atual com o horário selecionado

  let data_fim_intervalo = null;
  let data_saida = null;

  if (tipo === 'entrada') {
    // No segundo turno, a entrada é registrada como data_fim_intervalo
    data_fim_intervalo = dataHoraFormatada;
  } else {
    // No segundo turno, a saída é registrada como data_saida
    data_saida = dataHoraFormatada;
    // Data de entrada já foi cadastrada anteriormente, então não é necessário alterá-la aqui
  }

  const dadosPonto = {
    usuario_id,
    data_fim_intervalo,
    data_saida
  };

  axios.post('http://localhost:3000/ponto/cadastrar', dadosPonto, {
    headers: {
      Authorization: `Bearer ${this.$store.state.token}` // Enviando token de autenticação
    }
  })
  .then(response => {
    console.log(response.data.message);
    this.horarioRegistrado = `${tipo} registrado: ${this.horarioSelecionado}`;
    this.fecharModal();
  })
  .catch(error => {
    console.error('Erro ao cadastrar ponto:', error.response.data.message);
    // Trate o erro de acordo com sua lógica de frontend
  });
}

  }
};
</script>




<style scoped>
.ponto-container {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 500px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); 
}
.Title {
  font-size: 24px;
}
.aviso {
  color: red;
  font-weight: 500;
}
.ponto-time {
  margin-bottom: 10px;
}
button {
  margin-top: 10px;
  padding: 10px 20px;
  cursor: pointer;
}
.modal {
  display: none;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.modal-dialog {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.modal-content {
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-body {
  margin-bottom: 20px;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>

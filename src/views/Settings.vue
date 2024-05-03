<template>
  <div>
    <!-- Navbar -->
    <Navbar />
    <!-- Container -->
    <div class="container mt-4">
      <div class="row">
        <!-- Coluna do perfil do usuário -->
        <div class="col-md-3">
          <!-- Ícone do usuário -->
          <div class="user">
            <i class="fas fa-user">
              <img src="../assets/usuario.png" style="width: 31px;" />
            </i>
            <!-- Nome do usuário -->
            {{ userData.nome }}
          </div>
          <!-- CPF do usuário -->
          <div class="user">CPF: {{ userData.cpf }}</div>
        </div>
        <!-- Coluna dos registros -->
        <div class="col-md-9">
          <!-- Componente de tabela de registros -->
          <RecordsTable :records="records" @delete-record="handleRecordDeleted" @open-delete-modal="openDeleteModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar.vue';
import RecordsTable from '../components/RecordsTable.vue';

import axios from 'axios';

export default {
  data() {
    return {
      userData: {}, // Dados do usuário
      records: [], // Registros do usuário
      deleteIndex: null // Índice do registro a ser excluído
    };
  },
  created() {
    // Carregar dados do usuário
    this.loadUserData();
    // Carregar registros do usuário
    this.loadUserPoints();
  },
  methods: {
    openDeleteModal(index) {
      this.deleteIndex = index;
    },
    async deleteRecord() {
      if (this.deleteIndex !== null) {
        try {
          await axios.delete(`http://localhost:3000/ponto/excluir/${this.records[this.deleteIndex].id}`);
          await this.loadUserPoints();
          this.deleteIndex = null; // Resetando o índice de exclusão após a exclusão ser concluída
        } catch (error) {
          console.error('Erro ao excluir o registro:', error.message);
        }
      }
    },
    handleRecordDeleted(index) {
      console.log('Record deleted at index:', index);
      this.records.splice(index, 1);
    },
    loadUserData() {
      const userDataString = document.cookie.split('; ').find(row => row.startsWith('userData='));
      if (userDataString) {
        const userData = JSON.parse(decodeURIComponent(userDataString.split('=')[1]));
        this.userData = userData.user;
      }
    },
    async loadUserPoints() {
      try {
        const response = await axios.get(`http://localhost:3000/ponto/consultar/${this.userData.id}`);
        this.records = response.data;
      } catch (error) {
        console.error('Erro ao carregar pontos do usuário:', error.message);
      }
    }
  },
  components: {
    Navbar,
    RecordsTable
  }
};
</script>

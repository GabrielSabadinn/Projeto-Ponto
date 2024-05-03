<template>
  <div>
    <!-- Tabela de registros -->
    <table class="table table-striped">
      <!-- Cabeçalho da tabela -->
      <thead>
        <tr>
          <th>Data Entrada</th>
          <th>Data Intervalo</th>
          <th>Data Fim Intervalo</th>
          <th>Data Saída</th>
          <th>Ações</th>
        </tr>
      </thead>
      <!-- Corpo da tabela -->
      <tbody>
        <!-- Loop através dos registros -->
        <tr v-for="(record, index) in records" :key="index">
          <!-- Colunas de dados -->
          <td>{{ renderData(record.data_entrada) }}</td>
          <td>{{ renderData(record.data_intervalo) }}</td>
          <td>{{ renderData(record.data_fim_intervalo) }}</td>
          <td>{{ renderData(record.data_saida) }}</td>
          <!-- Coluna de ações -->
          <td>
            <!-- Botão de exclusão -->
            <button class="btn btn-danger" @click="openDeleteModal(index)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal de confirmação de exclusão -->
    <div class="modal" :class="{ 'd-block': showModal }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirmar Exclusão</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            Tem certeza que deseja excluir este registro?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
            <button type="button" class="btn btn-danger" @click="confirmDelete">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    records: Array
  },
  data() {
    return {
      deleteIndex: null,
      showModal: false
    };
  },
  methods: {
    openDeleteModal(index) {
      this.deleteIndex = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    // Dentro do método confirmDelete do componente RecordsTable
async confirmDelete() {
  if (this.deleteIndex !== null) {
    try {
      // Enviar solicitação DELETE para excluir o registro
      await axios.delete(`http://localhost:3000/ponto/excluir/${this.records[this.deleteIndex].id}`);
      
      // Se a exclusão for bem-sucedida, remover o registro da tabela
      this.records.splice(this.deleteIndex, 1);
      
      // Fechar o modal após a exclusão ser confirmada
      this.closeModal();
    } catch (error) {
      console.error('Erro ao excluir o registro:', error.message);
    }
  }
},


    renderData(data) {
      if (data) {
        return this.formatDateTime(data);
      } else {
        return 'Não disponível';
      }
    },
    formatDateTime(dateTime) {
      const options = { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' };
      return new Date(dateTime).toLocaleString('pt-BR', options);
    }
  }
};
</script>

<template>
    <div><Navbar/></div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-3">
          <!-- Ícone do usuário -->
         <div class="user"> <i class="fas fa-user"><img src="../assets/usuario.png" style="width: 31px;"></i> Usuário</div>
          <div class="user">CPF: XXX.XXX.XXX-XX</div>
        </div>
        <div class="col-md-9">
          <!-- Componente de tabela de registros -->
          <RecordsTable :records="records" @edit-record="openEditModal" @delete-record="openDeleteModal" />
        </div>
      </div>
      <!-- Componente de modal de edição -->
      <EditModal :record="editRecord" @save-changes="saveChanges" />
      <!-- Modal de confirmação de exclusão -->
      <DeleteModal @delete-record="deleteRecord" />
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Modal } from 'bootstrap';
  import Navbar from '../components/Navbar.vue'
  import RecordsTable from '../components/RecordsTable.vue';
  import EditModal from '../components/EditModal.vue';
  import DeleteModal from '../components/DeleteModal.vue';
  
  export default {
    data() {
      return {
        records: [ // Simulação de registros
          { 
            primeiroTurno: { entrada: '2024-04-21T08:00', saida: '2024-04-21T12:00' },
            segundoTurno: { entrada: '2024-04-21T13:00', saida: '2024-04-21T17:00' }
          },
          { 
            primeiroTurno: { entrada: '2024-04-21T08:30', saida: '2024-04-21T12:30' },
            segundoTurno: { entrada: '2024-04-21T13:30', saida: '2024-04-21T17:30' }
          },
          { 
            primeiroTurno: { entrada: '2024-04-21T09:00', saida: '2024-04-21T13:00' },
            segundoTurno: { entrada: '2024-04-21T14:00', saida: '2024-04-21T18:00' }
          }
        ],
        editIndex: null,
        deleteIndex: null,
        editRecord: {
          primeiroTurno: { entrada: '', saida: '' },
          segundoTurno: { entrada: '', saida: '' }
        }
      };
    },
    methods: {
      openEditModal(index) {
        this.editIndex = index;
        const modal = new Modal(document.getElementById('editModal'));
        modal.show();
      },
      openDeleteModal(index) {
        this.deleteIndex = index;
        const modal = new Modal(document.getElementById('deleteModal'));
        modal.show();
      },
      deleteRecord() {
        if (this.deleteIndex !== null) {
          this.records.splice(this.deleteIndex, 1);
          const modal = Modal.getInstance(document.getElementById('deleteModal'));
          modal.hide();
        }
      },
      saveChanges() {
        if (this.editIndex !== null) {
          // Simula a atualização do registro com os novos valores
          this.records[this.editIndex] = { ...this.editRecord };
          const modal = Modal.getInstance(document.getElementById('editModal'));
          modal.hide();
        }
      }
    },
    components: {
      RecordsTable,
      EditModal,
      DeleteModal,
      Navbar
    }
  };
  </script>
  
  <style scoped>
 .user{
    width: 400px;
    font-size: 30px;
 }
  </style>
  
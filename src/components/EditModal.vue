<template>
  <div class="modal" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">Editar Horário</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="$emit('save-changes')">
            <div class="mb-3">
              <label for="entrada1">Entrada 1º Turno:</label>
              <input type="datetime-local" class="form-control" id="entrada1" v-model="editRecord.primeiroTurno.entrada">
            </div>
            <div class="mb-3">
              <label for="saida1">Saída 1º Turno:</label>
              <input type="datetime-local" class="form-control" id="saida1" v-model="editRecord.primeiroTurno.saida">
            </div>
            <div class="mb-3">
              <label for="entrada2">Entrada 2º Turno:</label>
              <input type="datetime-local" class="form-control" id="entrada2" v-model="editRecord.segundoTurno.entrada">
            </div>
            <div class="mb-3">
              <label for="saida2">Saída 2º Turno:</label>
              <input type="datetime-local" class="form-control" id="saida2" v-model="editRecord.segundoTurno.saida">
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: Object
  },
  data() {
    return {
      editRecord: this.record
    };
  }
};
</script>

<style scoped>

</style>

<template>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>1º Turno</th>
          <th>2º Turno</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in records" :key="index">
          <td>{{ formatDateTime(record.primeiroTurno.entrada) }} - {{ formatDateTime(record.primeiroTurno.saida) }}</td>
          <td>{{ formatDateTime(record.segundoTurno.entrada) }} - {{ formatDateTime(record.segundoTurno.saida) }}</td>
          <td>
            <button class="btn btn-primary mr-2" @click="$emit('edit-record', index)">Editar</button>
            <button class="btn btn-danger" style="margin-left:25px" @click="$emit('delete-record', index)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      records: Array
    },
    methods: {
      formatDateTime(dateTime) {
        const options = { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' };
        return new Date(dateTime).toLocaleString('pt-BR', options);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos do componente */
  </style>
  
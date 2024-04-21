<template>
    <div class="calendar-container">
      <h2 class="text-center mb-4">Calendário</h2>
      <table class="table table-bordered">
        <thead class="thead-light">
          <tr>
            <th scope="col">Dom</th>
            <th scope="col">Seg</th>
            <th scope="col">Ter</th>
            <th scope="col">Qua</th>
            <th scope="col">Qui</th>
            <th scope="col">Sex</th>
            <th scope="col">Sáb</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in weeks" :key="week">
            <td v-for="day in week" :key="day.date" :class="{ 'table-primary': isToday(day.date) }">{{ day.day }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentDate: new Date()
      };
    },
    computed: {
      weeks() {
        const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
        const startDay = firstDayOfMonth.getDay();
        const endDay = lastDayOfMonth.getDate();
  
        let currentDate = new Date(firstDayOfMonth);
        currentDate.setDate(currentDate.getDate() - startDay);
  
        const weeks = [];
        while (currentDate <= lastDayOfMonth) {
          const week = [];
          for (let i = 0; i < 7; i++) {
            week.push({
              day: currentDate.getDate(),
              date: new Date(currentDate)
            });
            currentDate.setDate(currentDate.getDate() + 1);
          }
          weeks.push(week);
        }
        return weeks;
      }
    },
    methods: {
      isToday(date) {
        const today = new Date();
        return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
      }
    }
  };
  </script>
  
  <style scoped>
  .calendar-container {
    margin-top: 50px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); 
  }
  </style>
  
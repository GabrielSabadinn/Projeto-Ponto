<template>
    <div class="clock-container">
      <div class="clock-wrapper">
        <div class="clock" :class="{ 'fade-in': fadeIn }">
          {{ currentTime }}
        </div>
      </div>
     
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTime: "",
        fadeIn: false
      };
    },
    mounted() {
      this.updateTime();
      setInterval(this.updateTime, 1000);
      setTimeout(() => {
        this.fadeIn = true;
      }, 500);
    },
    methods: {
      updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        this.currentTime = `${hours}:${minutes}:${seconds}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .clock-container {
 margin-top: 20px;
    padding: 35px;
   
   
    max-width: 500px;
  }
  
  .clock-wrapper {
    width: 280px; 
    height: 280px; 
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .clock {
    font-size: 40px;
    font-weight: 300;
    opacity: 0; 
  }
  
  .fade-in {
    animation: fadeInAnimation 1s ease-in-out forwards;
  }
  
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  

  </style>
  
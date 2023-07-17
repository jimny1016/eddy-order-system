<template>
    <div>
      <button @click="showDiv" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        點擊顯示
      </button>
  
      <transition name="fade">
        <div v-if="isDivVisible" class="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div class="bg-white p-4 rounded-md max-w-lg">
            <p>這是一個顯示的內容</p>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDivVisible: false
      };
    },
    methods: {
      showDiv() {
        this.isDivVisible = true;
        setTimeout(() => {
          this.isDivVisible = false;
        }, 3000);
      }
    }
  };
  </script>
  
  <style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
  
</template>

<script>
  import Navbar from '@/presentation/components/Navbar/NavBar.vue'

  export default {
    data(){
      return {

      }
    },
    components: {
      // eslint-disable-next-line vue/no-unused-components
      Navbar
    }
  }
</script>

<style scoped>
  .app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .app::-webkit-scrollbar {
    width: 8px;
  }
  .app::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: blueviolet;
    border-radius: 10px;
  }
</style>

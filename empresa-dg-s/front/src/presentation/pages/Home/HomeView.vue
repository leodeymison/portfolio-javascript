<template>
  <div class="home">
    <div class="welcome">
      <span>welcome to </span> <br>
      <h1>DG SOLUTIONS</h1>
    </div>
    <router-link class="btn primary" to="/registers">
      Get stated
    </router-link>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>
.home {
  height: 100%;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000');
  background-size: 100%;
}
.home .welcome{
  display: flex;
  flex-direction: column;
  padding: 3em 0px;
}
.home .welcome span {
  font-size: 30px;
}
.home .welcome h1 {
  background-color: #096cd6a3;
  color: white;
  font-size: 45px;
  padding: .3em .5em;
}
</style>
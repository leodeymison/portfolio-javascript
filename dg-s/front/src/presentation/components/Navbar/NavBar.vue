<template>
  <header class="header">
    <router-link to="/" class="logo" @click="menuOpenClosed()">
      <img 
        src="https://media-exp1.licdn.com/dms/image/C560BAQFIpZabzOjzKg/company-logo_200_200/0/1641298714792?e=1666224000&v=beta&t=5LI6B-KPJ8Ma6ttA0c4Pk__rYO7G17vLsDElNnkd65U" 
        alt="">
    </router-link>
    <nav>
      <div class="hamb" @click="menuOpenClosed()">
        <i v-if="!menu" class="fa-solid fa-bars"></i>
        <i v-else class="fa-solid fa-xmark"></i>
      </div>
      <ul :class="menu ? 'active' : 'noactive'">
        <li @click="menuOpenClosed()">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li @click="menuOpenClosed()">
          <router-link to="/registers">
            Registers
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        menu: false
      }
    },
    methods: {
      menuOpenClosed(){
        this.menu = !this.menu
      }
    }
  }
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: #0f176f;
  padding: 0 3em;
}
.header .logo img {
  height: 80px;
}
.header nav {
  display: flex;
  align-items: center;
}
.header nav ul {
  height: 100%;
  display: flex;
  align-items: center;
}
.header nav ul li a {
  color: white;
  padding: .5em 1em;
  transition: 0.3s;
  margin: 0 .5em;
}
.header nav ul li a:hover {
  background:#3c02a9;
  transition: 0.3s;
}

.hamb {
  display: none;
  flex-direction: column;
  justify-content: space-between;
}
.hamb i {
  color: rgb(255, 255, 255);
  font-size: 40px;
  cursor: pointer;
}

@media (max-width: 800px) {
  .hamb {
    display: flex;
  }
  .header nav ul{
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #0f176f;
    height: 89%;
    width: 100%;
  }
  .header nav ul.active{
    display: flex;
  }
  .header nav ul li {
    display: flex;
    width: 80%;
  }
  .header nav ul li a {
    width: 100%;
    text-align: center;
  }
}
</style>
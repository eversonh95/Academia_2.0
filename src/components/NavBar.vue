<template>
  <nav class="navegacao">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/cadastro">Cadastro</router-link>
      <router-link to="/sobre">Sobre</router-link>
  </nav>
</template>
<script>
export default {
    name: "NavBar"
}
</script>
<style scoped>
.navegacao{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #1D70A2;
}

.navegacao a{
    display: inline-block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.navegacao a:hover{
   background-color: #1D2D44;
}
</style>

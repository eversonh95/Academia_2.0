<template>
<div>
  <NavBar />
  <router-view />
  <Rodape />
</div>
</template>

<script>
import Rodape from "./components/Rodape.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    Rodape,
    NavBar,
  },
};
</script>
<style>
body{
  /*CSS global*/
    background-color: #173753;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
}
</style>

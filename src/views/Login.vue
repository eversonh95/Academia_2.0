<template>
  <div class="conteudo">
    <div class="conteudoA">
      <form class="formulario" id="formulario" method="post" action="">
        <legend>Faça seu login</legend>
        <br />
        <span id="msgAlertErroLogin"></span>
        <label for="email">E-mail:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Coloque seu E-mail"
        /><br />
        <span id="msgAlertErroSenha"></span>
        <label for="senha">Senha:</label><br />
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Coloque sua senha"
        /><br /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
    <div class="conteudoB">
      <img src="../assets/images/banner1.jpg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Login"
}
</script>
<style scoped>
.conteudo {
  background-color: #2892d7;
  display: flex;
}

.conteudoA {
  width: 50%;
}
.formulario {
  padding: 20px;
}

.formulario legend {
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
}

.formulario label {
  font-weight: bold;
  border-left: 4px solid #1b4353;
  padding: 5px 10px;
}

.formulario input {
  width: 400px;
  height: 25px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #d1f0ef;
}

.formulario select {
  width: 410px;
  height: 30px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #d1f0ef;
}

.formulario button {
  width: 150px;
  height: 40px;
  border-radius: 8px;
  border-color: #0d1321;
  color: #fff;
  background-color: #6daedb;
}

.formulario button:hover {
  color: #fff;
  background-color: #1b4353;
  transition: 0.5s;
}

.conteudoB {
  width: 50%;
}

.conteudoB img {
  width: 100%;
  height: 100%;
}
</style>
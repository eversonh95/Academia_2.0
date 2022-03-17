<template>
  <div class="conteudo">
    <div class="conteudoA">
      <form action="/cadastrar" method="post" class="formulario">
        <legend>Faça seu cadastro em nossa rede de academias</legend>
        <br />
        <label>Nome:</label><br />
        <input type="text" name="nome" placeholder="Coloque seu nome" /><br />
        <label for="sobrenome">Sobrenome:</label><br />
        <input
          type="text"
          name="sobrenome"
          placeholder="Coloque sou sobrenome"
        /><br />
        <label for="idade">Idade:</label><br />
        <input
          type="number"
          name="idade"
          placeholder="Coloque sua idade"
        /><br />
        <label for="sexo">Sexo:</label><br />
        <select name="sexo" id="">
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option></select
        ><br /><br />
        <label for="email">E-mail:</label><br />
        <input
          type="email"
          name="email"
          placeholder="Coloque seu E-mail"
        /><br />
        <label for="senha">Senha:</label><br />
        <input
          type="password"
          name="senha"
          placeholder="Coloque sua senha"
        /><br />
        <label for="confirmarSenha">Confirme sua senha</label><br />
        <input
          type="password"
          name="confirmarSenha"
          placeholder="Repita sua senha"
        /><br /><br />
        <button type="submit">Cadastrar-se</button>
      </form>
    </div>
    <div class="conteudoB">
      <img src="../assets/images/banner0.jpg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Cadastro"
}
</script>
<style scoped>
.conteudo {
  background-color: #2892d7;
  display: flex;
}

.conteudoA{
  width: 50%;
}

.conteudoB{
  width: 50%;
}

.conteudoB img{
  height: 100%;
  width: 100%;
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
</style>
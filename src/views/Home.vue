<template>
  <div class="conteudo">
      <div class="conteudoA">
          <h1>Seja bem-vindo(a) a {{nome}}</h1>
      <p>
        Aqui em nosso site você pode fazer sua matricula, acessar sua conta e agendar um horario para treino,
        pode alterar sua senha de entrada na academia e tabmbém saber mais sobre nós.
        Você também pode ver algumas fotos de nossas academias no banner ao lado, assim você pode conhecer mais nossas.
        unidades
      </p>
      <p>
        No topo da pagina existe nossa barra de navegação ppara simplidicar o uso do site contendo as abas: <br>
        <b>Home:</b> A Pagina inicial <br>
        <b>Login:</b> Aonde o usuario pode acessar sua conta <br>
        <b>Cadastro:</b> Nessa aba você pode se cadastrar em nossos sistemas <br>
        <b>Sobre:</b> Nessa sessão você pode saber mais sobre nós <br>
      </p>
      <h3>Objetivo</h3>
      <p>
        A grande demanda na busca no ramo de empresas que trabalham com a área
        de saúde e estética, e que, atualmente, tem ganhado espaço no mercado, e
        essa demanda faz com que a necessidade de gerenciar as informações
        decorrentes deste ramo seja cada vez maior. Consequentemente, com esse
        grande aumento na demanda, estes estabelecimentos necessitam de um
        gerenciamento adequado para garantir aos seus clientes maior retorno em
        relação ao investimento que lhe é aplicado. Os sistemas de informação
        são necessários para garantir ao usuário (ou empresários) a segurança e
        total controle das movimentações de suas organizações. Por isso, este
        estudo, alinhado com essas demandas propõe o desenvolvimento de um
        sistema que visa à criação de um software para gerenciamento de
        academias onde a supervisão e dedicação a cada aluno é constante, a fim
        de atingir esta fatia da população que está em constante crescimento. O
        projeto trata-se de um sistema que será desenvolvido para um problema de
        algumas academias, que não possuem um modo de matricula e faturamento de
        seu controle.
      </p>
      </div>
      <div class="conteudoB">
          <img src="../assets/images/banner2.jpg" alt="">
      </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      nome: "Power Shape Academia",
    }
  }
}
</script>
<style>
.conteudo{
    background-color: #2892D7;
    display: flex;
}
.conteudoA{
    width: 50%;
}
.conteudoA h1 {
  text-align: center;
}

.conteudoA p {
  text-indent: 20px;
}

.conteudoA h3 {
  text-align: center;
}

.conteudoB{
    width: 50%;
}
.conteudoB img{
    width: 100%;
    height: 100%;
}
</style>
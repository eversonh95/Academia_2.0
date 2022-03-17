<template>
  <div class="conteudo">
    <div class="conteudoA">
      <img src="../assets/images/banner3.jpg" alt="" />
    </div>
    <div class="conteudoB">
      <h1>Sobre</h1>
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
      <h3>Criação</h3>
      <p>
        Esse é um projeto para fins didaticos e portifólio em desenvolvido Web
        Full-Stack as técnologias usadas são: Node.JS, Javascript, Vue.js, HTML
        e CSS.<br /><br />
      </p>
      <h3>Contato</h3>
      <p>
        Links: <br />
        Para acessa meu portifólio no GitHub
        <a v-bind:href="gitHub">Clique Aqui</a><br />
        Para ver meu LinkedIn
        <a v-bind:href="linkedIn">Clique Aqui</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sobre",
  data() {
    return {
      gitHub: "https://github.com/eversonh95",
      linkedIn:
        "https://www.linkedin.com/in/everson-hernandes-brito-de-souza-a21a89140/",
    };
  },
};
</script>
<style scoped>
.conteudo {
  background-color: #2892d7;
  display: flex;
}

.conteudoA{
  width: 50%;
}

.conteudoA img{
  width: 95%;
  height: 100%;
}

.conteudoB{
  width: 50%;
}
.conteudoB h1 {
  text-align: center;
}

.conteudoB h3 {
  text-align: center;
}

.conteudoB {
  text-align: justify;
  text-indent: 20px;
}
</style>
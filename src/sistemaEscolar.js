const informAluno = {
  nomeAluno: "Carlos Henrique Rocha de Abreu",
  idadeAluno: "19",
  disciplina: "Banco de Dados",
  primeiraNota: "4",
  segundaNota: "8",
  terceiraNota: "8",
  aulasAssistidas: "10",
  totalAulas: "15",
};

const reformador = {
  nomeLimpo: informAluno.nomeAluno.trim(),
  disciplinaLimpa: informAluno.disciplina.trim(),
  conversorIdade: Number(informAluno.idadeAluno),
  conversorNota1: Number(informAluno.primeiraNota),
  conversorNota2: Number(informAluno.segundaNota),
  conversorNota3: Number(informAluno.terceiraNota),
  conversorAulas: Number(informAluno.aulasAssistidas),
  conversorTotal: Number(informAluno.totalAulas),
};

const frequencia =
  ((reformador.conversorAulas / reformador.conversorTotal) * 100).toFixed(1) +
  "%";

const soma =
  reformador.conversorNota1 +
  reformador.conversorNota2 +
  reformador.conversorNota3;

const media = (soma / 3).toFixed(2);

const resultado = {
  soma: soma,
  media: media,
  frequencia: frequencia,
};

reformador.nomeLimpo === ""
  ? console.log("Ocorreu um erro!")
  : console.log("Tudo certo!");

reformador.disciplinaLimpa === ""
  ? console.log("Ocorreu um erro!")
  : console.log("Tudo certo!");

Number.isNaN(reformador.conversorIdade) || reformador.conversorIdade < 0
  ? console.log("Ocorreu um erro!")
  : console.log("Tudo certo!");

reformador.conversorNota1 < 0 ||
reformador.conversorNota1 > 10 ||
Number.isNaN(reformador.conversorNota1)
  ? console.log("Ocorreu um erro!")
  : console.log("Tudo certo!");

reformador.conversorNota2 < 0 ||
reformador.conversorNota2 > 10 ||
Number.isNaN(reformador.conversorNota2)
  ? console.log("Ocorreu um erro!")
  : console.log("Tudo certo!");

reformador.conversorNota3 < 0 ||
reformador.conversorNota3 > 10 ||
Number.isNaN(reformador.conversorNota3)
  ? console.log("Ocorreu um erro!")
  : console.log("Tudo certo!");

Number.isNaN(reformador.conversorAulas) ||
reformador.conversorAulas > reformador.conversorTotal ||
reformador.conversorAulas < 0
  ? console.log("Ocorreu um erro!")
  : console.log("Tudo certo");

const validacao =
  Number.isNaN(reformador.conversorTotal) ||
  reformador.conversorTotal < reformador.conversorAulas ||
  reformador.conversorTotal <= 0
    ? console.log("Ocorreu um erro!")
    : console.log("Tudo certo!");

if (resultado.media >= 7 && resultado.frequencia >= 75) {
  console.log("Aprovado!");
} else if (resultado.media < 7 && media >= 4 && resultado.frequencia >= 75) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

//Atualizou certinho

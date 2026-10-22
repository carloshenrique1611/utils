const informAluno = {
  nomeAluno: "       Carlos Henrique Rocha de Abreu      ",
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

const frequencia = (assistidas, total) => {
  return (assistidas / total) * 100;
};

const soma = (n1, n2, n3) => {
  return n1 + n2 + n3;
};

const media = (soma) => {
  return soma / 3;
};

const frequenciaAulas = frequencia(
  reformador.conversorAulas,
  reformador.conversorTotal,
);

const somaNotas = soma(
  reformador.conversorNota1,
  reformador.conversorNota2,
  reformador.conversorNota3,
);

const calculoMedia = media(soma);

const textosValidos = (nome, disciplina) => {
  return nome.trim() !== "" && disciplina.trim() !== ""
    ? "Tudo certo!"
    : "Ocorreu um erro!";
};
textosValidos(reformador.nomeLimpo, reformador.disciplinaLimpa);

const idadeValida = (idade) => {
  return Number.isNaN(idade) || idade < 0 ? "Ocorreu um erro!" : "Tudo certo!";
};
idadeValida(reformador.conversorIdade);

const validarNotas = (nota1, nota2, nota3) => {
  return nota1 < 0 ||
    nota1 > 10 ||
    Number.isNaN(nota1) ||
    nota2 < 0 ||
    nota2 > 10 ||
    Number.isNaN(nota2) ||
    nota3 < 0 ||
    nota3 > 10 ||
    Number.isNaN(nota3)
    ? "Ocorreu um erro!"
    : "Tudo certo!";
};
validarNotas(
  reformador.conversorNota1,
  reformador.conversorNota2,
  reformador.conversorNota3,
);

const validacaoAulas = (assistidas, totais) => {
  return assistidas > totais ||
    assistidas < 0 ||
    Number.isNaN(assistidas) ||
    totais <= 0 ||
    Number.isNaN(totais)
    ? "Ocorreu um erro!"
    : "Tudo certo!";
};
validacaoAulas(reformador.conversorAulas, reformador.conversorTotal);

if (calculoMedia >= 7 && frequenciaAulas >= 75) {
  console.log("Aprovado!");
} else if (calculoMedia < 7 && calculoMedia >= 4 && frequenciaAulas >= 75) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

const resultadoFinal = {
  nome: reformador.nomeLimpo,
  idade: reformador.conversorIdade,
  disciplina: reformador.disciplinaLimpa,
  notas: `${reformador.conversorNota1}, ${reformador.conversorNota2}, ${reformador.conversorNota3}`,
  media: calculoMedia,
  soma: somaNotas,
};
console.table([resultadoFinal]);

const informAluno = {
  nomeAluno: "   ",
  idadeAluno: "19",
  disciplina: "Banco de Dados",
  primeiraNota: "4",
  segundaNota: "8",
  terceiraNota: "8",
  aulasAssistidas: "10",
  totalAulas: "15",
};

function boletim(nome, disciplina) {
  const chaveNome = validacaoString(nome);
  if (!chaveNome) return `${nome} é inválido`;
  const chaveDisciplina = validacaoString(disciplina);
  if (!chaveDisciplina) return `${disciplina} é inválida`;

  return { sucesso: { nome, disciplina } };
}

console.log(boletim(informAluno.nomeAluno, informAluno.disciplina));

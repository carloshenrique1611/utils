import bancoDados from "../database/bancoDados.json" with { type: "json" };

const validacaoEntrada = (termo, banco = bancoDados) =>
  banco.alunos.find((nome) => nome.nomeAluno.toLowerCase().startsWith(termo));

const boletim = (nome, disciplina, banco = bancoDados) => {
  const nomeEncontrado = validacaoEntrada(nome.toLowerCase().trim());
  if (!nomeEncontrado)
    return {
      error: {
        type: "INVALID_INPUT",
        message: `"${nome}" não existe no banco de dados.`,
      },
    };

  const instituicao = banco.instituicao;
  const sala = banco.sala;

  return { success: { instituicao, sala, nome: nomeEncontrado.nomeAluno } };
};
console.log(boletim("   ana", "ADS"));

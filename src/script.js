import bancoDados from "../database/bancoDados.json" with { type: "json" };

const bancoOk = (banco) =>
  banco.alunos.every((a) =>
    a.disciplinas.every(
      (d) =>
        d.notas.every((n) => n >= 0 && n <= 10) &&
        d.aulasAssistidas <= d.totalAulas,
    ),
  );

const acharAluno = (nome, banco = bancoDados) =>
  bancoDados.alunos.find((a) =>
    a.nomeAluno.toLowerCase().startsWith(nome.toLowerCase().trim()),
  );

const acharDisciplina = (aluno, disciplina) =>
  aluno.disciplinas.find((x) =>
    x.disciplina.toLowerCase().startsWith(disciplina.toLowerCase().trim()),
  );

const boletim = (nome, disciplina) => {
  const bancoCorreto = bancoOk(bancoDados);
  if (!bancoCorreto)
    return {
      error: {
        CODE: "INVALID_DATABASE",
        message: "O banco de dados está incorreto",
      },
    };

  const achouAluno = acharAluno(nome);
  if (!achouAluno)
    return {
      error: { CODE: "INVALID_NAME", message: "O nome está incorreto" },
    };

  const temDisciplina = acharDisciplina(achouAluno, disciplina);
  if (!temDisciplina)
    return {
      error: {
        CODE: "INVALID_DISCIPLINE",
        message: "A disciplina está incorreta",
      },
    };

  const soma = temDisciplina.notas.reduce((acc, n) => acc + n, 0);
  const media = soma / temDisciplina.notas.length;
  const freq = (temDisciplina.aulasAssistidas / temDisciplina.totalAulas) * 100;
  const aprovado = media >= 7 && freq >= 65;

  return {
    success: {
      aluno: achouAluno.nomeAluno,
      disciplina: temDisciplina.disciplina,
      notas: temDisciplina.notas,
      soma,
      media: Number(media.toFixed(1)),
      frequencia: Number(freq.toFixed(1)) + "%",
      aprovado,
    },
  };
};

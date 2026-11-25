import bancoDados from "../database/bancoDados.json" with { type: "json" };

const alunos = bancoDados.alunos;

const acharAluno = (nome) =>
  alunos.find((a) =>
    a.nomeAluno.toLowerCase().startsWith(nome.toLowerCase().trim()),
  );

const boletim = (nome, disciplina) => {
  const aluno = acharAluno(nome);
  if (!aluno) return "Aluno não existe";

  const d = aluno.disciplinas.find(
    (x) => x.disciplina.toLowerCase() === disciplina.toLowerCase().trim(),
  );
  if (!d) return "Disciplina não existe";

  const media = d.notas.reduce((soma, n) => soma + n, 0) / d.notas.length;
  const freq = (d.aulasAssistidas / d.totalAulas) * 100;

  return {
    nome: aluno.nomeAluno,
    disciplina: d.disciplina,
    notas: d.notas,
    media: Number(media.toFixed(1)),
    frequencia: Number(freq.toFixed(1)) + "%",
    situacao: media >= 7 && freq >= 65 ? "Aprovado" : "Reprovado",
  };
};

const bancoOk = alunos.every((a) =>
  a.disciplinas.every(
    (d) =>
      d.notas.length === 3 &&
      d.notas.every((n) => n >= 0 && n <= 10) &&
      d.aulasAssistidas <= d.totalAulas,
  ),
);
if (!bancoOk) console.log("O banco de dados tem problemas");

const alunoEncontrado = acharAluno("ana");
console.log(boletim("ana", "Banco de Dados"));

alunoEncontrado.disciplinas
  .filter((d) => d.disciplina !== "Banco de Dados")
  .forEach((d) => {
    const { disciplina, notas, media, frequencia, situacao } = boletim(
      alunoEncontrado.nomeAluno,
      d.disciplina,
    );
    console.log({ disciplina, notas, media, frequencia, situacao });
  });

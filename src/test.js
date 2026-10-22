const aluno = {
  nome: "Lucas",
  idade: 20,
  notas: [3, 43, 234, 123, 4, 234, 1234, 32, 4, 32412, 4, 2341],
};

const somaDasNotas = aluno.notas.reduce(
  (acumulador, nota) => acumulador + nota,
  0,
);

console.log(`A soma foi: ${somaDasNotas}
A media foi: ${(somaDasNotas / aluno.notas.length).toFixed(1)}`);

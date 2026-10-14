function seguranca(termo) {
  // Passo 3 -> Retorna um booleano (uma comparação) para dentro da variável "chaveSeguranca"
  return typeof termo === "number";
}

function parImpar(num) {
  //Passo 2 -> Joga o parametro "num" para a função segurança
  const chaveSeguranca = seguranca(num);
  //Passo 4 -> Se for "false" torna-se "true", fazendo enfim a defesa do código
  if (!chaveSeguranca) return `O termo ${num} é invalido`;
  const resultado = num % 2 === 0 ? "par" : "impar";
  // Passo 5 -> Retorna o valor depois de ser verificado pelo ternário
  return `O numero ${num} é ${resultado}`;
}

//Passo 1 -> Com console.log() você chama a função e passa um parâmetro
console.log(parImpar(100));

const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var libm = require("./arquivo");

var nome_arquivo;
var nomes = [];

rl.question("Digite o nome do seu arquivo\n", function(line)
{
    nome_arquivo = line + ".txt";
    leianome(3);
});

function leianome(count)
{
  if(count--)
  {
    rl.question("Digite um nome:\n",function(line)
    {
      nomes.push(line);
      leianome(count);
    });
  }
  else libm.gravar(nome_arquivo, nomes);
}


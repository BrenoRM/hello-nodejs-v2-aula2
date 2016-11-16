const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nome_do_arquivo;
var paises = [];


rl.question("Digite o nome do seu arquivo\n", function(line)
{
    nome_do_arquivo = line + ".txt";
    leianome(5);
});

function leianome(count)
{
  if(count--)
  {
    rl.question("Digite um nome de um país:\n",function(line)
    {
      paises.push(line);
      leianome(count);
    });
  }
  else gravaarquivo();
}

function gravaarquivo()
{

  for(var i in paises)
    fs.appendFile(nome_do_arquivo,paises[i]+"\n");

  rl.close();
  console.log("Arquivo " + nome_do_arquivo + " salvo!");
}
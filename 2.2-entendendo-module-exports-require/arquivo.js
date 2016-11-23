const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const grava_arquivo =
{
    gravar : (nome_arquivo, nomes) =>
    {
        for(var i in nomes)
            fs.appendFile(nome_arquivo,nomes[i]+"\n");

        rl.close();
        console.log("Arquivo " + nome_arquivo + " salvo!");
    }
};

module.exports = grava_arquivo;
console.log("Hello Word");

//Árvore de Natal ASCII
const NUM_LINHAS = 10;

for(let i = 0; i < NUM_LINHAS; i++){
    let espacos = ' '.repeat(NUM_LINHAS - i);
    let conteudo = 'X'.repeat(i);
    console.log(espacos + conteudo + 'X' + conteudo);

}

console.log((' '.repeat(NUM_LINHAS) + 'X' + '\n').repeat(4));

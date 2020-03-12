const fs = require('fs');
const archiver = require('archiver');

var saida = fs.createWriteStream('target.zip');
var compactador = archiver('zip');

saida.on('close', () => {
    console.log(compactador.pointer() + 'bytes totais');
});

//Grava os arquivos na saída
compactador.pipe(saida);

var arquivo = __dirname + '\index2.js';
compactador.append(fs.createReadStream(arquivo), {name: 'index2.js'});

compactador.finalize();
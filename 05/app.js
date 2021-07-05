const fs = require('fs')

fs.writeFile('criando-arquivo.txt','Meu arquivo txt', function (erro) {
    if(erro) {
        throw erro
    }
    console.log('Arquivo salvo!')
})
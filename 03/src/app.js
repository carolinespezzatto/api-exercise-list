const express = require('express') 
const app = express() 
const cors = require('cors')


function salarioLiquido(valor) {
    console.log(valor[1].salario)
    let salario = valor.salario
    return {
        salario: salario * 0.6
    } 
}

app.use(cors())

app.use(express.json())

app.post('/api/v1/salario', function (req, res) {
    res.send(salarioLiquido(req.body))
});

app.listen(3000)
const express = require('express') 
const app = express() 
const cors = require('cors')

const info = {
    name: "Fulano",
    last_name: "Ciclano",
    birthday: "01/01/1990",
    age: 30,
    department: "Software Engineering"
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', function(req, res){
    const tamanho = info.last_name.length 
    const sobrenome = info.last_name
    res.send({
        "last_name": sobrenome, 
        "tamanho": tamanho
    })    
})

app.listen(3000, function() {
})
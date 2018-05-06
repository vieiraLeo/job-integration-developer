
let port = 3003
//Interpreta o corpo da requisição
let bodyParser = require('body-parser')
let express = require('express')
//Criação do servidor
let server = express()


server.use(bodyParser.urlencoded({extended:true}))
//bodyParsy transforma o JSON em um Object
server.use(bodyParser.json())
//levanta o servidor na porta declarada em port
server.listen(port, ()=>{
    console.log(`Server running on port ${port}.`)
})

module.exports = server
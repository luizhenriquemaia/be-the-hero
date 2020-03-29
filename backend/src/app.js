// Lidar com os erros de validação
const { errors } = require('celebrate')
/* const serve para importar as funcionalidades do módulo express */
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
/* variável para armazenar a aplicação */
const app = express()

app.use(cors())
/* definir que utilizaremos json para enviar parâmetros */
app.use(express.json())
app.use(routes)
// Lidar com os erros na aplicação
app.use(errors())


/* acessar a aplicação pela porta 3333 */
// app.listen(3333)
// implementação para fazer testes de integração
module.exports = app
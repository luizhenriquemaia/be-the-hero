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



/* acessar a aplicação pela porta 3333 */
app.listen(3333)
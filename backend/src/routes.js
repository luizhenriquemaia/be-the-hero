const express = require('express')
const routes = express.Router()
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionControler')


/* definir rota e passar uma função */
/* sempre terão 2 parâmetros, a requisição e a resposta */
routes.post('/sessions', sessionController.create)
routes.post('/ongs', ongController.create)
routes.get('/ongs', ongController.index)
routes.get('/profile', profileController.index)
routes.post('/incidents', incidentController.create)
routes.get('/incidents', incidentController.index)
routes.delete('/incidents/:id', incidentController.delete)

/* exportar a variável para acessar no index.js */
module.exports = routes

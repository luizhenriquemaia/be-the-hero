// Validação
const { celebrate, Segments, Joi } = require('celebrate')
const express = require('express')
const routes = express.Router()
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionControler')


/* definir rota e passar uma função */
/* sempre terão 2 parâmetros, a requisição e a resposta */
routes.post('/sessions', sessionController.create)
// Precisa vir antes do ongController porque é preciso validar antes de criar o controlador da ong
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}) ,ongController.create)

routes.get('/ongs', ongController.index)
// diferente porque o header recebe vários parametros e passamos para ele validar apenas o authorization
// deixando o resto unknown
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profileController.index)

routes.post('/incidents', incidentController.create)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidentController.index)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentController.delete)

/* exportar a variável para acessar no index.js */
module.exports = routes

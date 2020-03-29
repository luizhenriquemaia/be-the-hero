const knex = require('knex')
const configuration = require('../../knexfile')
// pegar a variável NODE_ENV das variáveis ambiente
// e se for o test utilizamos a configuração test dentro do knex file
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development


/* escolhendo a configuração de desenvolvimento */
const connection = knex(config)

module.exports = connection
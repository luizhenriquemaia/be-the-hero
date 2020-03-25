const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },

    async create(request, response) {
        /* acessar parâmetros de query = request.query, acessar parâmetros de route = request.params*/
        const { name, email, whatsapp, city, uf } = request.body
        const id = crypto.randomBytes(4).toString('HEX')
        /* aguardar o código finalizar para então retornar a resposta */
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        return response.json({ id })
    }
}
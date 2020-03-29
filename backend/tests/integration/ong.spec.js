// biblioteca para fazer request através de API no nosso projeto
const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe('ONG', () => {
    // antes de cada teste queremos rodar essa função
    beforeEach(async () => {
        // antes de fazer todas as migrations devemos desfazer todas as migrations e registros
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })
    // tirar o erro a worker process has failed to exit gracefully...
    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ong', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD2",
            email: "contato@gmail.com",
            whatsapp: "4700000000",
            city: "Rio do Sul",
            uf: "SC"
        })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})
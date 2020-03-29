const generateUniqueId = require('../../src/utils/generateUniqueId')

// categoria de teste
describe('Generate Unique ID', () => {
    // Testes são escritos em frases
    it('should generate an unique ID', () => {
        // Espera que o resultado gere tal coisa
        // expect(2 + 2).toBe(4)
        const id = generateUniqueId()
        expect(id).toHaveLength(8)
    })
})
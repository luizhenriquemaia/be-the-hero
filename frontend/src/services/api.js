import axios from 'axios' 

const api = axios.create({
    // parte da url que será mantida entre todas as chamadas
    baseURL: 'http://localhost:3333',
})

export default api
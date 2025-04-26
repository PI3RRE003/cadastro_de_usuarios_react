import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3000'//CAMINHO DO BACKEND COM NODE E SUAS ROTAS 
})

export default api
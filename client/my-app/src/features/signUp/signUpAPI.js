import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3005/user',
})

export const createUser = payload => api.post(`/signUp`, payload)



const apis = {
    createUser
  
}

export default apis
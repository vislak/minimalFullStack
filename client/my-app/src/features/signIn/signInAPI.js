import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3005/user',
})

export const userSignIn = payload => api.post(`/signIn`, payload)



const apis = {
    userSignIn
  
}

export default apis
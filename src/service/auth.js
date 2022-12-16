import axios from './axios'

const authService = {
    register(user){
        return axios.post('/users', {user})
    },
    login(user){
        return axios.post('/users/login', {user})
    }
}

export default authService
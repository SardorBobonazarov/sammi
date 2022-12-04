import axios from './axios'

const authService = {
    register(user){
        return axios.post('/users', {user})
    }
}

export default authService
import { setItem } from '../helpers/persistanceStorage'
import authService from '../service/auth'

const state = {
    isLoading: false,
    user: null,
    errors: null
}

const mutations = {
    registerStart(state){
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    registerSuccess(state, payload){
        state.isLoading = false
        state.user = payload
    },
    registerFailure(state, payload){
        state.isLoading = false
        state.errors = payload
    }
}

const actions = {
    register(context, user){
        context.commit('registerStart')
        return new Promise((resolve, reject) => {
            authService.register(user)
            .then(res => {
                context.commit('registerSuccess', res.data.user)
                setItem("token", res.data.user.token)
                resolve(res.data.user)
            })
            .catch(error => {
                context.commit('registerFailure', error.response.data)
                reject(error.response.data)
            })
        })
    }
}

export default { state, mutations, actions }
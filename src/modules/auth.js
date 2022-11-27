const state = {
    isLoading: false
}

const mutations = {
    setLoading(state){
        state.isLoading = !state.isLoading
    }
}

export default { state, mutations }
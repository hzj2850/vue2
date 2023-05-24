const state = {
    theme: '#4d7fff'
}
const mutations = {
    setState(state, obj) {
        for (let key in obj) {
            state[key] = obj[key]
        }
    }
}
const actions = {
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}


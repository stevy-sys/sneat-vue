import { createStore } from 'vuex'

const store = createStore({
    state: {
        userEnLigne: '',
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.userEnLigne = token
        },

        SET_STATE(state) {
            state.userEnLigne = ''
        }
    },
    actions: {
        setUserEnLigne({ commit }, token) {
            commit('SET_TOKEN', token)
        },
        setInitialiseState({ commit }) {
            commit('SET_STATE');
        },
        init({ commit }) {
            console.log('exec')
        },
    },
})

// store.subscribeAction({
//     before: (action, state) => {
//         console.log(action)
//         if (action.type == 'init') {
//             console.log('testttt');
//             action.payload.dispatch('init');
//         }
//     },
// });

export default store

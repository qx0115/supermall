import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        token: window.sessionStorage.getItem('token'),
        email: window.sessionStorage.getItem('email'),
        seconds: window.localStorage.getItem('seconds'),
        downloadNum: window.localStorage.getItem('downloadNum'),
        // 
    },
    mutations: {

        set_token: (state, data) => {
            state.token = data;
            window.sessionStorage.setItem('token', data)
        },
        set_email: (state, data) => {
            state.email = data;
            window.sessionStorage.setItem('email', data)
        },
        set_seconds: (state, data) => {
            state.seconds = data;
            window.localStorage.setItem('seconds', data)
        },
        set_downloadNum: (state, data) => {
            state.downloadNum = data;
            window.localStorage.setItem('downloadNum', data)
        }


    },

    actions: {

    }
})
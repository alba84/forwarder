import Vue from 'vue'

import User from './class/user'
//import Order from './class/order'

export default {
    state: {
        token: '',
        user_id: 0,
        user: null,
        order: null
    },
    
    actions: {
        init({commit}){
            let token = Vue.localStorage.get('user_token'),
                user_id = Vue.localStorage.get('user_id'),
                has_token = typeof token == "string" && token.length > 0,
                has_user_id = typeof user_id == "string" && user_id > 0

            if(has_token)
                commit('SET_TOKEN', token)

            if(has_user_id>0)
                commit('SET_USER_ID', user_id)

            if(has_token && has_user_id>0)
            {
                let user = new User

                commit('SET_CURRENT_USER', user)
            }
        },

        setToken({commit}, token) {
            commit('SET_TOKEN', token)
        },

        setUserId({commit}, user_id) {
            commit('SET_USER_ID', user_id)
        },

        setCurrentUser({commit}, user) {
            commit('SET_CURRENT_USER', user)
        },

        setCurrentOrder({commit}, order_id) {
            // AJAX
            let order = {
                id: order_id,
                name: 'Заказ №' + order_id
            }
            commit('SET_CURRENT_ORDER', order)
        }
    },
    
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER_ID(state, user_id) {
            state.user_id = user_id
        },
        SET_CURRENT_USER(state, user) {
            state.user = user
        },
        SET_CURRENT_ORDER(state, order) {
            state.order = order
        }
    },

    getters: {
        token(state) {
            return state.token
        },
        user_id(state) {
            return state.user_id
        },
        user(state) {
            return state.user
        },
        order(state) {
            return state.order
        }
    },  
    modules: {}
}
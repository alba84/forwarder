import Vue from 'vue'

import User from './class/user'
//import Order from './class/order'

export default {
    state: {
        token: '',
        user: null,
        order: null
    },
    
    actions: {
        init({commit}){
            let token = Vue.localStorage.get('user_token')

            console.log(token);
            /*let user_data = User.requestUser(function(user){
                Vue.$store.dispatch('setCurrentUser', user)
            })*/
        },

        setCurrentUser({commit}, user) {
            //commit('SET_CURRENT_USER', user)
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
        SET_CURRENT_ORDER(state, order) {
            state.order = order
        },
       
        SET_CURRENT_USER(state, user) {
            state.user = user
            //state.user = user
        }
    },

    getters: {
        user(state) {
            return state.user
        },
        order(state) {
            return state.order
        }
    },  
    modules: {}
}
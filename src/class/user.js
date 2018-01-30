"use strict";

import Vue from 'vue'

import store from '../store'

var User = /** @class */ (function () {
    function User() {
        /*if (typeof user_data !== "object")
            throw new Error('Ошибка инициализации данных пользователя');*/

        this.token = User.getStoredToken()
        
        this.user_id = User.getStoredUserId()

        this.getInfo()
    }

    User.getStoredToken = function()
    {
        return store.state.token;
    };

    User.getStoredUserId = function()
    {
        return store.state.user_id*1;
    };

    User.isAuthorized = function () {
        var user_id = User.getStoredUserId(),
            token = User.getStoredToken()

        return (typeof token == "string" && token.length>0 && typeof user_id === "number" && user_id > 0);
    };

    /**
     * 
     * @param {*} context 
     * @param {*} email 
     * @param {*} pass 
     * @param {*} callback 
     */
    User.authorize = function(context, email, pass, callback){
        var self = this

        if(typeof email == "string" && email.length > 0 && typeof pass == "string" && pass.length > 0)
        {
            Vue.http.post(
                '/api/forwarder/auth/signIn/',
                {
                    email: email, 
                    password: pass
                },
                {
                    headers: User.getHeaders(),
                }
            )
            .then(function(response){

                // Запомниаем токен и айдишник пользователя
                Vue.localStorage.set('user_token', response.data.token)
                Vue.localStorage.set('user_id', response.data.id)

                // Дергаем колбек для передачи данных в компонент вызвавший авторизацию
                callback.call(context, response.data)

            }, function(error){
                console.log('User.js: authorize() error', error)
            })
        }
    };

    User.getHeaders = function () {
        var headers = process.env.api.request_headers,
            token = User.getStoredToken()

        if(token.length >0 )
           headers['App-Authorization'] = token

        return headers
    };

    User.prototype.getInfo = function () {
        var self = this,
            user_id = User.getStoredUserId()

        if(!(typeof self.data == "object" && typeof self.data.id == "number" && self.data.id == user_id && typeof self.data.token == "string" && self.data.token.length > 0 ))
        {
            Vue.http.get(
                '/api/forwarder/users/'+user_id+'/',
                {
                    params: {},
                    headers: User.getHeaders(),
                }
            )
            .then(function(response){

                self.data = response.data 
                //console.log(self.data)

            }, function(error){
                console.log('User.js: getInfo() error', error)
            })
        }
    };
    return User;
}());
export default User;

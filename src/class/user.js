"use strict";

import Vue from 'vue'

var User = /** @class */ (function () {
    function User(user_data) {
        if (typeof user_data !== "object")
            throw new Error('Ошибка инициализации данных пользователя');
        this.data = user_data;
    }
    User.prototype.isAuthorized = function () {
        return (typeof this.data.id === "number" && this.data.id > 0);
    };
    User.requestUser = function (callback) {
        /*Vue.http.get(
            '/api/v1/products/?limit=10&offset=0',
            {
                params: {
                    limit: 10,
                    offset: 0
                },
                headers: process.env.api.request_headers,
            }
        )
        .then(function(response){

            let user_data = { //response.data
                id: 2160,
                name: 'Альберт',
                second_name: 'Абдрахимов',
                groups: [1, 2, 24]
            }

            let user = new User(user_data)

            callback.call(Vue.$store, user);
            

        }, function(error){
            console.log('error',error)
        })*/

        //AJAX 
        return {
            id: 2160,
            name: 'Альберт',
            second_name: 'Абдрахимов',
            groups: [1, 2, 24]
        };
    };
    return User;
}());
export default User;

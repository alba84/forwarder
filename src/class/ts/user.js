"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var User = /** @class */ (function () {
    function User(user_data) {
        if (typeof user_data !== "object")
            throw new Error('Ошибка инициализации данных пользователя');
        this.data = user_data;
    }
    User.prototype.isAuthorized = function () {
        return (typeof this.data.id === "number" && this.data.id > 0);
    };
    User.requestUser = function () {
        vue_1.default.http.get(
        //'https://next.json-generator.com/api/json/get/4ysuZuZSV', // '/api/v1/products', 
        '/api/v1/products/?limit=10&offset=0', {
            params: {
                limit: 10,
                offset: 0
            },
            headers: {
                "User-Agent": "Mobile-App-Broccoli",
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Basic ZGV2Ok9vUnJBYTIwMTde" //"Basic bW9iYXBwOnZvYTlnU3ZBemc="
            },
        })
            .then(function (response) {
            console.log(response.data);
        }, function (error) {
            console.log('error', error);
        });
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
exports.default = User;

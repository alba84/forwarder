"use strict";

import Vue from 'vue'

import store from '../store'

import User from './user'

var Order = /** @class */ (function () {
    function Order(order_data) {
        if (typeof order_data !== "object")
            throw new Error('Ошибка при создании объекта заказа');

        this.data = order_data;
    }

    Order.prototype.get = function (key) {
        return this.data[key]
    }

    Order.prototype.formatDate = function(key){
        if(typeof this.data[key] !== 'number')
            throw new Error('Ошибка типа данных');
        
        var date = new Date(this.data[key]*1000)
        //date.setTime(this.data[key])

        return date.toLocaleFormat('%d.%m.%Y %H:%M:%S')
    }

    Order.load = function(order_id, context, callback){
        Vue.http.get(
            '/api/forwarder/orders/'+order_id+'/',
            {
                params: {},
                headers: User.getHeaders(),
            }
        )
        .then(function(response){

            var order = new Order(response.data);

            callback.call(context, order)
        }, function(error){
            console.log('Order.js: load() error', error)
        })
    }

    return Order;
}());
export default Order;

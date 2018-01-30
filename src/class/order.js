"use strict";

import Vue from 'vue'

import store from '../store'

import User from './user'

var Order = /** @class */ (function () {
    function Order(order_data) {
        if (typeof order_data !== "object")
            this.data = order_data;
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

            callback.call(context, response.data)
        }, function(error){
            console.log('Order.js: load() error', error)
        })
    }

    return Order;
}());
export default Order;

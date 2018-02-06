"use strict";

import Vue from 'vue'

import store from '../store'

import User from './user'

var OrderStatusCollection = /** @class */ (function () {
    function OrderStatusCollection(order_data) {

        if (typeof order_data !== "object")
            throw new Error('Ошибка при создании объекта коллекции статусов заказов');

        this.data = order_data;
    }

    OrderStatusCollection.load = function(context, callback){
        Vue.http.get(
            '/api/forwarder/dictionaries/orders/orderStatuses/',
            {
                params: {},
                headers: User.getHeaders(),
            }
        )
        .then(function(response){

            var statuses = new OrderStatusCollection(response.data)

            callback.call(context, statuses)

        }, function(error){
            console.log('OrderStatusCollection.js: load() error', error)
        })
    }

    OrderStatusCollection.prototype.get = function (key) {
        for(let i in this.data)
            if(this.data[i].code == key)
                return this.data[i]

        return undefined
    }

    return OrderStatusCollection;
}());
export default OrderStatusCollection;

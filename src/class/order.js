"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(order_data) {
        if (typeof order_data !== "object")
            this.data = order_data;
    }
    return Order;
}());
exports.default = Order;

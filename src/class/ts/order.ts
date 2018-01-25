export default class Order {
    data: any;

    constructor(order_data: any) {
        if(typeof order_data !== "object")

        this.data = order_data
    }
}

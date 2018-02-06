<template>
  <f7-page>
    <!-- f7-searchbar
        disable-link-text="Отмена"
        placeholder="№ заказа"
        :clear-button="true"
        :custom-search="true"
        :no-shadow="true"
        @input="onSearch"
    ></f7-searchbar -->
        <f7-list no-hairlines class="mt0">
            <f7-list-item>
                <f7-input 
                    type="text" 
                    placeholder="№ заказа" 
                    info='Default "required" validation' 
                    required
                    validate
                    pattern="[0-9]*" 
                    clear-button
                    data-error-message="не формат"
                    @input="onSearch"
                ></f7-input>
            </f7-list-item>

        </f7-list>

        <f7-list v-if="order">
            <f7-list-group>
                <f7-list-item :title="'Заказ №' + order.data.id +' от ' + order.formatDate('dateCreate')" group-title></f7-list-item>
                <f7-list-item title="Статус">[{{order_status.get(order.data.orderStatus).code}}] {{order_status.get(order.data.orderStatus).name}}</f7-list-item>
                <f7-list-item title="Отменен"><f7-icon v-if="order.get('isCanceled')" f7="close"> да</f7-icon><f7-icon v-else f7="check"> нет</f7-icon></f7-list-item>
                <f7-list-item title="Оплачен"><f7-icon v-if="order.get('isPaid')" f7="check"> да</f7-icon><f7-icon v-else f7="close"> нет</f7-icon></f7-list-item>
                <f7-list-item title="Цена корзины">{{order.get('cartTotalFormated')}}</f7-list-item>
                <f7-list-item title="Доставка">{{order.get('deliveryTotalFormated')}}</f7-list-item>
                <f7-list-item title="Скидка">{{order.get('discountTotalFormated')}}</f7-list-item>
                <f7-list-item title="Итого">{{order.get('totalFormated')}}</f7-list-item>

                <f7-list-item :title="'Заказчик ' + order.data.client.name" group-title></f7-list-item>
                <f7-list-item title="Телефон">{{order.data.client.phone}}</f7-list-item>

                <f7-list-item :title="'Данные доставки'" group-title></f7-list-item>
                <f7-list-item title="Дата">{{order.data.delivery.deliveryDate}}</f7-list-item>
                <f7-list-item title="Время">{{order.data.delivery.deliveryTime}}</f7-list-item>
                <f7-list-item title="Зона">{{order.data.delivery.deliveryZone}}</f7-list-item>
                <f7-list-item>Адрес: {{order.data.delivery.address}}</f7-list-item>
                <f7-list-item>Коментарий: {{order.data.user_description}}</f7-list-item>
                <f7-list-item title="Координаты">{{order.data.delivery.coords.lat}},{{order.data.delivery.coords.lon}}</f7-list-item>
                <f7-link :href="'http://www.google.com/maps/place/'+order.data.delivery.coords.lat+','+order.data.delivery.coords.lon">GoogleMaps</f7-link>
            </f7-list-group>
        </f7-list>
    </f7-page>
</template>


<style>
.list-block.mt0 {
    margin-top:0;
}
</style>


<script>
import Vue from 'vue'

import User from '../class/user'

import Order from '../class/order'

export default {
    data: function () {
      return {
        delay: 1000,
        timer: null
      }
    },
    computed: {
        order: function(){
            return this.$store.state.order
        },
        order_status: function(){
            return this.$store.state.order_status
        }
    },
    methods: {
        onSearch: function (query) {
            var self = this

            clearTimeout(self.timer);

            this.$store.dispatch('setCurrentOrder', null)

            self.timer = setTimeout(function(){
                    self.timer = null;
                    if(query.length>0)
                    {
                        Order.load(query, self, function(order){
                            this.$store.dispatch('setCurrentOrder', order)
                        })
                    }
            }, self.delay);
        
        },
    }
  }
</script>
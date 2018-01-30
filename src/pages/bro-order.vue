<template>
  <f7-page>
    <f7-searchbar
        disable-link-text="Отмена"
        placeholder="№ заказа"
        :clear-button="true"
        :custom-search="true"
        :no-shadow="true"
        @input="onSearch"
    ></f7-searchbar>

        <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
        <f7-list class="searchbar-not-found">
            <f7-list-item title="Заказ не найден"></f7-list-item>
        </f7-list>

        <f7-list v-if="order">
            <f7-list-group>
                <f7-list-item :title="'Заказ №' + order.id +' от ' + order.dateCreate" group-title></f7-list-item>
                <f7-list-item title="Статус">{{order.orderStatus}}</f7-list-item>
                <f7-list-item title="Отменен"><f7-icon v-if="order.isCanceled" f7="close"> да</f7-icon><f7-icon v-else f7="check"> нет</f7-icon></f7-list-item>
                <f7-list-item title="Оплачен"><f7-icon v-if="order.paymentStatus" f7="check"> да</f7-icon><f7-icon v-else f7="close"> нет</f7-icon></f7-list-item>
                <f7-list-item title="Цена корзины">{{order.cartTotalFormated}}</f7-list-item>
                <f7-list-item title="Доставка">{{order.deliveryTotalFormated}}</f7-list-item>
                <f7-list-item title="Скидка">{{order.discountTotalFormated}}</f7-list-item>
                <f7-list-item title="Итого">{{order.totalFormated}}</f7-list-item>
            </f7-list-group>
            <f7-list-group>
                <f7-list-item title="Данные для доставки" group-title></f7-list-item>
                <f7-list-item title="Item 1">adsasd asdadsasd asdasd ad</f7-list-item>
                <f7-list-item title="Item 2">asdasd asdasdasda asdasdasd asdadasd aasdfad</f7-list-item>
            </f7-list-group>
        </f7-list>
    </f7-page>
</template>

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
        }
    },
    methods: {
        onSearch: function (query) {
            var self = this

            clearTimeout(self.timer);

            self.timer = setTimeout(function(){
                    self.timer = null;
                    if(query.length)
                        Order.load(query, self, function(order){
                            this.$store.dispatch('setCurrentOrder', order)
                            console.log('order callback', order)
                        })
            }, self.delay);
        
      },
      onClear: function (event) {
        console.log('clear');
      },
      onEnable: function (event) {
        console.log('enable');
      },
      onDisable: function (event) {
        console.log('disable');
      },
    }
  }
</script>
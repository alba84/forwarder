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
                <f7-list-item title="Статус">{{order.get('orderStatus')}}</f7-list-item>
                <f7-list-item title="Отменен"><f7-icon v-if="order.get('isCanceled')" f7="close"> да</f7-icon><f7-icon v-else f7="check"> нет</f7-icon></f7-list-item>
                <f7-list-item title="Оплачен"><f7-icon v-if="order.get('paymentStatus')" f7="check"> да</f7-icon><f7-icon v-else f7="close"> нет</f7-icon></f7-list-item>
                <f7-list-item title="Цена корзины">{{order.get('cartTotalFormated')}}</f7-list-item>
                <f7-list-item title="Доставка">{{order.get('deliveryTotalFormated')}}</f7-list-item>
                <f7-list-item title="Скидка">{{order.get('discountTotalFormated')}}</f7-list-item>
                <f7-list-item title="Итого">{{order.get('totalFormated')}}</f7-list-item>
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
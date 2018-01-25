<template>
  <f7-page>
    <f7-navbar title="Заказ №" back-link="Back" sliding></f7-navbar>
    <f7-block inner>
      <p>Детали заказа</p>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  //name: 'order-detail'//,
  props: ['order']
}
</script>
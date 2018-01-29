<template>
  <f7-page>
    <f7-searchbar
        disable-link-text="Отмена"
        placeholder="№ заказа"
        :clear-button="true"
        :custom-search="true"
        @searchbar:search="onSearch"
    ></f7-searchbar>

    <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Заказ не найден"></f7-list-item>
    </f7-list>

    <!-- Search through this list -->
    
    <f7-preloader></f7-preloader>
  </f7-page>
</template>

<script>
export default {
    data: function () {
      return {
        order_id: 0
      }
    },
    methods: {
      onSearch: function (query) {
        console.log('search', query);
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
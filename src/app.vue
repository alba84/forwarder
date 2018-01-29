<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Меню" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Меню" sliding></f7-navbar>
            <!-- f7-block inner>
              <p>Left panel content goes here</p>
            </f7-block -->
            <f7-list>
              <!-- f7-list-item link="/auth/" title="Авторизация" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/order/" title="К заказу" link-view="#main-view" link-close-panel></f7-list-item -->
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Broccoli-экспедитор</f7-nav-center>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>Broccoli-экспедитор</f7-nav-center>
            </f7-navbar>
            <!-- Page Content -->
            
            <bro-login v-if="authorized == false"></bro-login>
            <bro-order v-if="authorized"></bro-order>

            <!-- bro-order></bro-order -->

            <!-- f7-block-title>Navigation</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
              <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
              <f7-list-item link="/order/" title="Раздел заказа"></f7-list-item>
              <f7-list-item link="/order/30000/" title="Перейти к заказу 30000"></f7-list-item>
            </f7-list>
            <f7-block-title>Side Panels</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-panel="left">Left Panel</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-panel="right">Right Panel</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
            <f7-block-title>Modals</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-popup="#popup">Popup</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
                  <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block -->
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

  </div>
</template>

<script>
import Vue from 'vue'

import User from './class/user'

import BroLogin from './pages/bro-login'
import BroOrder from './pages/bro-order'

export default {
    created: function () {

        this.$store.dispatch('init')

        //this.$store.dispatch('setCurrentOrder', 30201)

        //let user = this.$store.getters.user;
        //let order = this.$store.getters.order;
        //console.log(user.isAuthorized(), user.id, user.name);
        //console.log(order.id, order.name);
    },
    components:{
        'bro-login': BroLogin,
        'bro-order': BroOrder
    },
    computed: {
        authorized: function(){
            return User.isAuthorized();
        }
        /*user: function(){
            return this.$store.getters.user
        },*/
    },
    data: function(){
        return {
            loading: false
        }
    }
}
</script>
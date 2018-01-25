// Import Vue
import Vue from 'vue'

import VueResource from 'vue-resource'

import Vuex from 'vuex'

import VueLocalStorage from 'vue-localstorage'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* // OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

import AppStyles from './css/app.css'

import Routes from './routes.js'

import Store from './store.js'

import App from './app'

Vue.use(VueResource)

Vue.use(VueLocalStorage)

Vue.use(Vuex)

Vue.use(Framework7Vue)

const store = new Vuex.Store(Store)

// Init App
new Vue({
	el: '#app',
	store,
	template: '<app/>',

	framework7: {
		root: '#app',
		/* Uncomment to enable Material theme: */
		// material: true,
		routes: Routes,
	},

	components: {
		app: App
	}
});

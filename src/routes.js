export default [
    {
        path: '/about/',
        component: require('./pages/about.vue')
    },
    {
        path: '/form/',
        component: require('./pages/form.vue')
    },
    {
        path: '/order/',
        component: require('./pages/order.vue')
    },
    {
        path: '/order/:orderId/',
        component: require('./pages/order.vue')
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: require('./pages/dynamic-route.vue')
    }
]
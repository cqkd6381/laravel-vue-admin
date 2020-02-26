require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';

import store from './store/index';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    store
});

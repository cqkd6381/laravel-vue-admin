import VueRouter from 'vue-router'
import Store from './store/index'

let routes = [
    {
        path: '/',
        name: 'home',
        components: require('./views/home/Home'),
        meta: {}
    },
    {
        path: '/login',
        name: 'login',
        components: require('./components/login/Login'),
        meta: {}
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router


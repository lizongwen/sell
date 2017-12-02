// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';
import config from './common/js/config';
import '../static/css/reset.less';
import './common/style/icon.css';
import './common/style/base.css';



Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes: [
        { path: '/goods', component: goods },
        { path: '/seller', component: seller },
        { path: '/ratings', component: ratings }
    ],
    linkActiveClass: "active"
});

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
});
// router.push('/goods');
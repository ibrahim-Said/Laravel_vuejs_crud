require('./bootstrap');
import Vue from 'vue'
import VueX from 'vuex'
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from './componants/App.vue'
import Datastores from './stores';
Vue.use(VueRouter);
Vue.use(VueX);
const router = new VueRouter({
    routes,
    mode: 'history'
});
const store = new VueX.Store(Datastores);
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    }

});
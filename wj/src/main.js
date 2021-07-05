/*
入口js
*/

import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js'
import '../static/css/reset.css';
import store from './store';

new Vue({
    el:'#app',
    data:{
     
    },
    components:{
        App
    },
    template:`
    <App/>
    `,
    router,
    store

}).$mount("#app")
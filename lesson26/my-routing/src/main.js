import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import router from './routes';

window.Vue = Vue;
window.axios = axios;

new Vue({
  el: '#app',

  router: router
});

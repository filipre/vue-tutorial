import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from './views/Home';
import About from './views/About';
import Other from './views/Other';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/other',
            component: Other
        }
    ],
    linkActiveClass: 'is-active'
});

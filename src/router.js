import Vue from "vue"
import VueRouter from "vue-router";
import Home from '@/page/home'
import Index from '@/page/index'
import Product from '@/page/product'
import Detail from '@/page/detail'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: '/product',
                    name: 'product',
                    component: Product
                }, {
                    path: 'detail',
                    name: 'detail',
                    component: Detail
                }
            ]
        }
    ]
})
import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../components/MyHome.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'myhome',
        component: MyHome
        },
        {
            path: '/shoppingcart',
            name: 'shoppingcart',
            // route level code-splitting
            // this generates a separate chunk (Manue.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../components/ShoppingCart.vue')
        }
    ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [{
        path: '/',
        name: 'PLP',
        component: Home,
        meta: {
            title: 'Digikala'
        }
    },
    {
        path: '/product/:id',
        name: 'PDP',
        component: () =>
            import ('@/views/Details.vue'),
        meta: {
            title: 'Product'
        }
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () =>
            import ('@/views/Cart.vue'),
        meta: {
            title: 'Cart'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () =>
            import ('@/views/404.vue'),
        meta: {
            title: '404 | Not Found'
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
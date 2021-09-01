import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'PLP',
        component: Home
    },
    {
        path: '/:title',
        name: 'PDP',
        component: () =>
            import ('../views/Details.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () =>
            import ('../views/404.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
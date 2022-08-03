import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import('../views/test/index.vue')
    },
    {
        path: "/index",
        component: () => import('../views/test/index.vue')
    },
    {
        path: "/resume",
        component: () => import('../components/test/Resume.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
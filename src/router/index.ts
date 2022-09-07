import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import('../views/default.vue')
    },
    {
        path: "/test",
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
    {
        path: "/upload",
        component: () => import('../components/md_editor.vue')
    },
    {
        path: "/blog",
        component: () => import('../components/blog_viewer.vue')
    },
    {
        path: "/visual",
        component: () => import('../views/test/visualization.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
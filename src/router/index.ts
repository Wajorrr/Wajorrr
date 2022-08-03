import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw>=[
    {
        path:"/",
        component:()=>import('../views/test/index.vue')
    },
    {
        path:"/index",
        component:()=>import('../views/test/index.vue')
    },
    {
        path:"/resume",
        component:()=>import('../components/test/简历.vue')
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
    },
    {
        path: '/lead',
        name: 'lead',
        component: () => import('@/views/Lead.vue'),
    },
    {
        path: '/activity',
        name: 'activity',
        component: () => import('@/views/Activity.vue'),
    },
    {
        path: '/report',
        name: 'report',
        component: () => import('@/views/Report.vue'),
    },
    {
        path: '/support',
        name: 'support',
        component: () => import('@/views/Support.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
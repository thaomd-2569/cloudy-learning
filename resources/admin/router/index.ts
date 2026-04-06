import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('../Dashboard.vue') },
    { path: '/users', component: () => import('../Users.vue') },
];

export const router = createRouter({
    history: createWebHistory('/admin/'), // prefix admin
    routes,
});

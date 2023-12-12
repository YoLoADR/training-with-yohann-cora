// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import ContactPage from '@/views/ContactPage.vue';


const routes = [
  { path: '/', name: 'Accueil', component: HomePage },
  { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

export default router;

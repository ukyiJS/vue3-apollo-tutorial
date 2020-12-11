import { getRoutes } from '@/utils';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: getRoutes(),
});

export default router;

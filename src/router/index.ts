// Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Views
import HomeView from '@/views/home-view/HomeView.vue';

// Libraries
// import axios from 'axios';

// Types
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/:catchAll(.*)', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  /*
    if (!KeycloakService.isAuthenticated()) {
      const portalUrl = import.meta.env.VITE_PORTAL_URL;
      KeycloakService.logout(portalUrl);
      return next();
    }
  
    if (to.meta.isAdmin) {
      if (!KeycloakService.hasRole('SOME_ADMIN_ROLE')) {
        return next({ name: 'Unauthorized' });
      }
    }

    axios.defaults.headers.common.Authorization = `Bearer ${KeycloakService.getToken()}`;
  */
  return next();
});

export default router;

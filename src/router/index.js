import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
        },
        {
          path: 'home',
          component: () => import('../pages/home.vue'),
        },
        {
          path: 'groupe',
          component: () => import('../pages/groupe.vue'),
        },
        {
          path: 'publication',
          component: () => import('../pages/publication.vue'),
        },
        {
          path: 'profile/:id',
          name: "profile",
          component: () => import('../pages/profile.vue'),
        },
        {
          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
        },
        {
          path: 'typography',
          component: () => import('../pages/typography.vue'),
        },
        {
          path: 'icons',
          component: () => import('../pages/icons.vue'),
        },
        {
          path: 'cards',
          component: () => import('../pages/cards.vue'),
        },
        {
          path: 'tables',
          component: () => import('../pages/tables.vue'),
        },
        {
          path: 'form-layouts',
          component: () => import('../pages/form-layouts.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // Vérifiez l'état de l'authentification ici, utilisez votre système d'authentification ou Vuex
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login') // Redirige vers /login si l'utilisateur n'est pas authentifié et tente d'accéder à une route protégée
  } else {
    if ((isAuthenticated) && (to.name == 'register' || to.name == 'login')) {
      next('/')
    } else {
      next() // Poursuit la navigation normalement
    }
  }
})

export default router

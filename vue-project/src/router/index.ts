import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',    
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../components/forms/Finance.vue'), // создайте этот компонент
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('../components/forms/Test.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;

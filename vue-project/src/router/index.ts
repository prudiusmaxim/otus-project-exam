import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',    
    children: [
      {
        path: '', // пустой путь для корневого маршрута
        name: 'home',
        component: () => import('../Home.vue'), // создайте этот компонент
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('../Test.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;

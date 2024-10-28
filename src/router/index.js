import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SecondPage from '../components/SecondPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/second',
    name: 'Second',
    component: SecondPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

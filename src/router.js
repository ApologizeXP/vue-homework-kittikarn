import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import profile from './pages/profile.vue';
import contract from './pages/contract.vue';
const routes = [
  { path: '/', name: 'profile', component: profile },
  { path: '/contract', name: 'contract', component: contract },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

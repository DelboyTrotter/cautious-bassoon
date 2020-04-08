import Vue from 'vue';
import VueRouter from 'vue-router';

const Items = () => import(/* webpackChunkName: "Items" */ '@/views/Items');
const ItemDetails = () => import(/* webpackChunkName: "ItemDetails" */ '@/views/ItemDetails');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/list-items',
  },
  {
    path: '/list-items',
    name: 'ListItems',
    component: Items,
  },
  {
    path: '/list-items/:id',
    name: 'item',
    component: ItemDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

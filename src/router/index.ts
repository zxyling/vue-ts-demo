import Vue from 'vue';
import Router from 'vue-router';


const Home = () =>  import('@/pages/home/Home.vue');
const HelloWorld = () => import('@/components/HelloWorld.vue');
const Demo1 = () => import('@/components/demo1.vue');
const Demo2 = () => import('@/components/demo2.vue');



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
        path: '/demo1',
        name: 'Demo1',
        component: Demo1
    },
    {
        path: '/demo2',
        name: 'Demo2',
        component: Demo2
    }
  ]
});

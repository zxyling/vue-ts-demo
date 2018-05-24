import Vue from 'vue';
import Router from 'vue-router';


const Home = () =>  import('@/pages/home/Home.vue');


// 测试组件
const HelloWorld = () => import('@/components/demo/HelloWorld.vue');
const Demo1 = () => import('@/components/demo/demo1.vue');
const Demo2 = () => import('@/components/demo/demo2.vue');
const Demo3 = () => import('@/components/demo/demo3.vue');



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
    },
    {
      path: '/demo3',
      name: 'Demo3',
      component: Demo3
    }
  ]
});

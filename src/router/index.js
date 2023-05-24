import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
    meta: {title: '绍兴市公安局刑侦支队'},
    redirect: 'form',
    children: [
      {
        path: 'form',
        name: 'form',
        component: () => import(/* webpackChunkName: "form" */ '../views/tabsPage/form.vue'),
        meta: {title: '主面'}
      },
      {
        path: 'DragScale',
        name: 'DragScale',
        component: () => import(/* webpackChunkName: "DragScale" */ '../views/tabsPage/DragScale.vue'),
        meta: {title: '中央空调监控系统'}
      },
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '../views/tabsPage/list.vue'),
        meta: {title: '中央空调监控系统'}
      },
      {
        path: 'Temperature',
        name: 'Temperature',
        component: () => import(/* webpackChunkName: "Temperature" */ '../views/tabsPage/Temperature.vue'),
        meta: {title: '温湿度压差'}
      },
      {
        path: 'headlamp',
        name: 'headlamp',
        component: () => import(/* webpackChunkName: "headlamp" */ '../views/tabsPage/headlamp.vue'),
        meta: {title: '照明灯'}
      },
      {
        path: 'ModularMachine',
        name: 'ModularMachine',
        component: () => import(/* webpackChunkName: "ModularMachine" */ '../views/tabsPage/ModularMachine.vue'),
        meta: {title: '模块机'}
      },
      {
        path: 'AlarmRecord',
        name: 'AlarmRecord',
        component: () => import(/* webpackChunkName: "AlarmRecord" */ '../views/tabsPage/AlarmRecord.vue'),
        meta: {title: '报警记录'}
      },
      {
        path: 'GermicidalLamp',
        name: 'GermicidalLamp',
        component: () => import(/* webpackChunkName: "GermicidalLamp" */ '../views/tabsPage/GermicidalLamp.vue'),
        meta: {title: '杀菌灯'}
      },
      {
        path: 'UserLogin',
        name: 'UserLogin',
        component: () => import(/* webpackChunkName: "UserLogin" */ '../views/tabsPage/UserLogin.vue'),
        meta: {title: '用户登录'}
      },
      {
        path: 'DeviceManagement',
        name: 'DeviceManagement',
        component: () => import(/* webpackChunkName: "DeviceManagement" */ '../views/tabsPage/DeviceManagement.vue'),
        meta: {title: '设备管理'}
      },
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
    meta: { title: '404' }
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.keepAlive && savedPosition) return savedPosition;
    return { x: 0, y: 0 };
  }
});

/* 路由拦截 */
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) next('/404')
  else next()
})

export default router

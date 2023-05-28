import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/tabs/index.vue'),
    meta: {title: '绍兴市公安局刑侦支队'},
    redirect: 'form',
    children: [
      {
        path: 'form',
        name: 'form',
        component: () => import(/* webpackChunkName: "form" */ '../views/tabs/form.vue'),
        meta: {title: '主面'}
      },
      {
        path: 'DragScale',
        name: 'DragScale',
        component: () => import(/* webpackChunkName: "DragScale" */ '../views/tabs/DragScale.vue'),
        meta: {title: '中央空调监控系统'}
      },
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '../views/tabs/list.vue'),
        meta: {title: '列表'}
      },
      {
        path: 'swiper',
        name: 'swiper',
        component: () => import(/* webpackChunkName: "swiper" */ '../views/tabs/swiper.vue'),
        meta: {title: '轮播图'}
      },
      {
        path: 'svg',
        name: 'svg',
        component: () => import(/* webpackChunkName: "svg" */ '../views/tabs/svg.vue'),
      },
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/index.vue'),
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
  if (to.matched.length === 0) {
    alert("路由错误，没有找到页面，跳转失败。");
    next(from);
  } else {
    next();
  }
})

export default router

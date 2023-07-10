import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'tabs',
    component: () => import(/* webpackChunkName: "home" */ '../views/tabs/index.vue'),
    meta: {title: '二次封装模块'},
    redirect: 'form',
    children: [
      {
        path: 'form',
        name: 'form',
        component: () => import(/* webpackChunkName: "form" */ '../views/tabs/form.vue'),
        meta: {title: '表单验证', icon: 'icon-a-3AHU01kongtiao'}
      },
      {
        path: 'DragScale',
        name: 'DragScale',
        component: () => import(/* webpackChunkName: "DragScale" */ '../views/tabs/DragScale.vue'),
        meta: {title: '缩放/拖拽', icon: 'icon-a-3AHU01kongtiao'}
      },
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '../views/tabs/list.vue'),
        meta: {title: '列表组件', icon: 'icon-a-3AHU01kongtiao'}
      },
      {
        path: 'swiper',
        name: 'swiper',
        component: () => import(/* webpackChunkName: "swiper" */ '../views/tabs/swiper.vue'),
        meta: {title: '轮播图组件', icon: 'icon-a-3AHU01kongtiao'}
      },
      {
        path: 'svg',
        name: 'svg',
        component: () => import(/* webpackChunkName: "svg" */ '../views/tabs/svg.vue'),
        meta: {title: 'SVG组件', icon: 'icon-a-3AHU01kongtiao'}
      },
      {
        path: 'shopping',
        name: 'shopping',
        component: () => import(/* webpackChunkName: "shopping" */ '../views/tabs/shopping.vue'),
        meta: {title: '抛物线', icon: 'icon-a-3AHU01kongtiao'}
      },
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/index.vue'),
    meta: {title: '商品列表'}
  },
  {
    path: '/shop-details',
    name: 'shopDetails',
    component: () => import(/* webpackChunkName: "shopDetails" */ '../views/shop/details.vue'),
    meta: {title: '商品详情'}
  },
  {
    path: '/shop-details2',
    name: 'shopDetails2',
    component: () => import(/* webpackChunkName: "shopDetails" */ '../views/shop/details2.vue'),
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

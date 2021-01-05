import Vue from 'vue'
import VueRouter from 'vue-router'
import selectPhnoe from "../views/selectPhnoe";
import trans from "../views/trans"
import smartChangeGlobe from "../views/smartChangeGlobe";
import upload from "../views/upload.vue"
import markDown from "../views/markDown";
import maoDian from "../views/maoDian";
import scrollerData from "../views/scrollerData"
import redpacket from "../views/redpacket";
import jieliu from "../views/jieliu"
import daojishi from "../views/daojishi";
import login from "../views/login";
import showPackage from "../views/showPackage"
import priceList from "../views/priceList"
import tuozhuai from "../views/tuozhuai";
import daochuExcle from "../views/daochuExcle";
import jump from "../views/jump";

Vue.use(VueRouter)

 export const asyncRouterMap = [
    {
      path: '/jump',
      name: 'jump',
      component: jump,
    },
   {
     path: '/tuozhuai',
     name: 'tuozhuai',
     component: tuozhuai,
   },
   {
     path: '/login',
     name: 'login',
     component: login,
   },
    {
      path: '/daochuExcle',
      name: 'daochuExcle',
      component: daochuExcle,
    },
    {
      path: '/',
      name: 'selectPhnoe',
      component: selectPhnoe,
    },
    {
      path: '/priceList',
      name: 'priceList',
      component: priceList,
    },
    {
      path: '/showPackage',
      name: 'showPackage',
      component: showPackage,
    },
  {
    path: 'selectPhnoe',
    name: 'selectPhnoe',
    component: selectPhnoe
  },
    {
      path: '/daojishi',
      name: 'daojishi',
      component: daojishi
    },
    {
      path: '/redpacket',
      name: 'redpacket',
      component: redpacket
    },
    {
      path: '/jieliu',
      name: 'jieliu',
      component: jieliu
    },
    {
      path: '/smartChangeGlobe',
      name: 'smartChangeGlobe',
      component: smartChangeGlobe
    },
    {
      path: '/scrollerData',
      name: 'scrollerData',
      component: scrollerData
    },
    {
      path:'/trans',
      name:'trans',
      component: trans,
    },
    {
      path:'/upload',
      name:'upload',
      component: upload,
    },
    {
      path:'/markDown',
      name:'markDown',
      component: markDown,
    },
    {
      path: '/maoDian',
      name:'maoDian',
      component: maoDian,
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes : asyncRouterMap
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.token) {
      next();
    } else {
      next({ path: "/" });
    }
  }
  else {
    next();
  }
})

export default router

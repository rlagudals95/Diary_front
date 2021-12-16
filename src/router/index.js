import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchResult from "../views/SeachResult.vue";
import UploadDiary from "../views/UploadDiary.vue";
import Login from "../views/Login.vue";
import Join from "../views/Join.vue";
import DiaryView from "../views/DiaryView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/join",
    name: "Join",
    component: Join,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/searchResult",
    name: "SearchResult",
    component: SearchResult,
  },
  {
    path: "/uploadDiary",
    name: "UploadDiary",
    component: UploadDiary,
  },
  {
    path: "/diaryView",
    name: "DiaryView",
    component: DiaryView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Main from "@/pages/Main";
import CounterPage from "@/pages/CounterPage";
import PostPage from "@/pages/PostPage";
import PostId from "@/pages/PostId";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/counter",
    component: CounterPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/posts/:id",
    component: PostId,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;

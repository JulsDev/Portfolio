export default [
  {
    path: "/",
    name: "about",
    component: () => import("components/about/about.vue")
  },
  {
    path: "/works",
    name: "works",
    component: () => import("components/works/works.vue")
  },
  {
    path: "/reviews",
    name: "reviews",
    component: () => import("components/reviews/reviews.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("components/login/login.vue"),
    meta: {
      public: true
    }
  }
];
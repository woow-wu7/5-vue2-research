const learnRoutes = [
  {
    path: "/learn",
    name: "Learn",
    component: () =>
      import(/* webpackChunkName: "Learn" */ "../views/Learn.vue"),
    selectName: "学习",
    children: [
      {
        path: "/learn/source-code",
        name: "LearnSourceCode",
        component: () =>
          import(
            /* webpackChunkName: "LearnSourceCode" */ "../components/learn/learn-source-code/index.vue"
          ),
        menuName: "源码学习",
        icon: "el-icon-menu",
        children: [
          {
            path: "/learn/source-code/vue",
            name: "LearnSourceCodeVue",
            component: () =>
              import(
                /* webpackChunkName: "LearnSourceCodeVue" */ "../components/learn/learn-source-code/vue-source/index.vue"
              ),
            menuName: "vue源码",
            icon: "el-icon-pie-chart",
            children: [
              {
                path: "/learn/source-code/vue/nextTick",
                name: "LearnSourceCodeVueNextTick",
                component: () =>
                  import(
                    /* webpackChunkName: "LearnSourceCodeVueNext" */ "../components/learn/learn-source-code/vue-source/nextTick/index.vue"
                  ),
                menuName: "nextTick",
              },
            ],
          },
          {
            path: "/learn/source-code/axios",
            name: "LearnSourceCodeAxios",
            component: () =>
              import(
                /* webpackChunkName: "LearnSourceCodeAxios" */ "../components/learn/learn-source-code/axios-source/index.vue"
              ),
            menuName: "axios源码",
            icon: "el-icon-news",
          },
        ],
      },
      {
        path: "/learn/element-ui",
        name: "LearnElementUi",
        component: () =>
          import(
            /* webpackChunkName: "LearnElementUi" */ "../components/learn/learn-element-ui/index.vue"
          ),
        menuName: "Element-Ui",
        icon: "el-icon-platform-eleme",
      },
      {
        path: "/learn/keep-alive",
        name: "KeepAlive",
        component: () =>
          import(/* webpackChunkName: "KeepAlive" */ "../views/KeepAlive.vue"),
        menuName: "keep-alive",
        icon: "el-icon-platform-eleme",
      },
    ],
  },
];

export default learnRoutes;

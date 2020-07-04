
const learnRoutes = [
    {
        path: '/learn',
        name: 'Learn',
        component: () => import(/* webpackChunkName: "Learn" */ '../views/Learn.vue'),
        selectName: '学习',
        children: [
            {
                path: '/learn/source-code',
                name: 'LearnSourceCode',
                component: () => import(/* webpackChunkName: "LearnSourceCode" */ '../components/learn-source-code/index.vue'),
                menuName: '源码学习',
                icon: 'el-icon-menu',
                children: [
                    {
                        path: '/learn/source-code/vue',
                        name: 'LearnSourceCodeVue',
                        component: () => import(/* webpackChunkName: "LearnSourceCodeVue" */ '../components/learn-source-code/vue-source/index.vue'),
                        menuName: 'vue源码',
                        icon: 'el-icon-location',
                        children: [
                            {
                                path: '/learn/source-code/vue/nextTick',
                                name: 'LearnSourceCodeVueNextTick',
                                component: () => import(/* webpackChunkName: "LearnSourceCodeVueNext" */ '../components/learn-source-code/vue-source/nextTick/index.vue'),
                                menuName: 'nextTick',
                            }
                        ]
                    },
                    {
                        path: '/learn/source-code/axios',
                        name: 'LearnSourceCodeAxios',
                        component: () => import(/* webpackChunkName: "LearnSourceCodeAxios" */ '../components/learn-source-code/axios-source/index.vue'),
                        menuName: 'axios源码',
                        icon: 'el-icon-location'
                    },
                ]
            }
        ]
    },
]

export default learnRoutes